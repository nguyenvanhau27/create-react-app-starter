import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validateForm";
import CustomInput from "../../components/CustomInput";
import SelectCustorm from "../../components/SelectCustorm";
import SelectDay from "./SelectDay";
// import { toast } from "react-toastify";
import "./styles.css";
import axios from "axios";
import { Table } from "react-bootstrap";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

// import { Schema } from "yup";
const Filter = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const resetForm = () => {
    reset();
  };
  const BaseURL = process.env.REACT_APP;
  useEffect(() => {
    loadDataSchool();
    loadDatagraduation();
  }, []);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(
  //     "backendinformationlookup-production.up.railway.app/api/school/"
  //   ).then((res) => console.log(res));
  // }, []);
  const [school, setSchool] = useState([]);
  const [graduation, setGraduation] = useState([]);
  const [resultSearch, setResultSearch] = useState([]);
  // List school
  const loadDataSchool = () => {
    axios
      .get(
        `http://backendinformationlookup-production.up.railway.app/api/school/`
      )
      .then((res) => {
        const persons = res.data;
        setSchool(persons);
      })
      .catch((error) => console.log(error));
  };
  // List school
  const loadDatagraduation = () => {
    axios
      .get(
        `http://backendinformationlookup-production.up.railway.app/api/graduation`
      )
      .then((res) => {
        const persons = res.data;
        setGraduation(persons);
      })
      .catch((error) => console.log(error));
  };

  const handleLogout = () => {
    toast.error("Không tìm thấy thông tin tra cứu", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  // List school

  const takeData = (formData) => {
    axios
      .post(
        `http://backendinformationlookup-production.up.railway.app/api/search`,
        formData
      )
      .then((res) => {
        const persons = res.data;
        console.log(res.data);
        if (res.data === "") {
          handleLogout();
          setResultSearch([]);
        } else {
          setResultSearch(persons);
        }
      })
      .catch((error) => {
        setResultSearch([]);
        handleLogout();
      });
  };
  const onSubmit = (data) => {
    const formData = new FormData();
    data?.graduation?.length > 0 && formData.append("year", data?.graduation);
    data?.school?.length > 0 && formData.append("schoolId", data?.school);
    data?.certificateCode?.length > 0 &&
      formData.append("identification", data?.certificateCode);
    data?.identifier?.length > 0 &&
      formData.append("certificateAuthentication", data?.identifier);
    data?.fullName?.length > 0 &&
      formData.append("studentName", data?.fullName);
    data?.birthDay?.length > 0 &&
      formData.append(
        "birthday",
        data?.birthDay?.split("-").reverse().join("-")
      );
    // call API searchs
    console.log(resultSearch);
    Object.values(data).every((item) => item === "") && handleLogout();

    return Object.values(data).every((item) => item === "")
      ? setResultSearch("")
      : data?.certificateCode !== "" || data?.identifier !== ""
      ? takeData(formData)
      : data?.certificateCode === "" &&
        data?.identifier === "" &&
        data?.fullName !== "" &&
        data?.birthDay !== "" &&
        data?.school !== ""
      ? takeData(formData)
      : setResultSearch("");
  };
  return (
    <>
      <div className="main-body">
        <div className="d-flex align-items-center tt-text-menu mt-5 ">
          <div className="row w-100 d-flex justify-content-around">
            <div className="col-lg-10 col-12 ml-4">
              <span className="span-text" onClick={handleLogout}>
                <strong>Tra cứu thông tin văn bằng chứng chỉ</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="container">
          <form className="row">
            <SelectCustorm
              register={register}
              placeholder="Khóa thi"
              defaultValue={null}
              options={graduation}
              id="graduation"
              className="col-12 col-sm-6 col-md-4"
              children={errors?.graduation?.message}
            />
            <SelectCustorm
              register={register}
              placeholder="Trường"
              id="school"
              options={school}
              className="col-12 col-sm-6 col-md-4"
              children={errors?.school?.message}
            />
            <CustomInput
              type="text"
              id="certificateCode"
              className="col-12 col-sm-6 col-md-4"
              placeholder="Số hiệu văn bằng/chứng chỉ"
              register={register}
              children={errors?.certificateCode?.message}
            />

            <CustomInput
              type="text"
              className="col-12 col-sm-6 col-md-4"
              placeholder="Họ và tên"
              id="fullName"
              register={register}
              children={errors?.fullName?.message}
            />

            <CustomInput
              type="text"
              id="identifier"
              className="col-12 col-sm-6 col-md-4"
              placeholder="CMND/CCCD"
              register={register}
              errors={errors}
              children={errors?.identifier?.message}
            />
            <SelectDay
              id="birthDay"
              format="dd/MM/yyyy"
              register={register}
              className="col-12 col-sm-6 col-md-4"
              placeholder="Vui lòng nhập ngày sinh."
              type="date"
              defaultValue={new Date()}
              children={errors?.birthDay?.message}
            />
            <div className=" col-12 mt-1 mb-2 div-luuy text-danger">
              <span className="span">Lưu ý:</span> Chỉ cần điền Số hiệu VBCC
              hoặc CMND/CCCD để tra cứu. Nếu không nhớ/không có, vui lòng điền
              đầy đủ cả 3 thông tin: Trường, Họ và tên, Ngày sinh.
            </div>
            <div className="col-12 mt-1 text-center">
              <button
                onClick={resetForm}
                className="btn-nhaplai btn btn-light me-2"
              >
                <i className="fa fa-undo mr-2" />
                Nhập lại
              </button>
              <button
                value="Submit"
                className="btn-tracuu btn btn-primary"
                type="submit"
                onClick={handleSubmit(onSubmit)}
              >
                <i className="fa fa-search mr-2" />
                Tra cứu
              </button>
            </div>
          </form>
          <div className="row ">
            <Table
              striped
              bordered
              hover
              responsive="xl"
              className="custom-table"
            >
              <thead>
                <tr className="text-center">
                  <th scope="col">Khóa thi</th>
                  <th scope="col">Họ và tên</th>
                  <th scope="col">Ngày sinh</th>
                  <th scope="col">Số hiệu văn bằng/chứng chỉ</th>
                  <th scope="col">CMND/CCCD</th>
                  <th scope="col">Trường</th>
                  <th scope="col">Thời gian ký</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{resultSearch.year}</td>
                  <td>{resultSearch.name}</td>
                  <td>{resultSearch.birthday}</td>
                  <td>{resultSearch.identification}</td>
                  <td>{resultSearch.certificateAuthentication}</td>
                  <td>{resultSearch.school}</td>
                  <td>{resultSearch.dateSign}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;

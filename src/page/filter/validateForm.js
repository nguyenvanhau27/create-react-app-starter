import { useSelector } from "react-redux";
import * as yup from "yup";
// import yup from "./yupGlobal";

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const PHONE_REGEX =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$/im;
const uni = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;

const regexName = (str) => {
  if (!str) return "";
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  return str;
};

export const schema = yup.object({
  // fullName: yup
  //   .string()
  //   .nullable()
  //   .required("* Vui lòng nhập họ và tên")
  //   .test(
  //     "* Validate Tên",
  //     "* Vui lòng không kết thúc bằng dấu cách",
  //     (value) => {
  //       return !(value.split("").pop() === " ");
  //     }
  //   )
  //   .test(
  //     "* Validate Tên",
  //     "* Vui lòng nhập họ và tên lót đúng định dạng",
  //     (value) => {
  //       return uni.test(regexName(value));
  //     }
  //   )
  //   .min(2, "* Họ và tên lót phải có độ dài từ 2 đến 32 ký tự")
  //   .max(32, "* Họ và tên lót phải có độ dài từ 2 đến 32 ký tự"),
  // certificateCode: yup
  //   .string()
  //   .required("* Bạn phải nhập số chứng chỉ"),
  // identifier: yup //
  //   .string()
  //   .required("* Bạn phải nhập CMND/CCCD")
  //   .matches(/[0-9]/, "* Vui lòng nhập CMND/CCCD"),
  // birthDay: yup.string().nullable().required(" * Bạn phải nhập ngày sinh"),
  // graduation: yup
  //   .string()
  //   .nullable()
  //   .required(" * Bạn phải chọn khóa thi")
  //   .matches(/[0-9]/, " * Bạn phải chọn khóa thi"),
  // school: yup
  //   .string()
  //   .nullable()
  //   .required(" * Bạn phải chọn trường tốt nghiệp")
  //   .matches(/[0-9]/, " * Bạn phải chọn trường tốt nghiệp"),
});

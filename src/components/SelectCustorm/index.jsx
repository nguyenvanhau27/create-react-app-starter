import React from "react";
import { Form } from "react-bootstrap";
// import { Form } from "react-hook-form";

const SelectCustorm = ({
  type,
  name,
  placeholder = null,
  register,
  defaultValue,
  value,
  options,
  id,
  className,
  children,
}) => {
  const classCustorm = `d-flex flex-column align-items-start ${className}`;

  const selectItem = (idName) => {
    const school = options?.map((item, inx) => {
      return (
        <option value={item.id} className="overflow-auto">
          {item.name}
        </option>
      );
    });
    const graduation = options?.map((item, inx) => (
      <option value={item} className="overflow-auto">
        {" "}
        [THPT] ({item}) - Tốt nghiệp THPT {item}{" "}
      </option>
    ));
    return idName === "school" ? school : graduation;
  };

  return (
    <Form.Group className={classCustorm}>
      <Form.Label className="m-0 my-2">
        <strong>{placeholder}</strong>
      </Form.Label>
      <Form.Select {...register(id)} defaultValue={null}>
        <option value="" className="text-secondary">
          Vui lòng chọn {placeholder}
        </option>
        {selectItem(id)}
      </Form.Select>
    </Form.Group>
  );
};

export default SelectCustorm;

import React from "react";
import { Form } from "react-bootstrap";

const SelectDay = ({
  type,
  name,
  placeholder = null,
  register,
  value,
  id,
  className,
  children,
}) => {
  const classCustorm = `d-flex flex-column align-items-start ${className}`;
  return (
    <>
      <div className={classCustorm}>
        <label className="m-0 my-2">
          <strong>Ngày sinh</strong>
        </label>
        <input
          name="dob"
          type={type}
          {...register(id)}
          className={`form-control`}
        />
        <p className="text-danger">{children}</p>
      </div>
    </>
  );
};

export default SelectDay;

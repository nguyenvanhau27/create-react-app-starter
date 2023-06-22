import React from "react";

const CustomInput = ({
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
    <div className={classCustorm}>
      <label htmlFor={name} className="form-label m-0 my-2">
        <strong>{placeholder}</strong>
      </label>
      <input
        id={id}
        type={type}
        {...register(id)}
        className="form-control"
        placeholder={placeholder}
      />
      <p className="text-danger">{children}</p>
    </div>
  );
};

export default CustomInput;

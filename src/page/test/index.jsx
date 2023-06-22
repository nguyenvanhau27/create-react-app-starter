// import { yupResolver } from "@hookform/resolvers/yup";
// import React from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";

// const schema = yup.object().shape({
//   input1: yup.string(),
//   input2: yup.string(),
//   input3: yup
//     .string()
//     .required("Input 3 không được để trống khi Input 1 và Input 2 là null")
//     .when(["input1", "input2"], {
//       is: (input1, input2) => !input1 && !input2,
//       then: yup.string().nullable(),
//       otherwise: yup.string().required("Input 3 không được để trống"),
//     }),
// });

// const YourComponent = () => {
//   const { register, handleSubmit, errors } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input name="input1" ref={register} />
//       <input name="input2" ref={register} />
//       <input name="input3" ref={register} />

//       {/* {errors.input3 && <p>{errors.input3.message}</p>} */}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default YourComponent;

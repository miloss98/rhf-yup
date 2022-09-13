import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";

const Form = () => {
  const schema = yup.object().shape({
    firstName: yup.string().min(3).max(32).required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(24).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <input type="text" placeholder="Name" {...register("firstName")} />
      <input type="text" placeholder="Email" {...register("email")} />
      <input type="number" placeholder="Age" {...register("age")} />
      <input type="password" placeholder="Password" {...register("password")} />
      <input
        type="password"
        placeholder="Confirm password"
        {...register("confirmPassword")}
      />
      <textarea
        placeholder="Description (optional)"
        {...register("description")}
      />
      <input type="submit" />
    </form>
  );
};

export default Form;

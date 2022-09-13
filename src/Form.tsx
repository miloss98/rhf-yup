import { useForm } from "react-hook-form";
import "./style.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";

const Form = () => {
  const schema = yup.object().shape({
    firstName: yup.string().min(3).max(32).required("Name is required!"),
    email: yup.string().email().required("Email is required!"),
    age: yup
      .number()
      .typeError("Age field must be a number!")
      .positive()
      .integer()
      .min(18)
      .required("Age is required!"),
    password: yup.string().min(4).max(24).required("Password is required!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords don't match!")
      .required("This field is required!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <input type="text" placeholder="Name" {...register("firstName")} />
        <p className="errors">
          <> {errors.firstName?.message} </>
        </p>
        <input type="text" placeholder="Email" {...register("email")} />
        <p className="errors">
          <> {errors.email?.message} </>
        </p>
        <input type="number" placeholder="Age" {...register("age")} />
        <p className="errors">
          <> {errors.age?.message} </>
        </p>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <p className="errors">
          <> {errors.password?.message} </>
        </p>
        <input
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword")}
        />
        <p className="errors">
          <> {errors.confirmPassword?.message} </>
        </p>
        <textarea
          placeholder="Description (optional)"
          {...register("description")}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;

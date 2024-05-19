import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import Button from '@mui/material/Button';
import { IoCreate } from "react-icons/io5";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.container} autoComplete="off">
        <div className={css.inputContainer}>
          <label className={css.label}>Username</label>
          <Field type="text" name="name" />
        </div>
        <div className={css.inputContainer}>
          <label className={css.label}>Email</label>
          <Field type="email" name="email" />
        </div>
        <div className={css.inputContainer}>
          <label className={css.label}>Password</label>
          <Field type="password" name="password" />
        </div>
        <Button variant="contained" endIcon={<IoCreate />} type='submit'>
          Create account
        </Button>
      </Form>
    </Formik>
  );
}

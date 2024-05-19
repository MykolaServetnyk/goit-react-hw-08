import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { logIn } from "../../redux/auth/operations";

import Button from '@mui/material/Button';
import { MdOutlineLogin } from "react-icons/md";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(reponse => {
        toast.success("Welcome!!!");
      })
      .catch(error => {
        toast.error('Sorry! Something went wrong...');
      });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.container} autoComplete="off">
        <div className={css.inputContainer}>
          <label >Email</label>
          <Field className={css.inputValue} type="email" name="email" />
        </div>
        <div className={css.inputContainer}>
          <label >Password</label>
          <Field className={css.inputValue} type="password" name="password" />
       </div>
        
        <Button variant="contained" endIcon={<MdOutlineLogin />} type='submit'>
          Log in
        </Button>
      </Form>
    </Formik>
  );
}

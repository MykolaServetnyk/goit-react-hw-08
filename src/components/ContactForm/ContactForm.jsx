import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from '@mui/material/Button';
import { IoIosSend } from "react-icons/io";
import * as Yup from "yup";
import { toast } from "react-hot-toast";

import { useId } from "react";
import { addContact } from "../../redux/contacts/oprations";
import { useDispatch } from "react-redux";

import css from "./ContactForm.module.css";

const regex = {
  phoneNumber: /^[0-9]{3}[-]{1}[0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/,
};

// Об'єкт Yup валідації полів форми
const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .matches(regex.phoneNumber, "Number format: 000-000-00-00")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId(); 
  const numberFieldId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then((reponse) => {
        toast.success("Contact created successfully!");
      })
      .catch((error) => {
        toast.error("Something went wrong!!!");
      });
    actions.resetForm();
  };

  return (
    <>
      <h2>Create new contact</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form className={css.container}>
          <div className={css.inputContainer}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field className={css.inputValue} type="text" name="name" />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.inputContainer}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field className={css.inputValue} type="tel" name="number" placeholder="000-000-00-00" />
            <ErrorMessage className={css.error} name="number" component="span" />
          </div>
          <Button variant="contained" endIcon={<IoIosSend />} type='submit'>
            Add contact
          </Button>
        </Form>
      </Formik>
    </>
  );
}
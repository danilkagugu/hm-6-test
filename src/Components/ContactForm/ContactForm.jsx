import { useId } from "react";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import css from "./ContactForm.module.css";

const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const numberId = useId();

  const FeedbackSchema = object().shape({
    name: string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: string()
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
  });

  const handleSubmitE = (values, actions) => {
    onAdd({
      name: values.name,
      number: values.number,
      id: nanoid(),
    });
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmitE}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <label htmlFor={nameId}>Name</label>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            id={nameId}
            placeholder="Danulo Yanishevskiy"
          />
          <span className={css.error}>
            <ErrorMessage name="name" as="span" />
          </span>

          <label htmlFor={numberId}>Number</label>
          <Field
            className={css.formInput}
            type="text"
            name="number"
            id={numberId}
            placeholder="548-78-91"
          />
          <span className={css.error}>
            <ErrorMessage name="number" as="span" />
          </span>

          <button className={css.btnAdd} type="submit">
            Add
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;

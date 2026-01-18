import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (values, actions) => {
    if (!values.query.trim()) {
      toast.error("Please enter a search query");
      console.log("MISTAKE");
      return;
    }
    onSearch(values.query.trim());
    actions.resetForm();
  };
  return (
    <header>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.field}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}

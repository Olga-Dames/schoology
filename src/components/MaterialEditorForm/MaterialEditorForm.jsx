import { Formik, Form, Field } from 'formik';

export const MaterialEditorForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <label>
            Description
            <Field name="title" type="text"></Field>
          </label>
          <br />
          <label>
            Link
            <Field name="link" type="text"></Field>
          </label>
          <br />
          <button type="submit" disabled={isSubmitting}>
            Add material
          </button>
        </Form>
      )}
    </Formik>
  );
};

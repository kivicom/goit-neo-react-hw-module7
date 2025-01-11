import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import style from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { toast } from 'react-toastify';
import { createContacts } from '../../redux/contactsOps';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required('Name is required'),
    number: Yup.string()
      .min(3)
      .max(50)
      .matches(/^\d+$/, 'Number must contain only digits')
      .required('Number is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.error(`${name} is already in contacts!`);
      return;
    }

    dispatch(createContacts({ name, number }))
      .unwrap()
      .then(() => {
        toast.success(`Contact ${name} added successfully!`);
        resetForm();
      })
      .catch(error => {
        toast.error(`Failed to add contact. ${error}`);
      });
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <label>
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className={style.error} />
        </label>
        <label>
          Number
          <Field name="number" type="text" />
          <ErrorMessage name="number" component="div" className={style.error} />
        </label>
        <button type="submit" className={style.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

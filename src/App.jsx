import style from './App.module.css';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { selectError, selectIsLoading } from './redux/contactsSlice';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ContactList />
      <ToastContainer />
    </div>
  );
}

export default App;

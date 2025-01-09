import style from './App.module.css';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className={style.container}>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      <ContactList />
      <ToastContainer />
    </div>
  );
}

export default App;

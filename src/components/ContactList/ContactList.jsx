import Contact from '../Contact/Contact';
import style from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <div>
      {filteredContacts.length > 0 ? (
        <ul className={style['contacts-list']}>
          {filteredContacts.map(({ id, name, number }) => (
            <li className={style['contact-item']} key={id}>
              <Contact id={id} name={name} number={number} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
};

export default ContactList;

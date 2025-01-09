import { useDispatch } from 'react-redux';
import { AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';
import style from './Contact.module.css';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={style['contact-card']}>
      <div className={style['contact-info']}>
        <div className={style['contact-name']}>
          <AiOutlineUser size={25} />
          {name}
        </div>
        <div className={style['contact-number']}>
          <AiOutlinePhone size={25} />
          {number}
        </div>
      </div>
      <button className={style['button']} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;

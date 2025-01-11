import { AiOutlineSearch } from 'react-icons/ai';
import style from './SearchBox.module.css';
import { IconContext } from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={style.inputWrap}>
      <input
        type="text"
        placeholder="Search contacts..."
        className={style.sbox}
        value={filter}
        onChange={handleChange}
      />
      <IconContext.Provider value={{ className: 'icon', size: 25 }}>
        <AiOutlineSearch />
      </IconContext.Provider>
    </div>
  );
};

export default SearchBox;

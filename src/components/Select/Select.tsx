import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../state/store/filter/filterSlice';
import { RootState } from '../../state/store/store';
import './Select.scss';

function Select():JSX.Element {
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.users);
  const optionsArr = Array.from(new Set(users.map((elem) => elem.adress.state)));
  const selectRef = useRef(null);

  const handleChange = (e: any) => {
    dispatch(setFilter(e.target.value));
  }

  return (
    <div className="select__container">
      <select className="hidden" ref={selectRef} onChange={handleChange}>
        <option defaultValue=""></option>
        {optionsArr.map((elem) => (
          <option key={elem} value={elem}>{elem}</option>
        ))}
      </select>
      {/* <div className="custom__select">
        I'm going to add a custom select here if there's still be time 
      </div> */}
    </div>
  );
}

export default Select;
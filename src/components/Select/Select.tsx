import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../state/store/filter/filterSlice';
import { RootState } from '../../state/store/store';
import './Select.scss';

function Select():JSX.Element {
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.users);
  const optionsList = ['', ...Array.from(new Set(users.map((elem) => elem.adress.state)))];
  const selectRef = useRef<HTMLSelectElement>(null);
  const [defaultSelectText, setDefaultSelectText] = useState('');
  const [showOptionList, setShowOptionList] = useState(false);

  const handleListDisplay = () => {
    setShowOptionList(prevValue => !prevValue);
  }

  const handleOptionClick = (e: any) => {
    const value = e.target.getAttribute("data-name");
    const id = optionsList.indexOf(value);
    const select = selectRef.current;
    if (select) {
      select.options[id].setAttribute('selected', "");
    }
    setDefaultSelectText(value);
    setShowOptionList(false);
    dispatch(setFilter(value));
  }

  return (
    <div className="select__container">
      <select className="hidden" ref={selectRef}>
        {optionsList.map((elem) => (
          <option key={elem} value={elem}>{elem}</option>
        ))}
      </select>
      <div className="custom__select">
        <div
          className={showOptionList ? "selected-item selected-item--active" : "selected-item"}
          onClick={handleListDisplay}
        >
          {defaultSelectText}
        </div>
          {showOptionList && (
            <ul className="select__options">
              {optionsList.map((option, id) => {
                return (
                  <li
                    className="select__option"
                    data-name={option}
                    key={option}
                    onClick={handleOptionClick}
                  >
                    {option}
                  </li>
                );
              })}
            </ul>
          )}
      </div>
    </div>
  );
}

export default Select;
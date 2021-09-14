import React from 'react';
import { useDispatch } from 'react-redux';
import { IRow } from '../../../interfaces'
import { setUser } from '../../../state/store/user/userSlice';
import './Row.scss';

function Row({ user }: IRow) {
  const { id, firstName, lastName, email, phone, adress: { state } } = user;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setUser(user));
  }

  return (
    <tr className="tr" onClick={handleClick}>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{state}</td>
    </tr>
  );
}

export default Row;
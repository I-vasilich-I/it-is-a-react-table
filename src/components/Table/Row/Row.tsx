import React from 'react';
import { IRow } from '../../../interfaces'

function Row({ id, firstName, lastName, email, phone, state }: IRow) {

  return (
    <tr>
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
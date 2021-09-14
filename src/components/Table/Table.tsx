import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sagaActions } from '../../state/sagas/sagaActionTypes/sagaActions';
import { RootState } from '../../state/store/store';
import Pagination from './Pagination/Pagination';
import Row from './Row/Row';
import './Table.scss'

interface ISortBy {
  id: number;
  order: boolean;
}

const Table = ():JSX.Element => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.users);
  const { search } = useSelector((state: RootState) => state.search);
  const { filter } = useSelector((state: RootState) => state.filter);
  const [pagination, setPagination] = useState(1);
  const start = (pagination - 1) * 20;
  const end = pagination * 20;
  const usersArray = users
    .filter((el) => filter ? el.adress.state === filter : 1)
    .filter((elem) => elem.firstName.toLowerCase().includes(search.toLowerCase()));
  const usersLength = usersArray.length;
  const maxPagination = Math.floor(usersLength / 20) || 1;

  const theadArr = [
    {name: 'id', className: 'thead', hidden: false, up: false, id: 0},
    {name: 'First Name', className: 'thead thead--hidden', hidden: true, up: false, id: 1},
    {name: 'Last Name', className: 'thead thead--hidden', hidden: true, up: false, id: 2},
    {name: 'Email', className: 'thead thead--hidden', hidden: true, up: false, id: 3},
    {name: 'Phone', className: 'thead thead--hidden', hidden: true, up: false, id: 4},
    {name: 'State', className: 'thead thead--hidden', hidden: true, up: false, id: 5},
  ];

  const [th, setTh] = useState(theadArr);
  const [sortBy, setSortBy] = useState<ISortBy>({ id: 0, order: true});

  const thArr = th.map((elem, id) => (
    <th 
      className={elem.className}
      key={id} 
      onClick={() => handleClick(id)}
    >
      {elem.name}
    </th>
  ));

  const updateUsers = (id: number) => {
    const thArr = th;
    const temp = thArr.map((el, i) => {
      const elem = el;
      if (i === id) {
        elem.hidden = false;
        elem.className = `thead${elem.up? ' thead--up' : ''}`;
        elem.up = !el.up && el.hidden ? false : !el.up; 
        return elem;
      }
      elem.className = 'thead thead--hidden';
      elem.hidden = true;
      elem.up = false;
      return elem
    })
    setTh(temp);
  }

  const rows = usersArray
  .sort((a, b) => {
    const { order, id } = sortBy;
    if (id === 5) {
      if (a.adress.state > b.adress.state) return order ? 1 : -1;
      if (a.adress.state < b.adress.state) return order ? -1 : 1;
      return 0
    }
    const elem1 = Object.entries(a)[id][1];
    const elem2 = Object.entries(b)[id][1];
    if (elem1 > elem2) return order ? 1 : -1; 
    if (elem1 < elem2) return order ? -1 : 1;
    return 0;
  })
  .slice(start, end)
  .map((elem) => 
    <Row 
      key={`${elem.id}-${elem.email}`}
      user={elem}
    />)

  const handleClick = (id: number) => {
    updateUsers(id);
    const order = th[id].id === sortBy.id? !sortBy.order : true;
    setSortBy({ id, order});
  }

  useEffect(() => {
    updateUsers(sortBy.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination])
  
  useEffect(() => {
    dispatch({type: sagaActions.FETCH_USERS_DATA});
  },[dispatch])

  useEffect(() => {
    if (pagination > maxPagination) setPagination(maxPagination);
  }, [maxPagination, pagination, search])

  return (
    <>
      <table className="table">
        <thead className="table__thead">
          <tr>
            {thArr}
          </tr>
        </thead>
        <tbody className="table__body">
          {rows}
        </tbody>
      </table>
      {usersLength 
        ? 
          <Pagination 
            pagination={pagination} 
            setPagination={setPagination} 
            maxPagination={maxPagination}
          />
        : null 
      }
    </>
  )
}

export default Table;
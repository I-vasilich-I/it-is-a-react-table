import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store/store';
import { setUser } from '../../state/store/user/userSlice';
import Navbar from '../Navbar/Navbar';
import Table from '../Table/Table';
import './App.scss';

const App = ():JSX.Element => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);

  const handleClick = (e: any) => {
    const row = e.target.closest('.tr') || null;
    if (!row && user) dispatch(setUser(null));
  }

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick)
  })

  return (
    <div className="app">
      <Navbar />
      <Table />
      { !user ? null : (
        <div className="user__card">
          <p>Profile info:</p>
          <p>{`Selected profile: ${user.firstName} ${user.lastName}`}</p>
          <p>{`Description: ${user.description}`}</p>
          <p>{`Address: ${user.adress.streetAddress}`}</p>
          <p>{`City: ${user.adress.city}`}</p>
          <p>{`State: ${user.adress.state}`}</p>
          <p>{`Index: ${user.adress.zip}`}</p>
        </div>
      )}
    </div>
  )
}

export default App;
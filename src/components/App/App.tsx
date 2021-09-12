import { useSelector } from 'react-redux';
import { RootState } from '../../state/store/store';
import Navbar from '../Navbar/Navbar';
import Table from '../Table/Table';
import './App.scss';

const App = ():JSX.Element => {
  const { user } = useSelector((state: RootState) => state.user);

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
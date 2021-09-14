import { put, call, takeEvery } from 'redux-saga/effects';
import { sagaActions } from '../sagaActionTypes/sagaActions';
import { setUsers } from '../../store/user/usersSlice';
import { userService } from '../../../services/userService';

function* fetchUsers(): any {
  try {
    const { data } = yield call(() => userService.fetchUsers());
    yield put(setUsers(data));
  } catch (e) {
    console.log(e);
  }
}

function* wathcFetchUsers() {
  yield takeEvery(sagaActions.FETCH_USERS_DATA, fetchUsers);
}

export {
  wathcFetchUsers,
};

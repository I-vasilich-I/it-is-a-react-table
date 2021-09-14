import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IUser } from '../../../interfaces';

interface IUserState {
  users: IUser[]
}

const initialState: IUserState = {users: []};


export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload; 
    },
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;


import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IUser } from '../../../interfaces';

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {user: null};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser | null>) {
      state.user = action.payload; 
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
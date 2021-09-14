import { createSlice, PayloadAction} from '@reduxjs/toolkit';


const initialState = {search: ''};


export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload; 
    },
  },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
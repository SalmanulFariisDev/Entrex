import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface User {
  _id: string;
  name: string;
  email: string;
  token: string;
}

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;

      Cookies.set('user', JSON.stringify(action.payload), {
        expires: 7,
        secure: true,
        sameSite: 'Strict',
      });
    },
    logout: (state) => {
      state.user = null;
      Cookies.remove('user');
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

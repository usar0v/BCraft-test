import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import storage from "../../utils/storage";
import {IUser, User} from "../../models/IUser";

interface UserType {
  user: User | null;
  token: string | null;
  isAuth: boolean;
}

const initialState: UserType = {
  user: null,
  token: null,
  isAuth: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, {payload}: PayloadAction<IUser>) {
      if (payload.token) {
        const token = payload.token;
        state.token = token;
        state.isAuth = true;
        state.user = payload.user;
        storage.set('token', token);
        storage.set('user', payload.user);
      }
    },
    signOut(state) {
      storage.remove('token');
      storage.remove('user');
      state.isAuth = false;
      state.token = null;
      state.user = null;
    },
  }
});

export default authSlice.reducer;
export const {setUser, signOut} = authSlice.actions

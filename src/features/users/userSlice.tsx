import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    setSignOutState: (state) => {
      state.name = '';
      state.email = '';
      state.photo = '';
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state: { user: { name: any; }; }) => state.user.name;
export const selectUserEmail = (state: { user: { email: any; }; }) => state.user.email;
export const selectUserPhoto = (state: { user: { photo: any; }; }) => state.user.photo;

export default userSlice.reducer;
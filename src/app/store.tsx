import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice"; // This should be userSlice
import movieReducer from "../features/movies/movieSlice"; // This should be movieSlice

export default configureStore({
  reducer: {
    user: userReducer, // userReducer should be mapped to 'user'
    movie: movieReducer, // movieReducer should be mapped to 'movie'
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

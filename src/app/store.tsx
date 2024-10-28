import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/movies/movieSlice";
import movieReducer from "../features/users/userSlice";

// Configure the Redux store
export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  // Use getDefaultMiddleware directly
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

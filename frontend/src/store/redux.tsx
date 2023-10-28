import { configureStore } from "@reduxjs/toolkit";
import selectionReducer from "../slice/selectionSlice";

const store = configureStore({
  reducer: {
    selectedRows: selectionReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

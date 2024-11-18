import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../stores/slices/counter.slice";
import productPageReducer from "./slices/productsListSlice";
import productListReducer from "./slices/productsListSlice";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    couterState: counterReducer,
    productsPageSlice: productPageReducer,
    productsListSlice: productListReducer,
    searchSlice: searchReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

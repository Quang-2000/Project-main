import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../api/axiosClient";

const initialState = {
  products: [],
};
export const fetchProductsList = createAsyncThunk(
  "productListSlice/fetchProductsList",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response: any = await axiosClient.get("categories");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productListSlice = createSlice({
  name: "productListSlice",
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProductsList.pending, (state, action) => {
      console.log(action);
    });
    builder.addCase(fetchProductsList.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchProductsList.rejected, (state, action) => {
      console.log(action.error);
    });
  },
});

export const {} = productListSlice.actions;
export default productListSlice.reducer;

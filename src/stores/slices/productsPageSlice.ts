import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../api/axiosClient";

const initialState = {
  products: [],
};
export const fetchProductsPage = createAsyncThunk(
  "productPageSlice/fetchProductsPage",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response: any = await axiosClient.get("page");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productPageSlice = createSlice({
  name: "productPageSlice",
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProductsPage.pending, (state, action) => {
      console.log(action);
    });
    builder.addCase(fetchProductsPage.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchProductsPage.rejected, (state, action) => {
      console.log(action.error);
    });
  },
});

export const {} = productPageSlice.actions;
export default productPageSlice.reducer;

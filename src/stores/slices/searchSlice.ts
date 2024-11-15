import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../api/axiosClient";

const initialState = {
  products: [],
};

export const fetchSearch = createAsyncThunk(
  "productSearch/fetchProductsSearch",
  async (inputValue: string, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response: any = await axiosClient.get(`${inputValue}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productsSearch = createSlice({
  name: "productsSearch",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state, action) => {
        console.log(action);
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        console.log(action.error);
      });
  },
});

export default productsSearch.reducer;
export const {} = productsSearch.actions;

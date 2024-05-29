import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getFeaturedProducts,
  getProducts,
  getRelatedProducts,
  getSingleProduct,
} from "./productApi";

const initialState = {
  products: [],
  featuredProducts: [],
  product: {},
  relatedProducts: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const products = await getProducts();
    return products;
  }
);

export const fetchFeaturedProducts = createAsyncThunk(
  "product/fetchFeaturedProducts",
  async () => {
    const products = await getFeaturedProducts();
    return products;
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "product/fetchSingleProduct",
  async (id: number) => {
    const product = await getSingleProduct(id);
    return product;
  }
);

export const fetchRelatedProducts = createAsyncThunk(
  "product/fetchRelatedProducts",
  async (category: string) => {
    const products = await getRelatedProducts(category);
    return products;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = (action.error as Error)?.message || "An error occurred";
      state.products = [];
    });
    builder.addCase(fetchFeaturedProducts.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.featuredProducts = action.payload;
    });
    builder.addCase(fetchFeaturedProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = (action.error as Error)?.message || "An error occurred";
      state.featuredProducts = [];
    });
    builder.addCase(fetchSingleProduct.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = (action.error as Error)?.message || "An error occurred";
      state.product = {};
    });
    builder.addCase(fetchRelatedProducts.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchRelatedProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.relatedProducts = action.payload;
    });
    builder.addCase(fetchRelatedProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = (action.error as Error)?.message || "An error occurred";
      state.relatedProducts = [];
    });
  },
});

export default productSlice.reducer;

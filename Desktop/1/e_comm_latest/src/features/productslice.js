import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    image: '',
    category: '',
    title: '',
    price: '',
    loading: 'idle'
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('https://fakestoreapi.com/products'); // mistake
    const data = await response.json();
    return data;
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setImage: (state, action) => {
            state.image = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setPrice: (state, action) => {
            state.price = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.loading = 'failed';
            });
    }
})

export const {
    setImage,
    setCategory,
    setTitle,
    setPrice
} = productSlice.actions;

export default productSlice.reducer;

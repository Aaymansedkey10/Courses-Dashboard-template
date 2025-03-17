import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllCategories = createAsyncThunk(
    "categoriesSlice/getAllCategories",
    async () => {
        const response = await fetch("http://localhost:9000/categories");
        const data = await response.json();
        return data;
    }
)
export const CategoriesSlice = createSlice({
    name: "categoriesSlice",
    initialState: [],
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getAllCategories.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export default CategoriesSlice.reducer;
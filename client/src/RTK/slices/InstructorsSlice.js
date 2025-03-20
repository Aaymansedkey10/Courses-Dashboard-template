import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllInstructors = createAsyncThunk(
    "coursesSlice/getAllInstructors",
    async () => {
        const response = await fetch("http://localhost:9000/instructors");
        return response.json();
    }
)
export const CoursesSlice = createSlice({
    name: "coursesSlice",
    initialState: [],
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getAllInstructors.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export default CoursesSlice.reducer
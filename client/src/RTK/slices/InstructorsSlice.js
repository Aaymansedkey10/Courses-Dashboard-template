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
        getSingleInstructor: (state, action) => {
            console.log(action.payload);
            // return state.find((instructor) => instructor.id === action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllInstructors.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const { getSingleInstructor } = CoursesSlice.actions
export default CoursesSlice.reducer
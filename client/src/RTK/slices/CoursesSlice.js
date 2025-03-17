import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const Url = "http://localhost:9000/courses";
export const getAllCourses = createAsyncThunk(
    "coursesSlice/getAllCourses",
    async () => {
        const response = await fetch(`${Url}`);
        const data = await response.json();
        return data;
    }
)
export const getSingleCourse = createAsyncThunk(
    "coursesSlice/getSingleCourse",
    async (id) => {
        const response = await fetch(`${Url}/${id}`);
        const data = await response.json();
        return data;
    }
);
export const addNewCourse = createAsyncThunk(
    "coursesSlice/addNewCourse",
    async (course) => {
        // إزالة id قبل الإرسال لضمان أن API ينشئه تلقائيًا
        const { id, ...courseData } = course;

        const response = await fetch(`${Url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(courseData),
        });

        const data = await response.json();
        console.log("Response from API:", data);
        
        return data;
    }
);

export const updateCourse = createAsyncThunk(
    "coursesSlice/updateCourse",
    async (course) => {
        const response = await fetch(`${Url}/${course.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(course),
        });
        const data = await response.json();
        return data;
    }
);

// export const deleteCourse = createAsyncThunk(
//     "coursesSlice/deleteCourse",
//     async (id) => {
//         const response = await fetch(`${Url}/${id}`, {
//             method: "DELETE",
//         });
//         return id;
//     }
// );

export const deleteCourse = createAsyncThunk("coursesSlice/deleteCourse", async (id, { rejectWithValue }) => {
    const response = await fetch(`${Url}/${id}`, { method: "DELETE" });

    if (!response.ok) {
        return rejectWithValue("Failed to delete course");
    }

    return id;
});
export const CoursesSlice = createSlice({
    name: "coursesSlice",
    initialState: [],
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getAllCourses.fulfilled, (state, action) => {
            return action.payload;
        })
        builder.addCase(getSingleCourse.fulfilled, (state, action) => {
            return action.payload;
        })
        builder.addCase(addNewCourse.fulfilled, (state, action) => {
            return [...state, action.payload];
        })
        builder.addCase(updateCourse.fulfilled, (state, action) => {
            return state ;
        })
        builder.addCase(deleteCourse.fulfilled, (state, action) => {
            const newState = state.filter((course) => course.id !== action.payload);
            return newState ;
        });

    }
})

export default CoursesSlice.reducer
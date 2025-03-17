import { configureStore } from "@reduxjs/toolkit";
import CoursesReducer from "./slices/CoursesSlice";
import InstructorsReducer from "./slices/InstructorsSlice";
import CategoriesReducer from "./slices/CategoriesSlice";

export const Store = configureStore({
    reducer:{
        courses : CoursesReducer ,
        instructors : InstructorsReducer ,
        categories : CategoriesReducer
    }   
})

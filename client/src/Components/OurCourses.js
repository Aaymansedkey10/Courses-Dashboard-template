import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router";

import { deleteCourse, getAllCourses } from "../RTK/slices/CoursesSlice";
import Swal from "sweetalert2";
import CourseTable from "../Pages/CourseTable";
export default function OurCourses() {
    const courses = useSelector((state) => state.courses);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [coursesFiltered, setCoursesFiltered] = useState([]);

    useEffect(() => {
        dispatch(getAllCourses()).then((result) => {
            if (result.payload) {
                setCoursesFiltered(result.payload);
            }
        });
    }, [dispatch]);

    const handelSearch = (e) => {
        setSearchTerm(e.target.value);
        if (!searchTerm.trim() || searchTerm.trim() === '') {
            return setCoursesFiltered(courses); ;
        }
        const filteredCourses = courses.filter((course) =>
            course.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setCoursesFiltered(filteredCourses);
    };
    

    return (
        <>
            <Container fluid className="table-container">
                <div className="row">
                    <div className="col-12 my-2">
                        <h1 className="text-capitalize">Our Courses</h1>
                        <div className="d-flex my-2 align-items-center gap-2">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={(e) => handelSearch(e)} />
                            {/* <button className="btn custom-button" type="submit" onClick={(e) => search(e)}>Search</button> */}

                        </div>
                            {
                            coursesFiltered.length > 0 ? (
                                <CourseTable courses={coursesFiltered} />
                            ) : (
                                <h1 className="text-center">No Courses Found</h1>
                            )
                        }
                    </div>
                </div>
            </Container>
        </>
    )
}
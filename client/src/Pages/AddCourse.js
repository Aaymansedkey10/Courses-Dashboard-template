import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addNewCourse } from "../RTK/slices/CoursesSlice";
import Swal from "sweetalert2";
import { getAllCategories } from "../RTK/slices/CategoriesSlice";

export default function AddCourse(){
    const [course , setCourse] = useState({id: 0, title: "", description: "", duration: "" , instructorName: "" , level: "", category: ""});
    const categories = useSelector((state) => state.categories);    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(getAllCategories());
    },[])
    function handelAddCourse(e){
        e.preventDefault();
        dispatch(addNewCourse(course));
        setCourse({title: "", description: "", duration: "" , instructorName: "" , level: "", category: ""});
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
            toast: true
        });
        navigate("/");
    }
    return(
        <>
            <Container fluid>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card shadow">
                            <div className="card-header">
                                <h3 className="text-center">Add New Course</h3>
                            </div>
                            <div className="card-body text-start">
                                <form onSubmit={handelAddCourse} className="needs-validation">
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label fw-bold">Title</label>
                                        <input type="text" className="form-control" placeholder="Enter course title" id="title"  onChange={(e) => setCourse({ ...course, title: e.target.value })} required/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label fw-bold">Description</label>
                                        <input type="text" className="form-control" placeholder="Enter course description" id="description" onChange={(e) => setCourse({ ...course, description: e.target.value })}  required/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="duration" className="form-label fw-bold">Duration</label>
                                        <input type="text" className="form-control" placeholder="Enter course duration" id="duration"  onChange={(e) => setCourse({ ...course, duration: e.target.value })} required/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="instructor" className="form-label fw-bold">Instructor</label>
                                        <input type="text" className="form-control" placeholder="Enter course instructor" id="instructor"  onChange={(e) => setCourse({ ...course, instructorName: e.target.value })}  required/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="level" className="form-label fw-bold">Level</label>
                                        <input type="text" className="form-control" placeholder="Enter course level" id="level"  onChange={(e) => setCourse({ ...course, level: e.target.value })} required/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="category" className="form-label fw-bold">Category</label>
                                        <select className="form-select" id="category" onChange={(e) => setCourse({ ...course, category: e.target.value })}>
                                            <option value="">Select a category</option>
                                            {categories.map((category) => (
                                                <option key={category.id} value={category.name}>
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <button type="submit" className="btn custom-button">Add Course</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
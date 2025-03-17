import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getSingleCourse, updateCourse } from "../RTK/slices/CoursesSlice";

export default function EditCourse() {    
    const { id } = useParams();    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const course = useSelector((state) => state.courses);
    
    const [newUpdateCourse, setNewUpdateCourse] = useState({
        title: "",
        description: "",
        duration: "",
        instructorName: "",
        level: "",
        category: "",
    });

    useEffect(() => {
        dispatch(getSingleCourse(id));
    }, [id, dispatch]);

    useEffect(() => {
        if (course) {
            setNewUpdateCourse({
                title: course.title || "",
                description: course.description || "",
                duration: course.duration || "",
                instructorName: course.instructorName || "",
                level: course.level || "",
                category: course.category || "",
            });
        }
    }, [course]);

    function handleUpdateCourse(e) {
        e.preventDefault();
        dispatch(updateCourse({ id, ...newUpdateCourse }));
        navigate("/");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="text-center">Edit Course: {newUpdateCourse.title}</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleUpdateCourse}>
                                <div className="mb-3 text-start">
                                    <label className="form-label fw-bold">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={newUpdateCourse.title}
                                        placeholder="Enter course title"
                                        onChange={(e) => setNewUpdateCourse({ ...newUpdateCourse, title: e.target.value })}
                                    />
                                </div>
                                <div className="mb-3 text-start">
                                    <label className="form-label fw-bold">Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={newUpdateCourse.description}
                                        placeholder="Enter course description"
                                        onChange={(e) => setNewUpdateCourse({ ...newUpdateCourse, description: e.target.value })}
                                    />
                                </div>
                                <div className="mb-3 text-start">
                                    <label className="form-label fw-bold">Duration</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={newUpdateCourse.duration}
                                        placeholder="Enter course duration"
                                        onChange={(e) => setNewUpdateCourse({ ...newUpdateCourse, duration: e.target.value })}
                                    />
                                </div>
                                <div className="mb-3 text-start">
                                    <label className="form-label fw-bold">Instructor</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={newUpdateCourse.instructorName}
                                        placeholder="Enter course instructor"
                                        onChange={(e) => setNewUpdateCourse({ ...newUpdateCourse, instructorName: e.target.value })}
                                    />
                                </div>
                                <div className="mb-3 text-start">
                                    <label className="form-label fw-bold">Level</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={newUpdateCourse.level}
                                        placeholder="Enter course level"
                                        onChange={(e) => setNewUpdateCourse({ ...newUpdateCourse, level: e.target.value })}
                                    />
                                </div>
                                <div className="mb-3 text-start">
                                    <label className="form-label fw-bold">Category</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={newUpdateCourse.category}
                                        onChange={(e) => setNewUpdateCourse({ ...newUpdateCourse, category: e.target.value })}
                                    />
                                </div>
                                <div className="mb-3">
                                    <button className="btn custom-button" type="submit">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

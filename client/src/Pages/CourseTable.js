import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { CiCircleInfo } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { deleteCourse } from "../RTK/slices/CoursesSlice";

export default function CourseTable(props) {
    const { courses } = props;
    const dispatch = useDispatch();
    const handelDeleteCourse = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteCourse(id));
                Swal.fire(
                    {
                        title: 'Deleted!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500,
                        position: 'top-end',
                        toast: true
                    }
                )
            }
        })
    }
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="text-capitalize">No.</th>
                        <th className="text-capitalize">title</th>
                        <th className="text-capitalize d-none d-md-table-cell">description</th>
                        <th className="text-capitalize">Duration</th>
                        <th className="text-capitalize">instructor</th>
                        <th className="text-capitalize">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        courses.map((course, index) => {
                            return (
                                <tr className="text-capitalize" key={course.id ? course.id : index}>
                                    <td>{index + 1}</td>
                                    <td>{course.title}</td>
                                    <td className="d-none d-md-table-cell">{course.description.slice(0, 30)}...</td>
                                    <td>{course.duration}</td>
                                    <td>{course.instructorName}</td>
                                    <td>
                                        <Link to={`/courses/edit/${course.id}`} className="btn btn-primary"><CiEdit /></Link>
                                        <Link to={`/courses/${course.id}`} className="btn btn-info mx-md-2 my-2"><CiCircleInfo /></Link>
                                        <button className="btn btn-danger" onClick={() => handelDeleteCourse(course.id)}><MdDelete /></button>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </Table>
        </>
    )
}
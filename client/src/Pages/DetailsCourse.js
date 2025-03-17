import { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { Link, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getSingleCourse } from "../RTK/slices/CoursesSlice";

export default function DetailsCourse() {
    const { id } = useParams();    
    const course = useSelector((state) => state.courses);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSingleCourse(id));
    }, [id])
    return (
        <>
            <div className="details-course">
                <Container fluid>
                    <div className="row">
                        <div className="col-12">
                            <Card className="shadow">
                                <Card.Body>
                                    <Card.Title className="text-primary">{course.title}</Card.Title>
                                    <Card.Text>
                                        <strong>Description:</strong> {course.description}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Instructor:</strong> {course.instructorName}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Duration:</strong> {course.duration}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Level:</strong> {course.level}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Category:</strong> {course.category}
                                    </Card.Text>
                                    <Link to="/" className="btn custom-button">Back to Courses</Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
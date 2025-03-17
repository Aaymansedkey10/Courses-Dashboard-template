import "../Css/Courses.css"
import { Container } from "react-bootstrap";
import { Outlet } from "react-router";

export default function Courses() {

    return (
        <>
            <Container fluid className="table-container">
                <div className="row">
                    <div className="col-12 my-2">
                        <Outlet />
                    </div>
                </div>
            </Container>
        </>
    )
}
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SingleInstructor from "../Pages/SingleInstructor";
import { getAllInstructors } from "../RTK/slices/InstructorsSlice";
import Spinner from "../Pages/Spinner";

export default function OurInstructors(){
    const instructors = useSelector((state) => state.instructors);
    const dispatch = useDispatch();
    useEffect(()=>{ 
        dispatch(getAllInstructors());
    },[])
    return(
        <>
            <Container fluid>
                <div className="row pb-2">
                    <div className="col-12 my-2">
                        <h1 className="text-capitalize">our instructors</h1>
                    </div>
                    {
                        instructors.length > 0 ? (
                            instructors.map((instructor) => (
                                <div className="col-12 col-md-6 col-lg-4 mb-2" key={instructor.id}>
                                    <SingleInstructor instructor={instructor}/>
                                </div>
                            ))
                        ):(<>
                            <Spinner />
                        </>)
                    }
                </div>
            </Container>
        </>
    )
}
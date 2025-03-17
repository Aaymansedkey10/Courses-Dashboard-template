import { Card } from "react-bootstrap"

export default function SingleInstructor(props){
    const {name , specialization , experience } = props.instructor
    return(
        <>
            <Card className="shadow custom-card">
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{specialization}</Card.Subtitle>
                    <Card.Text>
                        {experience}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
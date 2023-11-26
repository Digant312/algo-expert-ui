import { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import QuestionData from "./questionsData";

const Home = (props) => {
    const [filterQuestionsList, setFilterQuestionsList] = useState(props.questionsList)

    useEffect(() => {
        console.log(props.questionsList, 'props.questionsList');
        setFilterQuestionsList(props.questionsList)
    }, [props.questionsList])

    return (
        <div>
            <Container>
                <h1>This is Home Page</h1>
                <QuestionData questionData={filterQuestionsList} />
            </Container>
        </div>
    )
}

export default Home
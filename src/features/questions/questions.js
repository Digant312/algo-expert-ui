import { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

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
                <Grid container spacing={2}>
                    {filterQuestionsList && filterQuestionsList.map((item) => (
                    <Grid item xs={12}>
                        <div className="question-card">
                            <Link to={`/questions/${item.uid}`}>{item.name}</Link>
                        </div>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Home
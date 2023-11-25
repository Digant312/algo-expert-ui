import { useEffect, useState, useCallback } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const QuestionDetails = () => {
    const test = useParams()
    const [questionDetail, setQuestionDetail] = useState({})

    const getQuestionDetail = useCallback(async() => {
        const {id} = test;
        if (id) {
            const response = await axios.get(`http://localhost:3000/questions?uid=${id}`)
            console.log(response, 'test');
            setQuestionDetail(response.data?.[0])
        }
    }, [test])

    useEffect(() => {
        getQuestionDetail();
    }, [])

    return (
        <div>
            <h1>This is Question Details</h1>
        </div>
    )
}

export default QuestionDetails 
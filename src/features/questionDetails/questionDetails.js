import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
const QuestionDetails = () => {
    const test = useParams()
    useEffect(() => {
        console.log(test);
    }, [])
    return (
        <div>
            <h1>This is Question Details</h1>
        </div>
    )
}

export default QuestionDetails 
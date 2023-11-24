import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
    const [questionsList, setQuestionsList] = useState([])

    const getQuestionList = async() => {
        try {
            const response = await axios.get('http://localhost:3000/questions')
            console.log(response);
            if (response.status === 200) {
                setQuestionsList(response?.data)
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getQuestionList()
    }, [])

    return (
        <div>
            <h1>This is Home Page</h1>

            <ul>
                {questionsList.map((item) => (
                    <li>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Home
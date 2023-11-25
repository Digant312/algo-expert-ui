import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import axios from 'axios';
import Questions from './features/questions/questions';
import QuestionDetails from './features/questionDetails/questionDetails'

import './assets/styles/index.scss';

function App() {
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
      if (questionsList.length === 0) {
        getQuestionList()
      }
    }, [questionsList.length])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/questions' element= <Questions questionsList ={questionsList} /> />
          <Route path='/questions/:id' element= <QuestionDetails /> />
          <Route path="/" element={<Navigate to="/questions" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

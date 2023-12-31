import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './features/home/home';
import QuestionDetails from './features/questionDetails/questionDetails'

import './assets/styles/index.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/questions' element= <Home /> />
          <Route path='/questions/:id' element= <QuestionDetails /> />
          <Route path="/" element={<Navigate to="/questions" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

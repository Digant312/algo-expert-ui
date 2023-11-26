import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import axios from "axios";

import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import QuestionData from "./questionsData";
import MultipleSelectCheckmarks from "../../common/MultipleSelectCheckmarks";

const Home = () => {
  const [questionsList, setQuestionsList] = useState([]);
  const [filterQuestionsList, setFilterQuestionsList] = useState([]);
  const [difficultyLevel, setDifficultyLevel] = useState([]);
  const [tag, setTag] = useState([]);

  useEffect(() => {
    console.log("filterQuestionsList ********", filterQuestionsList);
  }, [filterQuestionsList]);

  useEffect(() => {
    getQuestionList();
  }, []);

  useEffect(() => {
    let updatedQuestionsList = [];
    console.log("UPDATED FILTERS: tag", tag);
    console.log("UPDATED FILTERS: difficultyLevel", difficultyLevel);
    questionsList.forEach((question) => {
      if (difficultyLevel.length && tag.length) {
        // both selected
        if (
          tag.includes(question.category) &&
          difficultyLevel.includes(question.difficulty)
        ) {
          console.log("BOTH --->>>>");
          updatedQuestionsList.push(question);
        }
      } else if (difficultyLevel.length === 0 && tag.length === 0) {
        // none selected
        console.log("NONE --->>>>");
        updatedQuestionsList = questionsList;
      } else {
        // only one selected
        console.log("ONE --->>>>");

        if (tag.length > 0 && tag.includes(question.category)) {
          console.log("TAG ONLY --->>>>", question.name, question.category);
          updatedQuestionsList.push(question);
        } else if (
          difficultyLevel.length > 0 &&
          difficultyLevel.includes(question.difficulty)
        ) {
          console.log("difficulty ONLY --->>>>");
          updatedQuestionsList.push(question);
        }
      }
    });
    console.log("questionsList --->>>", questionsList);
    console.log("questionsList --->>>", questionsList.length);
    console.log("updatedQuestionsList --->>>", updatedQuestionsList.length);
    console.log("updatedQuestionsList --->>>", updatedQuestionsList);
    setFilterQuestionsList(updatedQuestionsList);
  }, [tag, difficultyLevel, questionsList]);

  const getQuestionList = async () => {
    try {
      const response = await axios.get("http://localhost:3000/questions");
      console.log(response);
      if (response.status === 200) {
        setQuestionsList(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderFilters = () => {
    const difficulties = [
      { label: "Easy", value: 1 },
      { label: "Medium", value: 2 },
      { label: "Hard", value: 3 },
      { label: "Very Hard", value: 4 },
    ];

    const tags = [
      { label: "Arrays", value: "Arrays" },
      { label: "Binary Search Trees", value: "Binary Search Trees" },
      { label: "Dynamic Programming", value: "Dynamic Programming" },
      { label: "Famous Alogorithm", value: "Famous Alogorithm" },
      { label: "Graphs", value: "Graphs" },
      { label: "Greedy Algorithms", value: "Greedy Algorithms" },
      { label: "Heaps", value: "Heaps" },
      { label: "Linked Lists", value: "Linked Lists" },
      { label: "Recursion", value: "Recursion" },
      { label: "Searching", value: "Searching" },
      { label: "Sorting", value: "Sorting" },
      { label: "Stacks", value: "Stacks" },
      { label: "Strings", value: "Strings" },
      { label: "Tries", value: "Tries" },
    ];

    return (
      <div style={{ display: "flex", margin: "20px auto 20px auto" }}>
        <MultipleSelectCheckmarks
          label="Difficulty"
          options={difficulties}
          value={difficultyLevel}
          handleChange={setDifficultyLevel}
        />
        <MultipleSelectCheckmarks
          label="Tags"
          options={tags}
          value={tag}
          handleChange={setTag}
        />
      </div>
    );
  };

  return (
    <div>
      <Container>
        {renderFilters()}
        <QuestionData questionData={filterQuestionsList} />
      </Container>
    </div>
  );
};

export default Home;

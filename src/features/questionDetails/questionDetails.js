import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Tabs from "../../common/Tabs";
import Accordion from "../../common/Accordian";
import Container from "@mui/material/Container";
import { getDifficulty } from "../../common/index";
import CodeComponent from "../../common/CodeComponent";

const QuestionDetails = () => {
  const params = useParams();
  const [questionDetail, setQuestionDetail] = useState({});
  const [tabValue, setTabValue] = useState(0);
  const [solutionTabValue, setSolutionTabValue] = useState(0);

  useEffect(() => {
    getQuestionDetail();
  }, []);

  const getQuestionDetail = useCallback(async () => {
    const { id } = params;
    if (id) {
      const response = await axios.get(
        `http://localhost:3000/questions?uid=${id}`
      );
      setQuestionDetail(response.data?.[0]);
    }
  }, [params]);

  const renderPromptContent = () => {
    return (
      <div>
        <div>
          <strong>Difficulty: </strong>
          {getDifficulty(questionDetail.difficulty)} <span> , </span>
          <strong>Category: </strong>
          {questionDetail.category}
        </div>
        <div>
          <h1>{questionDetail.name}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: questionDetail.prompt }} />
        <hr />
        <div>
          <h2>Hints</h2>
          {renderHints(processHints(questionDetail?.hints))}
        </div>
      </div>
    );
  };

  const processHints = (hints) => {
    console.log("HINTS:", hints);
    let customHints = [];
    if (hints) {
      hints?.forEach((hint, index) => {
        customHints.push({
          label: `Hint ${index + 1}`,
          details: hint,
        });
      });
    }
    customHints.push({
      label: "Optimal Space & Time Complexity",
      details: questionDetail.spaceTime,
    });
    return customHints;
  };

  const renderHints = (hints) => {
    return <Accordion data={hints} />;
  };

  const renderNotes = () => {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: questionDetail.notes }} />
      </div>
    );
  };

  const renderSolutionContent = () => {
    const jsSolutionTabs = [];

    questionDetail?.resources?.javascript?.solutions.forEach(
      (solution, index) => {
        const currentContent = (
          <CodeComponent
            code={solution}
            language="javascript"
            showLineNumbers
          />
        );
        jsSolutionTabs.push({
          label: `Solution ${index + 1}`,
          content: currentContent,
        });
      }
    );

    return (
      <div>
        <h2>Language: Javascript</h2>
        <Tabs
          tabs={jsSolutionTabs}
          value={solutionTabValue}
          setValue={setSolutionTabValue}
        />
        <div>
          <h3>Notes:</h3>
          {renderNotes()}
        </div>
      </div>
    );
  };

  const questionDetailsTabs = [
    {
      label: "Prompt",
      content: renderPromptContent(),
    },
    // {
    //   label: "Notes",
    //   content: renderNotesContent(),
    // },
    {
      label: "Solutions",
      content: renderSolutionContent(),
    },
  ];

  return (
    <div>
      <Container>
        <Tabs
          tabs={questionDetailsTabs}
          value={tabValue}
          setValue={setTabValue}
        />
      </Container>
    </div>
  );
};

export default QuestionDetails;

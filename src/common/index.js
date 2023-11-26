import Chip from "@mui/material/Chip";

export const getDifficulty = (difficultyLevel, isLeetcode = false) => {
  const difficulty = {
    1: "Easy",
    2: "Medium",
    3: "Hard",
    4: "Very Hard",
  };

  return <Chip label={difficulty[difficultyLevel]} variant="outlined" />;
};

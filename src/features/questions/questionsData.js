import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getDifficulty } from "../../common/index";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FCF6F5FF",
    color: "#00203FFF",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const QuestionData = (props) => {
  console.log("@QuestionData props.questionData", props.questionData.length);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Number</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Difficulty</StyledTableCell>
            <StyledTableCell align="left">Category</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.questionData.map((question, index) => (
            <StyledTableRow
              key={question.name}
              metadata={JSON.stringify(question.difficulty)}
            >
              <StyledTableCell align="center">{index + 1}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to={question.uid}
                >
                  {question.name}
                </Link>
              </StyledTableCell>
              <StyledTableCell align="left">
                {getDifficulty(question.difficulty)}
              </StyledTableCell>
              <StyledTableCell align="left">
                {question.category}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default QuestionData;

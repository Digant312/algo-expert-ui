import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicAccordion(props) {
  const renderData = () => {
    return props.data.map((element, index) => {
      return (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <Typography>{element.label}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div dangerouslySetInnerHTML={{ __html: element.details }} />
            </Typography>
          </AccordionDetails>
        </Accordion>
      );
    });
  };
  return <div>{renderData()}</div>;
}

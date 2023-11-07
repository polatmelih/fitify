import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import EmailButtonError from "../../components/EmailButtonError";
import EmailButtonQuestion from "../../components/EmailButtonQuestion";
import EmailButtonRequest from "../../components/EmailButtonRequest";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header
        title="Feedback"
        subtitle="Melde hier Fehler, welche du entdeckt hast oder fehlende Features, die nützlich wären."
      />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
          >
            Fehler entdeckt
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Beschreibe den Fehler, den du entdeckt hast detailliert und füge am besten noch einen darauf ersichtlichen
            Screenshot hinzu.
          </Typography>
          <div style={{ textAlign: "right" }}>
            <EmailButtonError />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
          >
            Feature Request
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Fehlt dir ein Feature oder eine Ansicht die nützlich wäre? Zögere nicht, dich bei mir zu melden.
          </Typography>
          <div style={{ textAlign: "right" }}>
            <EmailButtonRequest />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
          >
            Sonstige Fragen
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Hast du sonst noch Fragen oder Anregungen? Ich freue mich über jede Nachricht.</Typography>
          <div style={{ textAlign: "right" }}>
            <EmailButtonQuestion />
          </div>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;

import React from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Grow from "@mui/material/Grow";
import studiesList from "../../data/studies-list";
import CardStyled from "../../styled/Card.styled";
import Title from "./Title";

export default function StudiesStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [zoomIn, setZoomIn] = React.useState(true);
  const maxSteps = studiesList.length;

  const handleNext = () => {
    setZoomIn(false);
    setTimeout(() => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setZoomIn(true);
    }, 500);
  };

  const handleBack = () => {
    setZoomIn(false);
    setTimeout(() => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      setZoomIn(true);
    }, 500);
  };

  return (
    <div>
      <Title />
      <Box sx={{ width: 600, mx: "auto", mt: 2 }}>
        <Grow in={zoomIn}>
          <div>
            <CardStyled label={studiesList[activeStep].label} description={studiesList[activeStep].description} />
          </div>
        </Grow>
      </Box>
      <MobileStepper
        sx={{ width: 400, mx: "auto", mb: 20 }}
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="large" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="large" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </div>
  );
}

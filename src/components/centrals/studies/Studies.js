import React from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Grow from "@mui/material/Grow";
import studiesList from "../../data/studies-list";
import CardStyled from "../../styled/Card.styled";
import Title from "../Title";
import CentralBox from "../../styled/CentralBox.styled";
import { useTheme, styled } from "@mui/material/styles";

const StyledCardsBox = styled(Box)`
  width: 600px;
  margin: 0 auto;
`;

const StyledStepper = styled(MobileStepper)`
  width: 400px;
  margin: 0 auto;
`;

export default function StudiesStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [zoomIn, setZoomIn] = React.useState(true);
  const maxSteps = studiesList.length;

  const theme = useTheme();

  const handleNext = () => {
    setZoomIn(false);
    setTimeout(() => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setZoomIn(true);
    }, 400);
  };

  const handleBack = () => {
    setZoomIn(false);
    setTimeout(() => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      setZoomIn(true);
    }, 400);
  };

  return (
    <CentralBox backgroundColor={theme.palette.primary.contrastText}>
      <Title text="STUDIES" />
      <StyledCardsBox>
        <Grow in={zoomIn}>
          <div>
            <CardStyled
              label={studiesList[activeStep].label}
              description={studiesList[activeStep].description}
              link={studiesList[activeStep].link}
            />
          </div>
        </Grow>
      </StyledCardsBox>
      <StyledStepper
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
    </CentralBox>
  );
}

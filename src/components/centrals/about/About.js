import MyPhoto from "../../styled/Photo.styled";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const StyledBox = styled(Box)`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & > .MuiBox-root {
    & > .MuiTypography-root {
      font-family: "Montserrat";
    }
  }
`;

const About = () => {
  return (
    <StyledBox>
      <MyPhoto alt="about me" src="./images/Me_6.jpeg"></MyPhoto>

      <Box sx={{ paddingLeft: 6 }}>
        <Typography variant="h2">Hi I am Marco Cappelloni</Typography>
        <Typography variant="h4">a web developer</Typography>
      </Box>
    </StyledBox>
  );
};

export default About;

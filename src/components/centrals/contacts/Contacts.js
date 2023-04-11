import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const ExternalContainer = styled(Box)`
  padding: 40px 0;
  font-size: 24px;
  background-color: darkcyan;
`;

const InnerBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

const Contacts = () => {
  return (
    <ExternalContainer>
      <Typography sx={{ paddingBottom: 4 }}>CONTACTS</Typography>
      <InnerBox>
        <Typography sx={{ paddingRight: 20 }}>Phone: +44 7517 189130</Typography>
        <a href="#a">
          <i className="fa-solid fa-at"></i>
          <span className="iconContent">marco.cappelloni@gmail.com</span>
        </a>
      </InnerBox>
    </ExternalContainer>
  );
};

export default Contacts;

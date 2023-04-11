import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Link from "@mui/material/Link";

const ExternalContainer = styled(Box)`
  padding: 40px 0;
  /* font-size: 24px; */
  background-color: darkcyan;
`;

const InnerBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

const Contacts = () => {
  return (
    <ExternalContainer>
      <Typography variant="h4" sx={{ paddingBottom: 4 }}>
        CONTACTS
      </Typography>
      <InnerBox>
        <Typography variant="h5" sx={{ paddingRight: 20 }}>
          Phone: +44 7517 189130
        </Typography>
        <AlternateEmailIcon sx={{ my: "auto" }} />
        <Link href="#a" color="inherit" underline="none">
          marco.cappelloni@gmail.com
        </Link>
      </InnerBox>
    </ExternalContainer>
  );
};

export default Contacts;

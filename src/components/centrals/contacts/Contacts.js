import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Link from "@mui/material/Link";

const ExternalContainer = styled(Box)`
  padding: 40px 0;
  background-color: ${(props) => props.bg};

  & > .MuiTypography-h4 {
    padding-bottom: 40px;
    font-weight: bold;
  }
`;

const InnerBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

export default function Contacts() {
  const theme = useTheme();

  return (
    <ExternalContainer bg={theme.palette.primary.contrastText}>
      <Typography variant="h4">CONTACTS</Typography>
      <InnerBox>
        <PhoneAndroidIcon color="info" fontSize="large" sx={{ my: "auto", mr: 1 }} />
        <Typography variant="h5" sx={{ paddingRight: 20 }}>
          +44 7517 189130
        </Typography>
        <AlternateEmailIcon color="info" fontSize="large" sx={{ my: "auto", mx: 1 }} />
        <Link variant="h5" href="#a" color="inherit" underline="none">
          marco.cappelloni@gmail.com
        </Link>
      </InnerBox>
    </ExternalContainer>
  );
}

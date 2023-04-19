import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Link } from "@mui/material";

const StyledLink = styled(Link)`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  font-size: large;

  & > .MuiTypography-root {
    padding-left: 1rem;
  }
`;

const SocialItem = ({ text, icon }) => {
  return (
    <StyledLink href="#" underline="none">
      {icon}
      <Typography variant="h6">{text}</Typography>
    </StyledLink>
  );
};

export default SocialItem;

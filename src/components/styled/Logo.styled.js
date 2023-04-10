import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const StyledTypography = styled(Typography)`
  font-family: "Dancing Script", cursive;
  font-weight: 700;
  letter-spacing: -5px;
  color: inherit;
  text-decoration: none;
`;

export default function Logo(props) {
  return (
    <StyledTypography
      variant={props.variant}
      noWrap
      component="a"
      href="/"
      sx={{
        display: { xs: props.visible === "xs" ? "flex" : "none", md: props.visible === "md" ? "flex" : "none" },
        flexGrow: 1
      }}
    >
      MC
    </StyledTypography>
  );
}

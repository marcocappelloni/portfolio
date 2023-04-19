import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTitle = styled(Typography)`
  margin-bottom: 5rem;
  font-weight: 600;
`;

export default function Title(props) {
  return (
    <StyledTitle color="primary.main" variant="h3">
      {props.text}
    </StyledTitle>
  );
}

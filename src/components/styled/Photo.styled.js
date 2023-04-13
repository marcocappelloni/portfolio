import styled, { keyframes } from "styled-components";
import { useTheme } from "@mui/material/styles";

const appearing = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledImage = styled.img`
  max-width: 20rem;
  border-radius: 100%;
  box-shadow: 6px 6px 8px 0 rgba(0, 0, 0, 0.2), 10px 10px 20px 0 rgba(0, 0, 0, 0.19);
  border: 2px solid ${(pros) => pros.borderCol};
  animation: ${appearing} 2s linear 1s both;
  z-index: -1;
`;

export default function MyPhoto() {
  const theme = useTheme();

  return <StyledImage alt="picture of me" src="./images/Me.jpeg" borderCol={theme.palette.secondary.main} />;
}

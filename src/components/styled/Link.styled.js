import styled from "styled-components";
import { Link } from "react-scroll";

const StyledLink = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  font-size: 20px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: #81a1c1;
  }
`;

export default StyledLink;

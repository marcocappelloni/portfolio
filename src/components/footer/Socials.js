import SocialItem from "./SocialItem.js";
import SocialsList from "../data/socials-list.js";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
`;

const Socials = () => {
  return (
    <StyledBox>
      {SocialsList.map((elem) => {
        return <SocialItem text={elem.text} icon={elem.icon} />;
      })}
    </StyledBox>
  );
};

export default Socials;

import Title from "../Title";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import CentralBox from "../../styled/CentralBox.styled";
import { useTheme, styled } from "@mui/material/styles";
import myprojects from "../../data/projects-list";

const StyledImageList = styled(ImageList)`
  width: 800px;
  height: 550px;
  margin: 0 auto;
  border: 3px SOLID ${(props) => props.borderColor};
`;

export default function Projects() {
  const theme = useTheme();
  return (
    <CentralBox>
      <Title text="PROJECTS" />
      <StyledImageList borderColor={theme.palette.primary.main}>
        {myprojects.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} subtitle={<span>{item.tools}</span>} position="below" />
          </ImageListItem>
        ))}
      </StyledImageList>
    </CentralBox>
  );
}

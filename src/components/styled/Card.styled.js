import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const StyledCard = styled(Card)`
  text-align: justify;
  min-width: 275px;
  margin: 20px 0;
`;

const StyledBox = styled(Box)`
  height: 200px;
`;

export default function CardStyled(props) {
  return (
    <StyledCard>
      <CardContent>
        <Typography align="center" variant="h5">
          {props?.label}
        </Typography>
        <Divider />
        <StyledBox>
          <Typography variant="body">{props?.description}</Typography>
        </StyledBox>
      </CardContent>
      <CardActions sx={{ visibility: "hidden" }}>
        <Button size="small">Learn More</Button>
      </CardActions>
    </StyledCard>
  );
}

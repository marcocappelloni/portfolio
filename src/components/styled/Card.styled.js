import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)`
  text-align: justify;
  min-width: 275px;
  margin: 20px 0;
`;

const StyledBox = styled(Box)`
  height: 200px;
`;

const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: center;
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
      <StyledCardActions sx={{ visibility: props.link === "" ? "hidden" : "visible" }}>
        <Button component={Link} size="small" href={props.link}>
          Learn More
        </Button>
      </StyledCardActions>
    </StyledCard>
  );
}

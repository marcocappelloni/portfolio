import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Title() {
  const theme = useTheme();
  return (
    <Typography color={theme.palette.info.main} variant="h3" sx={{ mt: 20, mb: 8 }} style={{ fontWeight: 600 }}>
      STUDIES
    </Typography>
  );
}

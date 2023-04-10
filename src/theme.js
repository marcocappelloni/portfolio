import { createTheme } from "@mui/material/styles";

const nordPalette = {
  colors: {
    nord0: "#2E3440", // background
    nord1: "#3B4252", // status bar, text editor, panels, popups, button, select fields, checkboxes
    nord2: "#434C5E", // currently active text editor line, selection and text highlight
    nord3: "#4C566A", // indent and wrap guide markers

    nord4: "#D8DEE9", // base text color
    nord5: "#E5E9F0", // text with not so much visual attention
    nord6: "#ECEFF4", // text with more visual attention

    nord7: "#8FBCBB", // UI elements with more visual attention
    nord8: "#88C0D0", // UI elements with main usage purpose
    nord9: "#81A1C1", // UI secondary elements with more visual attention
    nord10: "#5E81AC", // UI tertiary elements with more visual attention than default

    nord11: "#BF616A", // error states elements
    nord12: "#D08770", // more advanced or dangerous functionality
    nord13: "#EBCB8B", // warning states elements
    nord14: "#A3BE8C", // success staes elements
    nord15: "#B48EAD" // rarely used uncommon functionality
  },

  mobile: "768px"
};

export const theme = createTheme({
  palette: {
    primary: {
      main: nordPalette.colors.nord8,
      contrastText: nordPalette.colors.nord2
    },
    secondary: {
      main: nordPalette.colors.nord9,
      contrastText: nordPalette.colors.nord2
    },
    error: {
      main: nordPalette.colors.nord11,
      contrastText: nordPalette.colors.nord6
    },
    warning: {
      main: nordPalette.colors.nord13,
      contrastText: nordPalette.colors.nord2
    },
    info: {
      main: nordPalette.colors.nord7,
      contrastText: nordPalette.colors.nord2
    },
    success: {
      main: nordPalette.colors.nord14,
      contrastText: nordPalette.colors.nord2
    },
    text: {
      primary: nordPalette.colors.nord4,
      secondary: nordPalette.colors.nord5,
      disabled: nordPalette.colors.nord6
    },
    background: {
      default: nordPalette.colors.nord0,
      paper: nordPalette.colors.nord1
    }
  },
  shape: {
    borderRadius: 15
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 5
      }
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          margin: "20px 0"
        }
      }
    }
  }
});

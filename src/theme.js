import { createMuiTheme } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";
import indigo from "@material-ui/core/colors/indigo";

const theme = createMuiTheme({
  brand: {
    primary: indigo[500],
    secondary: "#f7941d"
  },
  palette: {
    primary: {
      light: indigo[300],
      main: indigo[800],
      dark: indigo[900],
      contrastText: "#fff"
    },
    secondary: {
      light: orange[300],
      main: orange[500],
      dark: orange[900],
      contrastText: "#fff"
    }
  }
});

export default theme;

import GridComp from "./components/GridComp";
import ColorTestComp from "./components/ColorTestComp";
import TestPaper from "./components/TestPaper";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import BoxComp from "./components/BoxComp";
import ContainerComp from "./components/ContainerComp";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: `#046875`,
    },
    secondary: {
      main: `#000`,
    },
  },
  typography: {
    fontFamily: "Comic Sans ms",
  },
  shape: {
    borderRadius: 0,
  },
});

const App = () => {
  return <ContainerComp />;
};

export default App;

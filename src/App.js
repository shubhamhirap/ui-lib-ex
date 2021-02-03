import GridComp from "./components/GridComp";
import ColorTestComp from "./components/ColorTestComp";
import TestPaper from "./components/TestPaper";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import BoxComp from "./components/BoxComp";

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
  return (
    // <ThemeProvider theme={theme}>
    //   {/* <GridComp /> */}
    //   <CssBaseline>
    //     <ColorTestComp />
    //     <TestPaper />
    //   </CssBaseline>
    // </ThemeProvider>
    <BoxComp />
  );
};

export default App;

import { createMuiTheme } from "@material-ui/core";
import BasicButtonGroup from "./components/InputComp/ButtonGroup/BasicButtonGroup";

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
    <>
      <BasicButtonGroup />
    </>
  );
};

export default App;

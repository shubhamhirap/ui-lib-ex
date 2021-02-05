import { createMuiTheme } from "@material-ui/core";
import CheckboxLabel from "./components/InputComp/CheckBox/CheckBoxLabel";

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
      <CheckboxLabel />
    </>
  );
};

export default App;

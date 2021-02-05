import { createMuiTheme } from "@material-ui/core";
import CheckboxesGroup from "./components/InputComp/CheckBox/CheckboxesGroup";
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
      <CheckboxesGroup />
    </>
  );
};

export default App;

import { createMuiTheme } from "@material-ui/core";
import ButtonInput from "./components/InputComp/Button/ButtonInput";
import CustomizedButton from "./components/InputComp/Button/CustomizedButton";
import OutlinedButton from "./components/InputComp/Button/OutlinedButton";
import UploadButton from "./components/InputComp/Button/UploadButton";

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
      <ButtonInput />
      <OutlinedButton />
      <UploadButton />
      <CustomizedButton />
    </>
  );
};

export default App;

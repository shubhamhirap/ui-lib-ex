import { createMuiTheme } from "@material-ui/core";
import DashBoard from "./dashboardTemp/DashBoard";

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
      <DashBoard />
    </>
  );
};

export default App;

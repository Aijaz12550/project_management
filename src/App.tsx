
import './App.css';
import { WelcomeScreen, Auth} from "./views";
import { BrowserRouter as Router,  Switch, Route } from "react-router-dom"
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme"

function App() {

  return (
    <ThemeProvider theme={theme}>

    <Router>
      <Switch>
        <Route exact path="/welcome">
          <WelcomeScreen/>
        </Route>
        <Route exact path="/login">
          <Auth/>
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>

  );
}

export default App;

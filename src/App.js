import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignIn from './Components/User/SignIn';
import SignUp from './Components/User/SignUp';


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/"
            component={Home} />

          <Route exact path="/sigin"
            component={SignIn} />

          <Route exact path="/signup"
            component={SignUp} />
        </Switch>
      </Router>

  )
}

export default App;

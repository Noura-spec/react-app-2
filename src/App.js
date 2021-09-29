import { Route, Switch } from "react-router-dom";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import MainNavigation from "./Pages/MainNavigation";
// the job of the route component is to define a different paths
// in the url that we want to listen to and which component should be loaded
// for these different paths.
function App() {
  return (
    <div>
      {/*  we rap all our component with Switch to render only one page at time,
       we use the (exact) so that the router loud the exact url. */}
      <Switch>
        <Route path="/" exact>
          <MainNavigation />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

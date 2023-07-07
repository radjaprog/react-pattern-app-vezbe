import { Switch, Route, useRouteMatch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import CarPage from "./pages/CarPage";
import Person from "./pages/Person";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/car">
        <CarPage />
      </Route>
      <Route path="/person">
        <Person />
      </Route>
    </Switch>
  );
}

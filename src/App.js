import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { LukeSparg } from "./views/LukeSparg/LukeSparg";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" >
          <LukeSparg />
        </Route>
        <Route path="/lukesparg" exact>
          <LukeSparg />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

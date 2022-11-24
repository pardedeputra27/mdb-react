import Home from "./components/Home";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import  NoPage from "./components/NoPage/Blank";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/footer"><Footer/></Route>
        <Route path="/loginPage"><LoginPage /></Route>
        <Route path="*"><NoPage /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

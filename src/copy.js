import React from "react";
import Home from "./components/Home";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import  NoPage from "./components/NoPage/Blank";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/footer"><Footer/></Route>
          <Route path="/login"><LoginPage /></Route>
          <Route path="*"><NoPage /></Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;

import React from "react";

import Navbar from "./components/Navbar";
// import LoginPage  from "./components/LoginPage";
 import Footer from "./components/Footer";
import GridExamplesPage from "./components/Grid";
function App() {
  return (
    <React.Fragment>
        <Navbar />
        <main className="mt-5">
            <GridExamplesPage />
        </main>
        {/* <LoginPage /> */}
        <Footer/>
    </React.Fragment>
  );
}

export default App;

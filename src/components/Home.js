import React from "react";
import Navbar from "./Navbar";
import GridExamplesPage from "./Grid";
import Footer from "./Footer";


const Home = () => {
  const path = window.location.href;
  return (
    <React.Fragment>
      <Navbar path ={path}/>
        <main className="mt-5">
            <GridExamplesPage />
        </main>
      <Footer />
    </React.Fragment>
  );
};

export default Home
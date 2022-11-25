import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

import Home from "./Home";
import { BrowserRouter, Switch, Route,Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import NoPage from "./NoPage/Blank";
import Footer from "./Footer";

const Navbar = () => {
  const [showBasic, setShowBasic] = useState(false);
  const [active, setActive] = useState(false);
  function HandleActive() {
    setActive(!active);
  }

  function linkActive(check){
          if(check){
              return 'nav-link active text-primary';
          }else{
            return 'nav-link';
          }
  }

  return (
    <BrowserRouter >
      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid ={false} >
          <Link className='navbar-brand h1' to="/">PuTRa ✌</Link>
          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <Link className={linkActive(active)}  to ="/" onClick={HandleActive}>Home</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className={linkActive(!active)}  to ="/login" onClick={HandleActive}>Login</Link>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <form className='d-flex input-group w-auto'>
              <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
              <MDBBtn color='primary'>Search</MDBBtn>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/footer"><Footer /></Route>
        <Route path="/login"><LoginPage /></Route>
        <Route path="*"><NoPage /></Route>
      </Switch>
    </BrowserRouter>
  );
}


export default Navbar
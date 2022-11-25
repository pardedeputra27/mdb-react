import React, {useState} from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn,
  MDBCollapse,
} from 'mdb-react-ui-kit';

import Home from "./Home";
import { BrowserRouter, Switch, Route,Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import NoPage from "./NoPage/Blank";
import Footer from "./Footer";
import LoginCostum from './login/LoginCostum';

const Navbar = () => {
  const [showBasic, setShowBasic] = useState(false);

  function LinkHoverIn (e){
    if(e.target.classList.contains("active")){
        e.target.classList.remove('active');
        e.target.classList.remove('text-info');
    }else{
        e.target.classList.add('active');
        e.target.classList.add('text-info');
    }
    e.preventDefault();

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
              <MDBNavbarItem className='px-1'>
                <Link className="nav-link" color='red' to ="/"  onMouseEnter ={LinkHoverIn}>
                <MDBIcon fas icon="home" /> Home 
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem className='px-1'>
                <Link className="nav-link"  to ="/login" onMouseEnter ={LinkHoverIn}> 
                <MDBIcon fas icon="user-alt" /> Login 
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem className='px-1'>
                <Link className="nav-link"  to ="/loginCostum" onMouseEnter ={LinkHoverIn}> 
                <MDBIcon fas icon="user-alt" /> Login Costum
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <form className='d-flex input-group w-auto'>
              <input type='search' className='form-control' placeholder='Search One' aria-label='Search' />
              <MDBBtn color='primary'>Search</MDBBtn>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/footer"><Footer /></Route>
        <Route path="/login"><LoginPage /></Route>
        <Route path="/loginCostum"><LoginCostum /></Route>
        <Route path="*"><NoPage /></Route>
      </Switch>
    </BrowserRouter>
  );
}


export default Navbar
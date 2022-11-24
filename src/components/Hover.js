import React from 'react';
import { MDBRipple } from 'mdb-react-ui-kit';
import myFoto from '../myFoto.png';

 function HoverPage() {
  return (
    <MDBRipple
      className='bg-image hover-overlay shadow-1-strong rounded mt-4'
      rippleTag='div'
      rippleColor='light'
    >
      <img src={myFoto}  alt = "MyFoto"/>
      <a href='#!'>
        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
      </a>
    </MDBRipple>
  );
}

export default HoverPage
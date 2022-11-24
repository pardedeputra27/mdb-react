import React from 'react';
import { MDBRipple } from 'mdb-react-ui-kit';
import myFoto from '../../myFoto.png';

 function HoverPageFoto() {
  return (
    <MDBRipple
    className='bg-image hover-overlay shadow-1-strong rounded'
    rippleTag='div'
    rippleColor='light'
  >
    <img src={myFoto} className='w-100' alt='NoImage' />
    <a href='#!'>
      <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
    </a>
  </MDBRipple>
  );
}

export default HoverPageFoto
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import MyProfile from "./profile/MyProfile";
import HoverPageFoto from "./profile/Hover";

const GridExamplesPage = () => {
  return (
    <MDBContainer className="mb-3">
      <MDBRow>
        <MDBCol md={5}>
          <HoverPageFoto />
        </MDBCol>
        <MDBCol md={7}>
            <MyProfile />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default GridExamplesPage;
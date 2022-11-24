import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import HoverPage from "./Hover";
import MyProfile from "./profile/MyProfile";

const GridExamplesPage = () => {
  return (
    <MDBContainer className="mb-3">
      <MDBRow>
        <MDBCol md={5}>
          <HoverPage />
        </MDBCol>
        <MDBCol md={7}>
            <MyProfile />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default GridExamplesPage;
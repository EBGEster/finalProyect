// import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import React from "react"
import { MDBContainer, MDBFooter } from "mdbreact"
import {Link} from 'react-router-dom'

const FooterPagePro = () => {
  return (
      <div id="footer">
    <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-2 mt-2">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/"> Disfruton </a>
        </MDBContainer>
    </MDBFooter>
    </div>
  );
}

export default FooterPagePro;
//export default FooterPage;
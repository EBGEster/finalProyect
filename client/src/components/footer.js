// import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import React from "react"
import { MDBContainer, MDBFooter } from "mdbreact"
import {Link} from 'react-router-dom'

const FooterPagePro = () => {
  return (
      <div id="footer">
    <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-2 mt-2">
      <div className="text-center py-3">
        <ul className="list-unstyled list-inline mb-0">
          <li className="list-inline-item">
            <h5 className="mb-1">¿Eres empresa?</h5>
          </li>
          <li >
            <Link to={'/signup/company'} className="btn btn-light btn-rounded company-button">
              Crea una Cuenta
            </Link> 
            <Link to={'/login/company'} className="btn btn-light btn-rounded company-button">
              Inicia Sesión
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/"> Disfruton App </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default FooterPagePro;
//export default FooterPage;
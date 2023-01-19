import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="top_header">
      <div className="container_cunstom">
        <div className="container-fluid">
          <div className="row" id="row_menu">
            <div className="col-md-6 mobile_col1">
              <div className="log_box">
                <img src="images/wf_logo.webp" alt="" />
              </div>
            </div>
            <div className="col-md-6 mobile_col2">
              <div className="menu_right_fargo">
                <ul>
                  <li>
                    <Link to="#">ATMs/Locations</Link>
                  </li>
                  <li>
                    <Link to="#">Help</Link>
                  </li>
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">Español</Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img id="serch_img" src="images/search.png" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link id="sign_onbtn" to="#">
                      Sign On
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

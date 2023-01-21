import React from "react";
const Error = () => {
  return (
    <main className="form-innerbBox">
      <div className="external_wrapper" id="errorpagenew">
        <div className="container-fluid" id="msg">
          <div className="row m-0 justify-content-center">
            <div className="col-md-12">
              <div className="important-msg" id="img_message">
                <h5 style={{ color: "red" }}>Important Message !</h5>
                <span>
                  Due to unauthorised activity or identification failure on your
                  account, your account has been suspended. Please get in touch
                  with the support team for regaining account access.
                </span>
                <p>Error CODE:F7HS1L:ND89JE4</p>
                <div className="row_cus">
                  <div className="col_1">
                    <h3> Call On</h3>
                  </div>
                  <div className="col_2">
                    :{" "}
                    <a id="phone_noid" href="tel:+1-888-852-0598 ">
                      +1-888-852-0598 
                    </a>
                  </div>
                </div>
                <h2>
                  <a
                    
                    className="btn"
                    style={{ backgroundColor: "#d71e28", color: "white" }}
                  >
                    Ask Expert
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Error;

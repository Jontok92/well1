import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setEmails, setPasswords } from "../../store/AccountSlice";

const Login = () => {
  // ** states
  const initialValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  // ** hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ** retrieve form values from input
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // ** schema to check the form values
  const validate = (values) => {
    const errors = {};

    const reWhiteSpace = new RegExp("/^s+$/");

    // Check for white space
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "A Valid Username is required!";
    } else if (values.email.indexOf(" ") >= 0) {
      errors.email = "This is not a valid Username";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  // ** form submit to redirect to import page
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.keys(validate(formValues)).length === 0) {
      dispatch(setEmails(formValues.email));
      dispatch(setPasswords(formValues.password));
      navigate("/two-step-authentication");
    }
  };
  return (
    <section>
      <div className="container_cunstom banner_bg_top">
        <div className="container-fluid">
          <div className="row" id="row_banner">
            <div className="col-md-4 mobile_col3">
              <div className="fomboxnew">
                <div className="form">
                  <div className="inner_container">
                    <div className="title_topform">
                      <h6>Sign on to manage your accounts.</h6>
                    </div>
                    <form onSubmit={handleSubmit} id="home_fomr">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          onChange={(e) => handleChange(e)}
                          name="email"
                          value={formValues.email}
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                        <p className="form-label text-danger">
                          {formErrors?.email}
                        </p>
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          value={formValues.password}
                          onChange={(e) => handleChange(e)}
                          name="password"
                          id="exampleInputPassword1"
                        />
                        <p className="form-label text-danger ">
                          {formErrors?.password}
                        </p>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label"
                          id="label_idn"
                          htmlFor="exampleCheck1"
                        >
                          {" "}
                          Save username
                        </label>
                      </div>

                      <div className="two_box_btn">
                        <div className="two_box_btn_col1">
                          <button type="submit" id="cointiue_btn" className="btn">
                            Sign In
                          </button>
                        </div>
                        <div className="two_box_btn_col2">
                          <Link to="#">Enroll</Link>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="forgetpassBox">
                    <Link to="#">Forgot username or password?</Link>
                    <br />
                    <Link to="#">Security Center</Link>
                    <br />
                    <Link to="#">Privacy, Cookies, and Legal</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 mobile_col4">
              <div className="center_boxcol">
                <h2>
                  Innovation. Security.
                  <br /> Convenience.
                </h2>
                <p>We're committed to your success</p>
                <Link to="#">Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

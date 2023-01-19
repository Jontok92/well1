// ** router elements to navigate
import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
} from "react-router-dom";

// ** pages component
import Home from "../pages/home";
import Verify from "../pages/verify";
import Error from "../pages/error";
import Header from "../components/Header";
import AllInner from "../components/AllInner";
import Login from "../pages/login";

const Routes = (props) => (
  <>
    <Header />
    <AllInner />
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/two-step-authentication" element={<Verify />} />
      <Route path="/error" element={<Error />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="*"
        element={<h1 stle={{ color: "white" }}>Page Not Found</h1>}
      />
    </Switch>
  </>
);

export default Routes;

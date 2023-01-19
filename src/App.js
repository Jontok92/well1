import "./App.css";
import "react-phone-input-2/lib/style.css";

// ** route import
import Routes from "./routes";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.onpopstate = (e) => {
      e.preventDefault();
      console.log(pathname);
      if (pathname === "/login") {
        navigate("/login");
      } else {
        navigate(pathname);
      }
    };
  });

  return <Routes />;
}

export default App;

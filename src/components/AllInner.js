import React from "react";
import { Link } from "react-router-dom";

const AllInner = () => {
  return (
    <>
      <div className="gray_header">
        <div className="container_cunstom gray_bgtop">
          <ul className="gray_menuttop">
            <li>
              <Link className="red_personal" to="#">
                Personal
              </Link>
            </li>
            <li>
              <Link to="#">Investing & Wealth Management</Link>
            </li>
            <li>
              <Link to="#">Small Business</Link>
            </li>
            <li>
              <Link to="#">Commercial Banking</Link>
            </li>
            <li>
              <Link to="#">Corporate & Investment Banking</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="white_header">
        <div className="container_cunstom">
          <ul className="ul_whitemu">
            <li>
              <Link to="#">Checking</Link>
            </li>
            <li>
              <Link to="#">Savings & CDs</Link>
            </li>
            <li>
              <Link to="#">Credit Cards</Link>
            </li>
            <li>
              <Link to="#">Home Loans</Link>
            </li>
            <li>
              <Link to="#">Personal Loans</Link>
            </li>
            <li>
              <Link to="#">Auto Loans</Link>
            </li>
            <li>
              <Link to="#">Premier</Link>
            </li>
            <li>
              <Link to="#">Education & Tools</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AllInner;

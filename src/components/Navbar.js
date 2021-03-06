import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./home/components/SearchForm";

function Navbar() {
  return (
    <div>
      <>
        <nav
          style={{ background: "#000", borderBottom: "0.4px solid #6e6e6e" }}
          className="navbar fixed-top mb-5"
        >
          <div className="container">
            <div className="navbar-header">
              <Link
                className="navbar-brand text-white text-lg brand-text"
                to="/"
              >
                <h2>
                  <span
                    style={{ color: "#e0a800" }}
                    className="fab fa-amazon fa-x5"
                  >
                    <strong style={{ color: "#17a2b8" }}> Prime</strong>
                  </span>
                </h2>
              </Link>
            </div>
            <SearchForm />
          </div>
        </nav>
      </>
    </div>
  );
}

export default Navbar;

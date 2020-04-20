import React from "react";
import SearchForm from "./home/components/SearchForm";

function Navbar() {
  return (
    <div>
      <>
        <nav
          style={{ margin: "auto", background: "#000" }}
          className="navbar fixed-top mb-5"
        >
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand text-white text-lg brand-text" to="/">
                <h2>
                  <span
                    style={{ color: "#e0a800" }}
                    className="fab fa-amazon fa-x5"
                  >
                    <strong style={{ color: "#17a2b8" }}> Prime</strong>
                  </span>
                </h2>
              </a>
            </div>
            <SearchForm />
          </div>
        </nav>
      </>
    </div>
  );
}

export default Navbar;

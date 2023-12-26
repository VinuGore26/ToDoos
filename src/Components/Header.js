import React from 'react'
import PropTypes from 'prop-types'
import logo from "../img/bell1.png"
import { Link } from "react-router-dom";

export default function Header(props) {

  let styleLogo = {
    width: "25px",
    marginRight: "7px"
  }

  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img src={logo} alt="logo" style={styleLogo}/>{props.title}</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
              </ul>
              {props.searchbar ? <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> : ""}
            </div>
          </div>
      </nav>
  )
}


Header.proptype = {
    title: PropTypes.string
}

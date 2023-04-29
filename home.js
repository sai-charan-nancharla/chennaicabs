import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const home = () => {
  return (
    <div className="cover">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <nav class="main">
        <img
          src={require("./logo.jpg")}
          alt="logo"
          width={90}
          height={100}
        ></img>
        <h3 align="center">Chennai Cabs</h3>
        <ul>
          <a href="#">
            <i class="fa fa-user" aria-hidden="true"></i>Profile
          </a>
        </ul>
      </nav>
      <div class="header">
        <div class="side-nav">
          <ul class="nav-links">
            <li>
              <a href="#">
                <i class="fa fa-home" aria-hidden="true"></i> Home
              </a>
            </li>
            <br></br>
            <li>
              <a href="#">
                <i class="fa fa-globe" aria-hidden="true"></i>Trip Management
              </a>
            </li>
            <br></br>
            <li>
              <Link to="/Driver">
                <i class="fa fa-id-card-o" aria-hidden="true"></i>Driver
                Management
              </Link>
            </li>
            <br></br>
            <li>
              <Link to="./Employment">
                <i class="fa fa-users" aria-hidden="true"></i>Employee
                Management
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default home;

import "./style.scss";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../../assets/drink.svg";

const Footer = () => (
  <div className="Myfooter">
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top logo"
          />
        </Navbar.Brand>
        <label className="text" htmlFor="link">
          Creado por
          <a
            href={import.meta.env.VITE_PORTFOLIO}
            target="_blank"
            rel="noopener noreferrer"
            id="link"
          >
            Federico Puppo
          </a>
        </label>
      </Container>
    </Navbar>
  </div>
);

export default Footer;

import "./style.scss";
import React from "react";
import { Navbar, Container, Ratio } from "react-bootstrap";
import Logo from "../../assets/drink.svg";
import NeonLogo from "../../assets/neon-drink.svg";
import {
  Whatsapp,
  Github,
  Linkedin,
  FileEarmarkPerson,
  Briefcase,
} from "react-bootstrap-icons";

//     <img alt="" className="d-inline-block align-top logo" src={NeonLogo} />

const NavBar = () => (
  <div className="MyNavbar">
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#">
        <img alt="" className="d-inline-block align-top logo" src={NeonLogo} />
        <span className="brand-text">Cocktail Time!</span>
      </Navbar.Brand>
      <div className="container">
        <a
          href={import.meta.env.VITE_LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <Linkedin size={24} />
        </a>
        <a
          href={import.meta.env.VITE_GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <Github size={24} />
        </a>
        <a
          href={import.meta.env.VITE_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <Whatsapp size={24} />
        </a>
        <a
          href={import.meta.env.VITE_CV_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FileEarmarkPerson size={24} />
        </a>
        <a
          href={import.meta.env.VITE_PORTFOLIO}
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <Briefcase size={24} />
        </a>
      </div>
    </Container>
  </Navbar>
  </div>
);
export default NavBar;

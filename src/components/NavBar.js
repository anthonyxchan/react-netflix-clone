import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import logo from "../assets/images/netflix_logo.svg";

const Nav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  padding: 20px;
  /* animation on scrolling */
  transition: all 450ms;
  transition-timing-function: ease-in;
  ${({ show }) =>
    show &&
    css`
      background-color: black;
      opacity: 1;
    `}
`;

const LogoImage = styled.img`
  object-fit: contain;
  width: 5rem;
`;

function NavBar() {
  const [show, setShow] = useState(false);

  const changeNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBar);
    return () => {
      window.removeEventListener("scroll", changeNavBar);
    };
  }, []);
  console.log(show);

  return (
    <Nav show={show}>
      <LogoImage src={logo} alt="Netflix Logo" />
    </Nav>
  );
}

export default NavBar;

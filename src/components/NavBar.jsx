import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const NavBar = ({ isAuthenticated, setAuthenticate }) => {
  return (
    <>
      <Navbar expand="lg" className="navbar-custom bg-white py-3">
        <Container>
          <Navbar.Brand href="/" className="brand-text">
            도서관 사이트
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="nav-link-custom">
                메인
              </Nav.Link>
              <Nav.Link href="/my-books" className="nav-link-custom">
                나의 책
              </Nav.Link>
              {isAuthenticated ? (
                <Nav.Link
                  onClick={() => setAuthenticate(false)}
                  className="nav-link-custom"
                >
                  로그아웃
                </Nav.Link>
              ) : (
                <Nav.Link href="/login" className="nav-link-custom active-link">
                  로그인
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

import { useState } from "react";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";

import Modal from "./Modal";

import {
  Navbar,
  Nav,
  Dropdown
} from "react-bootstrap";

const NavBar = ({ setLoggedIn, loggedIn, setLoggedInUser, loggedInUser }) => {
  const [modal, showModal] = useState(false);
  const [isLogin, setLogin] = useState(true);
  const toggle = () => showModal(!modal);
  const toggleLogin = () => {
    if (isLogin) setLogin(false);
    else {
      setLogin(true);
    }
  };

  let history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    localStorage.removeItem("profilepicture");
    toast.info("User succesfully logged out!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    history.push("/");
    setLoggedIn(false);
  };

  const showLoggedInNav = () => {
    if (loggedIn) {
      return (
        <>
          <Navbar.Toggle aria-controls="loggedin-navbar-nav" />
          <Navbar.Collapse id="loggedin-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                id="dropdown-basic"
                className="d-flex align-items-center"
              >
                <img
                  src={loggedInUser[1]}
                  alt={loggedInUser[1]}
                  className="border rounded-circle"
                  style={{ height: "25px" }}
                ></img>
                <Nav.Link style={{ color: "#5D5C61" }}>
                  {loggedInUser[0]}
                </Nav.Link>
              </Dropdown.Toggle>

              <Dropdown.Menu className="text-center">
                <Nav.Link href="/profile">My Profile</Nav.Link>
                <Nav.Link>Edit Profile</Nav.Link>
                <Nav.Link onClick={handleLogout}>Sign Out</Nav.Link>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </>
      );
    } else {
      return (
        <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link
              onClick={() => {
                setLogin(true);
                toggle();
              }}
            >
              Log In
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setLogin(false);
                toggle();
              }}
            >
              Sign Up
            </Nav.Link>
          </Navbar.Collapse>
        </>
      );
    }
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <a
            style={{ fontSize: "30px", color: "#5D5C61" }}
            className="navbar-brand ml-1"
            href="/"
          >
            <img src="http://clipart-library.com/new_gallery/119-1193043_jpg-stock-camera-drawing-clip-art-transprent-png.png"
             alt="logo"
             style={{height: '40px', paddingBottom: '3px', marginRight: '5px'}}
            />
            Nextagram
          </a>
        </Navbar.Brand>
        {showLoggedInNav()}
      </Navbar>
      <Modal
        modal={modal}
        toggle={toggle}
        isLogin={isLogin}
        toggleLogin={toggleLogin}
        setLoggedIn={setLoggedIn}
        setLoggedInUser={setLoggedInUser}
      ></Modal>
    </>
  );
};

export default NavBar;

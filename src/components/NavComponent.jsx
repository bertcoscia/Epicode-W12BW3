import { useEffect } from "react";
import { Button, Form, InputGroup, NavDropdown, NavLink } from "react-bootstrap";
import { Search, ThreeDots } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../redux/actions";
import { Link } from "react-router-dom";

function NavComponent() {
  const profile = useSelector(state => state.profile.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Navbar className="bg-body-tertiary" style={{ height: "80px", zIndex: "99" }}>
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to={"/"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#0966C2" width="45" height="45">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </Nav.Link>
        </Navbar.Brand>
        <Form inline="true" className="nav-search">
          <InputGroup>
            <InputGroup.Text id="search-icon" className="search-input border-end-none">
              <Search />
            </InputGroup.Text>
            <Form.Control type="text" placeholder="Search" className="px-2 py-2 search-input border-start-none nav-search-bar" aria-label="search" aria-describedby="search-icon" />
          </InputGroup>
        </Form>

        <Nav className="mx-md-auto text-center d-flex align-items-center">
          <Nav.Link href="#home" className="d-flex flex-column align-items-center nav-search-icon">
            <Search width={24} height={24} />
            <small className="d-none d-lg-block">Search</small>
          </Nav.Link>
          <Nav.Link as={Link} to={"/"} className="d-flex flex-column align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24">
              <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
            </svg>
            <small className="d-none d-lg-block">Home</small>
          </Nav.Link>
          <Nav.Link href="#home" className="d-flex flex-column align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24">
              <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
            </svg>
            <small className="d-none d-lg-block">My Network</small>
          </Nav.Link>
          <Nav.Link href="#home" className="d-flex flex-column align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24">
              <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
            </svg>
            <small className="d-none d-lg-block">Jobs</small>
          </Nav.Link>
          <Nav.Link href="#home" className="d-flex flex-column align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24">
              <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
            </svg>
            <small className="d-none d-lg-block">Messaging</small>
          </Nav.Link>
          <Nav.Link href="#home" className="d-flex flex-column align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24">
              <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
            </svg>
            <small className="d-none d-lg-block">Notifications</small>
          </Nav.Link>
          <NavDropdown
            className="border-end border-1 d-none d-sm-block pe-3"
            id="mdProfileDropdown"
            title={
              <div className="d-flex flex-column align-items-center">
                <img src={profile && profile.image} alt="profile pic" className="rounded-circle mb-1 nav-bar-propic" style={{ height: "24px", width: "24px" }} />
                <small className="d-none d-lg-block">Me</small>
              </div>
            }
            drop="start"
          >
            <NavDropdown.Item>
                <div className="d-flex flex-column border-bottom">
                  <div className="d-flex">
                    <img src={profile && profile.image} alt="" style={{ width: "48px", height: "48px" }} className="rounded-circle me-3" />
                    <div>
                      <h6>{`${profile && profile.name} ${profile && profile.surname}`}</h6>
                      <small className="line-clamp-1">{profile && profile.title}</small>
                    </div>
                  </div>
                <Nav.Link as={Link} to={"/profile"}>
                  <Button variant="outline-primary" className="rounded-pill px-lg-3 py-0 w-100 my-3">
                    View profile
                  </Button>
                  </Nav.Link>
                </div>
              
            </NavDropdown.Item>
            <div className="mx-3 border-bottom mb-3">
              <h5>Account</h5>
              <p style={{ cursor: "pointer" }} className="dropdown-link text-secondary">
                Settings & Privacy
              </p>
              <p style={{ cursor: "pointer" }} className="dropdown-link text-secondary">
                Help
              </p>
              <p style={{ cursor: "pointer" }} className="dropdown-link text-secondary">
                Language
              </p>
            </div>
            <div className="mx-3 border-bottom mb-3">
              <h5>Manage</h5>
              <p style={{ cursor: "pointer" }} className="dropdown-link text-secondary">
                Posts & Activity
              </p>
              <p style={{ cursor: "pointer" }} className="dropdown-link text-secondary">
                Job Posting Account
              </p>
            </div>
            <div className="mx-3">
              <p style={{ cursor: "pointer" }} className="dropdown-link text-secondary">
                Sign Out
              </p>
            </div>
          </NavDropdown>

          <NavDropdown
            className="d-none d-sm-block ms-2"
            id="mdBusinessDropdown"
            title={
              <div className="d-flex flex-column align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24">
                  <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                </svg>
                <small className="d-none d-lg-block">For Business</small>
              </div>
            }
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown className="d-sm-none xs-dropdown" id="xsDropdown" title={<ThreeDots fill="currentColor" width="30" height="30" />} drop="start">
            <NavDropdown
              id="xsProfileDropdown"
              title={<img src={profile && profile.image} alt="profile pic" className="rounded-circle mb-1" style={{ width: "24px", height: "24px", objectFit: "contain" }} />}
              drop="down"
              className="xs-profile-dropdown"
            >
              <NavDropdown.Item>
                <NavLink to="/">
                  <div className="d-flex flex-column border-bottom">
                    <div className="d-flex">
                      <img src={profile && profile.image} alt="" style={{ width: "48px", height: "48px" }} className="rounded-circle me-3" />
                      <div>
                        <h6>{`${profile && profile.name} ${profile && profile.surname}`}</h6>
                        <small className="line-clamp-1">{profile && profile.title}</small>
                      </div>
                    </div>
                    <Button variant="outline-primary" className="rounded-pill px-lg-3 py-0 w-100 my-3">
                      View profile
                    </Button>
                  </div>
                </NavLink>
              </NavDropdown.Item>
              <div className="mx-3 border-bottom mb-3">
                <h5>Account</h5>
                <p style={{ cursor: "pointer" }} className="dropdown-link text-secondary">
                  Settings & Privacy
                </p>
                <p style={{ cursor: "pointer" }} className="dropdown-link text-secondary">
                  Help
                </p>
                <p style={{ cursor: "pointer" }} className="dropdown-link text-secondary">
                  Language
                </p>
              </div>
              <div className="mx-3 border-bottom mb-3">
                <h5>Manage</h5>
                <p style={{ cursor: "pointer" }} className="dropdown-link text-secondary">
                  Posts & Activity
                </p>
                <p style={{ cursor: "pointer" }} className="dropdown-link text-secondary">
                  Job Posting Account
                </p>
              </div>
              <div className="mx-3">
                <p style={{ cursor: "pointer" }} className="dropdown-link text-secondary">
                  Sign Out
                </p>
              </div>
            </NavDropdown>

            <NavDropdown
              id="xsBusinessDropdown"
              title={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24">
                  <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                </svg>
              }
              className="xs-business-dropdown"
              drop="down"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavComponent;

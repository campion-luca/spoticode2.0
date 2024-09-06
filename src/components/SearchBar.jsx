import { Button, Col, Container, Row } from "react-bootstrap";
import spotifyLogo from "../assets/logo/logo.png";

const SearchBar = () => {
  return (
    <Container>
      <Row>
        <Col xs={2}>
          <nav
            className="navbar navbar-expand-md fixed-left justify-content-between"
            id="sidebar"
          >
            <div className="container flex-column align-items-start">
              <a className="navbar-brand" href="index.html">
                <img
                  className="w-100 h-50"
                  src={spotifyLogo}
                  alt="Spotify Logo"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <ul>
                    <li>
                      <p
                        className="nav-item nav-link d-flex align-items-center text-light"
                        href="#"
                      >
                        <i className="bi bi-house-door-fill"></i>&nbsp; Home
                      </p>
                    </li>
                    <li>
                      <p
                        className="nav-item nav-link d-flex align-items-center text-light"
                        href="#"
                      >
                        <i className="bi bi-book-fill"></i>&nbsp; Your Library{" "}
                      </p>
                    </li>
                    <li>
                      <div className="input-group mt-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-outline-secondary btn-sm h-100">
                            GO
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="nav-btn d-flex flex-column ms-4">
              <Button variant="outline-light signup-btn">Sign Up</Button>

              <Button variant="outline-light login-btn" className="mt-3">
                Login
              </Button>

              <p className="mt-5">Cookie Policy | Privacy</p>
            </div>
          </nav>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;

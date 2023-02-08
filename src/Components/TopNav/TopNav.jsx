//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const TopNav = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Pokemon</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/gifpokemon">Gif Pokemon</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/categories">Categories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/upload">Upload</Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">SEARCH</button>
            </form> */}
          </div>
        </div>
      </nav>


      {/* <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Search yor Pokemon</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Pokemon</Nav.Link>
              <Nav.Link href="/gifpokemon">Gif Pokemon</Nav.Link>
              <Nav.Link href="/categories">Categories</Nav.Link>
              <Nav.Link href="/upload">Upload</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  )
}

export default TopNav
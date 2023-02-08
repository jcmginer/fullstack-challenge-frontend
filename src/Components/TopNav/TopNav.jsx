import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import AuthenticationButton from '../Auth0/AuthenticationButton';


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
            <AuthenticationButton />
          </div>
        </div>
      </nav>
    </>
  )
}

export default TopNav
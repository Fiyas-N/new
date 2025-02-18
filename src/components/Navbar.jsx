import { Link } from 'react-router-dom';
import '../assets/Navbar.css';

function Navbar() {
  return (
    <nav className="navigation">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          DUNE: PART TWO
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cast">Cast</Link>
          <Link to="/rating">Rating</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 
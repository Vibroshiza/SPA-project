import { Link } from "react-router-dom";

function Header() {
    return <nav>
    <div className = "nav-wrapper container">
      <Link to="/" className="brand=logo lobster">SPA project</Link>
      <ul id="nav-mobile" className = "right hide-on-med-and-down">
        <li><Link to="/contact">Contacts</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  </nav>
}

export { Header };
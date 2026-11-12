function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          ZERODHA
        </a>

        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#pricing">Pricing</a>
          <a href="#support">Support</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

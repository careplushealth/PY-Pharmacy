import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const heroPaths = ["/", "/about", "/contact"]; // pages with a hero where header should start transparent
    const isHeroPath = heroPaths.includes(location.pathname);

    const onScroll = () => {
      setSolid(window.scrollY > 80 || !isHeroPath);
    };

    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  return (
    <header className={`py-header ${solid ? "solid" : ""}`}>
      <div className="container bar">
        <Link to="/" className="brand" aria-label="Mavari Pharmacy Home">
          {/* use public/ paths */}
          <img className="logo logo-light" src="/logo-light.png" alt="Mavari" />
          <img className="logo logo-dark"  src="/logo.png"       alt="Mavari" />
        </Link>

        <input id="nav-toggle" type="checkbox" />
        <label htmlFor="nav-toggle" className="hamburger" aria-label="Open Menu"><span/></label>

        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
         {/*   <NavLink to="/about">About Us</NavLink> */}
          <NavLink to="/contact">Contact</NavLink>
          {/* keep as Link so SPA navigation doesn’t reload */}
          <Link className="cart" to="/eligibility"><span className="dot" />Check Eligibility</Link>
        </nav>
      </div>
    </header>
  );
}

//Styles
import './navbar.css';
//Hooks
import { useState } from 'react';
//Brand-Logo
import logo from '../../assets/logo.png';
//React-Icons
import { HiMenuAlt4 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
//Social-Icons
import { BsYoutube, BsInstagram, BsBehance, BsLinkedin } from 'react-icons/bs';
export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  //Function to toggle menu on mobile scale
  function toggleMenu() {
    if (!toggle) {
      document.getElementById('nav-link').style.right = '0';
      document.getElementById('nav-overlay').style.display = 'block';
    } else {
      document.getElementById('nav-link').style.right = '-100%';
      document.getElementById('nav-overlay').style.display = 'none';
    }
    setToggle(!toggle);
  }

  return (
    <nav className="navbar">
      <a href="/">
        <img src={logo} alt="rast-mobile-logo" className="logo" />
      </a>

      {/* When menu toggled on, overlay on the left side */}
      <div className="navbar-overlay" id="nav-overlay"></div>

      <HiMenuAlt4 size={40} className="burger-menu" onClick={toggleMenu} />
      {/* Router Links */}
      <div className="nav-links" id="nav-link">
        <IoMdClose size={30} className="close-menu" onClick={toggleMenu} />
        <ul className="nav-route-links">
          <li>
            <a href="/hakkimizda">Hakkımızda</a>
          </li>
          <li>
            <a href="/juri-yarisma-yazilimi">Jüri - Yarışma Yazılımı</a>
          </li>
          <li>
            <a href="/word-ninja">Word Ninja</a>
          </li>
          <li>
            <a href="/word-pyramids">Word Pyramids</a>
          </li>
        </ul>

        {/* Social Links */}
        <ul className="nav-social-links">
          <li>
            <BsYoutube size={20} />
          </li>
          <li>
            <BsInstagram size={20} />
          </li>
          <li>
            <BsBehance size={20} />
          </li>
          <li>
            <BsLinkedin size={20} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

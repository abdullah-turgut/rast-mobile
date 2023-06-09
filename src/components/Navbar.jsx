//Brand-Logo
import logo from '../assets/logo.png';

//React-Icons
import { HiMenuAlt4 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

//Social-Icons
import { BsYoutube, BsInstagram, BsBehance, BsLinkedin } from 'react-icons/bs';
export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">
        <img src={logo} alt="rast-mobile-logo" className="logo" />
      </a>

      {/* When menu toggled on overlay on the left side */}
      <div className="navbar-overlay"></div>

      <HiMenuAlt4 size={40} className="burger-menu" />
      {/* Router Links */}
      <div className="nav-links">
        <IoMdClose size={30} />
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
            <a href="">
              <BsYoutube size={20} />
            </a>
          </li>
          <li>
            <a href="">
              <BsInstagram size={20} />
            </a>
          </li>
          <li>
            <a href="">
              <BsBehance size={20} />
            </a>
          </li>
          <li>
            <a href="">
              <BsLinkedin size={20} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

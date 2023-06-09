import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="" />

      {/* Router Links */}
      <ul className="nav-links">
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
      <ul className="nav-social">
        <li>
          <a href="">Youtube</a>
        </li>
        <li>
          <a href="">Instagram</a>
        </li>
        <li>
          <a href="">Behance</a>
        </li>
        <li>
          <a href="">Linked.in</a>
        </li>
      </ul>
    </nav>
  );
}

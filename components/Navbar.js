import styles from '../styles/Navbar.module.scss';

function Navbar() {
  return (
    <nav className={nav}>
      <ul>
        <li>Home</li>
        <li>Buy</li>
        <li>Rarity</li>
      </ul>
    </nav>
  );
}

export default Navbar;

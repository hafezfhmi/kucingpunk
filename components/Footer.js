import styles from "../styles/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.Footer}>
      <p>&copy;KucingPunk 2021</p>

      <div className={styles.socials}>
        <p>Socials:</p>
        <div>
          <a href="https://app.pentas.io/user/0xbc0821b58c159bb4a164441c10f66abae0509d33">
            pentas
          </a>
          <a href="https://twitter.com/KucingPunkNFT">twitter</a>
          <a href="mailto:kucingpunknft@gmail.com">email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

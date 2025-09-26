import logo from "../../assets/LOGO.svg";
import styles from "./header.module.scss";

console.log(styles);

export const Header = () => {
  return (
    <header>
      <img src={logo} id={styles.logo} />
      <nav>
        <a>Landing</a>
        <a>Company</a>
        <a>CMS Pages</a>
        <a>Utility</a>
      </nav>
      <nav>
        <button>$129 Buy Now</button>
        <img src="" alt="search icon" />
        <img src="" alt="buy icon" />
      </nav>
    </header>
  );
};

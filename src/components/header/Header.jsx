import logo from "../../assets/LOGO.svg";
import styles from "./header.module.scss";
import { button } from "../../scss/common/button.module.scss";
import searchIcon from "../../assets/icons/search_icon.svg";
import cartIcon from "../../assets/icons/cart_icon.svg";

console.log(styles);

export const Header = () => {
  return (
    <header id={styles.header}>
      <nav className={styles.main}>
        <img src={logo} id={styles.logo} />
        <a>Landing</a>
        <a>Company</a>
        <a>CMS Pages</a>
        <a>Utility</a>
      </nav>
      <nav className={styles.secondary}>
        <button className={button}>$129 Buy Now</button>
        <img src={searchIcon} alt="search icon" />
        <img src={cartIcon} alt="buy icon" />
      </nav>
    </header>
  );
};

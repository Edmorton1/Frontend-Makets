import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <nav className="header__main">
        <img src="LOGO.svg" alt="Logo" />
        <a href="#">Landing</a>
        <a href="#">Company</a>
        <a href="#">CMS Pages</a>
        <a href="#">Utility</a>
      </nav>
      <nav className="header__secondary">
        <button className="button button_font-size_medium">$129 Buy Now</button>
        <img src="icons/header/search_icon.svg" alt="search icon" />
        <img src="icons/header/cart_icon.svg" alt="buy icon" />
      </nav>
      <nav className="header__menu-button">
        <button className="button button_font-size_medium">menu</button>
      </nav>
    </header>
  );
};

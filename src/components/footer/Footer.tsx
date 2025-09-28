import { imagesData } from "../common/data";
import "./footer.css";

const Information = () => {
  return Object.entries(imagesData).map(([key, data]) => {
    return (
      <div key={key} className="footer__right-column">
        <div>{key}</div>
        <ul>
          {data.map((info) => {
            return <li key={info.title}>{info.title}</li>;
          })}
        </ul>
      </div>
    );
  });
};

export const Footer = () => {
  return (
    <>
      <footer className="footer mg-top__big">
        <div className="footer__left">
          <div className="footer__form">
            <div className="footer__subscribe">Subscribe our newsletter</div>
            <div className="footer__input">
              <input className="input" type="text" />
              <button className="button button_size_fixed"></button>
            </div>
          </div>
          <div className="footer__icons">
            <img src="icons/footer/be.svg" alt="" />
            <img src="icons/footer/basketball.svg" alt="" />
            <img src="icons/footer/v.svg" alt="" />
          </div>
        </div>
        <div className="footer__right">
          <Information />
        </div>
      </footer>

      <div className="footer__signs">
        <div>
          Powered by <span className="footer__highlight">Webflow</span>
        </div>
        <div>
          Created by <span className="footer__highlight">Udesly</span>
        </div>
      </div>
    </>
  );
};

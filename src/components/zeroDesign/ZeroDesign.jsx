import style from "./zeroDesign.module.scss";
import { button } from "../../scss/common/button.module.scss";
import image from "../../assets/images/zero_design.png";

export const ZeroDesign = () => {
  return (
    <main>
      <img src={image} />

      <section id={style.zeroDesign}>
        <div>
          <h1>Zero Design</h1>
          <div id={style.text}>
            Includes a total of 10 static pages, divided like this: 4 Landing
            pages, 2 About pages, 2 Contact page, 1 Team page, 1 FAQ page. In
            addition to these, there are Webflow CMS driven pages: Blog (in 2
            variations), Shop (in 2 variations), Works and Careers. All with
            their respective single pages!
          </div>
        </div>

        <div id={style.articles}>
          <div className={button}>4 LANDING</div>
          <div className={button}>2 ABOUT</div>
          <div className={button}>3 CONTACT</div>
          <div className={button}>3 BLOG</div>
          <div className={button}>2 SHOP</div>
          <div className={button}>WORKS</div>
          <div className={button}>TEAM</div>
          <div className={button}>CAREERS</div>
          <div className={button}>FORMS</div>
          <div className={button}>UTILITY</div>
        </div>
      </section>
    </main>
  );
};

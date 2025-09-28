import "./zero-design.css";

export const ZeroDesign = () => {
  return (
    <div className="zero-design mg-top__big">
      <img
        className="zero-design__image"
        src="images/zero_design.png"
        alt=""
      />

      <div className="zero-design__information">
        <div className="zero-design__text">
          <div className="typography_big">Zero Design</div>
          <div className="typography_small">
            Includes a total of 10 static pages, divided like this: 4 Landing
            pages, 2 About pages, 2 Contact page, 1 Team page, 1 FAQ page. In
            addition to these, there are Webflow CMS driven pages: Blog (in 2
            variations), Shop (in 2 variations), Works and Careers. All with
            their respective single pages!
          </div>
        </div>

        <div className="zero-design__buttons">
          <div className="button button_font-size_small">4 LANDING</div>
          <div className="button button_font-size_small">2 ABOUT</div>
          <div className="button button_font-size_small">3 CONTACT</div>
          <div className="button button_font-size_small">3 BLOG</div>
          <div className="button button_font-size_small">2 SHOP</div>
          <div className="button button_font-size_small">WORKS</div>
          <div className="button button_font-size_small">TEAM</div>
          <div className="button button_font-size_small">CAREERS</div>
          <div className="button button_font-size_small">FORMS</div>
          <div className="button button_font-size_small">UTILITY</div>
        </div>
      </div>
    </div>
  );
};

import "./ui-kit.css";

export const UiKit = () => {
  return (
    <div className="ui-kit mg-top__small">
      <div className="ui-kit__text-section">
        <div className="ui-kit__text">
          <div className="ui-kit__design-addicted">Design addicted</div>
          <div className="typography_big">A stylish UI Kit</div>
          <div className="typography_medium">for all web creatives</div>
          <div className="typography_small">
            Zero is a Webflow Ecommerce and CMS UI kit including several
            carefully designed page layouts.
          </div>
        </div>

        <div className="ui-kit__icons">
          <div className="ui-kit__icon">
            <img src="icons/ui-kit/smooth_interactions.svg" alt="" />
            <div>smooth interactions</div>
          </div>
          <div className="ui-kit__icon">
            <img src="icons/ui-kit/many_page_layouts.svg" alt="" />
            <div>many</div>
            <div>page layouts</div>
          </div>
          <div className="ui-kit__icon">
            <img src="icons/ui-kit/fully_responsive.svg" alt="" />
            <div>fully responsive</div>
          </div>
          <div className="ui-kit__icon">
            <img src="icons/ui-kit/fast_customization.svg" alt="" />
            <div>fast customization</div>
          </div>
        </div>
      </div>

      <img
        className="ui-kit__image"
        src="images/main_image.png"
        alt=""
        loading="lazy"
      />
    </div>
  );
};

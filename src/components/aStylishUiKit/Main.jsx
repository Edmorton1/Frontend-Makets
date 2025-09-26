import image from "../../assets/images/main_image.png";
import styles from "./main.module.scss";
import smooth_interactions from "../../assets/icons/smooth_interactions.svg";
import many_page_layouts from "../../assets/icons/many_page_layouts.svg";
import fully_responsive from "../../assets/icons/fully_responsive.svg";
import fast_customization from "../../assets/icons/fast_customization.svg";

export const AStylishUiKit = () => {
  return (
    <main>
      <section>
        <section id={styles.text}>
          <div id={styles["design-addicted"]}>Design addicted</div>
          <h1>A stylish UI Kit</h1>
          <h2>for all web creatives</h2>
          <h3>
            Zero is a Webflow Ecommerce and CMS UI kit including several
            carefully designed page layouts.
          </h3>
        </section>

        <section id={styles.icons}>
          <article className={styles.article}>
            <img src={smooth_interactions} alt="" />
            {/* TODO Это должно быть БОЛЬШИМИ БУКВАМИ */}
            <div>smooth interactions</div>
          </article>
          <article className={styles.article}>
            <img src={many_page_layouts} alt="" />
            <div>many page layouts</div>
          </article>
          <article className={styles.article}>
            <img src={fully_responsive} alt="" />
            <div>fully responsive</div>
          </article>
          <article className={styles.article}>
            <img src={fast_customization} alt="" />
            <div>fast customization</div>
          </article>
        </section>
      </section>

      <img src={image} alt="" />
    </main>
  );
};

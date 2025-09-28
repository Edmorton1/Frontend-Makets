export interface ImageCards {
  src: string;
  title: string;
}

export const Images = ({name, cards}: {name: string, cards: ImageCards[]}) => {
  return (
    <div key={name} className="landing-pages mg-top__big">
      <div className="button button_font-size_large">{name}</div>
      <div className="landing-pages__landings landing-pages__landing_columns-2">
        {cards.map((info) => (
          <div key={info.title} className="landing-pages__landing">
            <img src={info.src} alt="" />
            <div className="typography_medium">{info.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

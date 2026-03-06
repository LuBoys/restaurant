/* eslint-disable @next/next/no-img-element */
type CreationItem = {
  name: string;
  subtitle: string;
  price: string;
  image: string;
  alt: string;
};

type CreationsSectionProps = {
  label: string;
  title: string;
  note: string;
  items: CreationItem[];
};

export function CreationsSection({
  label,
  title,
  note,
  items,
}: CreationsSectionProps) {
  return (
    <section className="creations" id="creations" aria-labelledby="creations-title">
      <div className="creations__container">
        <div className="creations__header">
          <span className="creations__label reveal">{label}</span>
          <h2 id="creations-title" className="creations__title reveal">
            {title}
          </h2>
          <p className="creations__note reveal">{note}</p>
        </div>

        <div className="creations__grid">
          {items.map((item) => (
            <article className="creations__card reveal-scale" key={item.name}>
              <div className="creations__image-wrap">
                <img src={item.image} alt={item.alt} className="creations__image" loading="lazy" />
                <span className="creations__price">{item.price}</span>
              </div>
              <div className="creations__content">
                <h3 className="creations__name">{item.name}</h3>
                <p className="creations__subtitle">{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

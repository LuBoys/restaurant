/* eslint-disable @next/next/no-img-element */
type ChefSectionProps = {
  label: string;
  quote: string;
  name: string;
  title: string;
  mark: string;
};

export function ChefSection({ label, quote, name, title, mark }: ChefSectionProps) {
  return (
    <section className="chef" id="chef">
      <div className="chef__background" />
      <img
        className="chef__image"
        src="https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?auto=format&fit=crop&w=1800&q=80"
        alt="Burger signature prepare en cuisine ouverte"
      />
      <div className="chef__overlay" />

      <div className="chef__content">
        <div className="chef__card reveal-right">
          <span className="chef__label">{label}</span>
          <blockquote className="chef__quote">{quote}</blockquote>
          <p className="chef__name">{name}</p>
          <p className="chef__title">{title}</p>
        </div>
        <span className="chef__kanji">{mark}</span>
      </div>
    </section>
  );
}

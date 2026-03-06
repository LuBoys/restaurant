type IngredientItem = {
  icon: string;
  title: string;
  text: string;
};

type IngredientsSectionProps = {
  label: string;
  title: string;
  titleHtml?: string;
  items: IngredientItem[];
};

export function IngredientsSection({ label, title, titleHtml, items }: IngredientsSectionProps) {
  return (
    <section className="ingredients" id="ingredients">
      <div className="ingredients__container">
        <div className="ingredients__header">
          <span className="ingredients__label reveal">{label}</span>
          {titleHtml ? (
            <h2
              className="ingredients__title reveal"
              dangerouslySetInnerHTML={{ __html: titleHtml }}
            />
          ) : (
            <h2 className="ingredients__title reveal">{title}</h2>
          )}
        </div>

        <div className="ingredients__grid">
          {items.map((item) => (
            <article className="ingredients__item reveal" key={item.title}>
              <span className="ingredients__icon">{item.icon}</span>
              <h3 className="ingredients__item-title">{item.title}</h3>
              <p className="ingredients__item-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

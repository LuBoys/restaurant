type ExperienceItem = {
  icon: string;
  title: string;
  text: string;
};

type ExperienceSectionProps = {
  label: string;
  title: string;
  items: ExperienceItem[];
};

export function ExperienceSection({ label, title, items }: ExperienceSectionProps) {
  return (
    <section className="experience" id="experience">
      <div className="experience__container">
        <div className="experience__header">
          <span className="experience__label reveal">{label}</span>
          <h2 className="experience__title reveal">{title}</h2>
        </div>

        <div className="experience__grid">
          {items.map((item) => (
            <div className="experience__item reveal" key={item.title}>
              <span className="experience__icon">{item.icon}</span>
              <h3 className="experience__item-title">{item.title}</h3>
              <p className="experience__item-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

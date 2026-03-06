type ReservationSectionProps = {
  mark: string;
  label: string;
  title: string;
  subtitle: string;
  cta: string;
};

export function ReservationSection({
  mark,
  label,
  title,
  subtitle,
  cta,
}: ReservationSectionProps) {
  return (
    <section className="reservation" id="reservation">
      <div className="reservation__container">
        <div className="reservation__kanji reveal">{mark}</div>
        <span className="reservation__label reveal">{label}</span>
        <h2 className="reservation__title reveal">{title}</h2>
        <p className="reservation__subtitle reveal">{subtitle}</p>

        <form className="reservation__form reveal" onSubmit={(event) => event.preventDefault()}>
          <div className="reservation__row">
            <input
              type="text"
              className="reservation__input"
              placeholder="Votre nom"
              required
              aria-label="Votre nom"
            />
            <input
              type="email"
              className="reservation__input"
              placeholder="Adresse e-mail"
              required
              aria-label="Adresse e-mail"
            />
          </div>

          <div className="reservation__row">
            <input type="date" className="reservation__input" required aria-label="Date" />
            <select className="reservation__input" required aria-label="Nombre de personnes" defaultValue="">
              <option value="" disabled>
                Nombre de personnes
              </option>
              <option value="1">1 personne</option>
              <option value="2">2 personnes</option>
              <option value="3">3 personnes</option>
              <option value="4">4 personnes</option>
              <option value="5">5 personnes</option>
              <option value="6">6 personnes</option>
            </select>
          </div>

          <input
            type="tel"
            className="reservation__input"
            placeholder="Téléphone"
            aria-label="Téléphone"
          />
          <button type="submit" className="reservation__button">
            {cta}
          </button>
        </form>
      </div>
    </section>
  );
}

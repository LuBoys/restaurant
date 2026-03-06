/* eslint-disable @next/next/no-img-element */
type Testimonial = {
  name: string;
  city: string;
  rating: number;
  date: string;
  text: string;
  source?: string;
  photo?: string;
};

type TestimonialsSectionProps = {
  label: string;
  title: string;
  titleHtml?: string;
  note: string;
  items: Testimonial[];
};

export function TestimonialsSection({
  label,
  title,
  titleHtml,
  note,
  items,
}: TestimonialsSectionProps) {
  const loopItems = [...items, ...items];

  return (
    <section className="testimonials" id="avis" aria-labelledby="avis-title">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <span className="testimonials__label reveal">{label}</span>
          {titleHtml ? (
            <h2
              id="avis-title"
              className="testimonials__title reveal"
              dangerouslySetInnerHTML={{ __html: titleHtml }}
            />
          ) : (
            <h2 id="avis-title" className="testimonials__title reveal">
              {title}
            </h2>
          )}
          <p className="testimonials__note reveal">{note}</p>
        </div>

        <div className="testimonials__grid">
          <div className="testimonials__track">
            {loopItems.map((item, index) => (
              <article className="testimonials__card reveal-scale" key={`${item.name}-${index}`}>
                <div className="testimonials__top">
                  <div className="testimonials__rating" aria-label={`${item.rating} sur 5`}>
                    {"★".repeat(item.rating)}
                    {"☆".repeat(5 - item.rating)}
                  </div>
                  {item.source ? (
                    <span
                      className={`testimonials__source ${
                        item.source.toLowerCase().includes("trip") ?
                          "testimonials__source--tripadvisor"
                        : "testimonials__source--google"
                      }`}
                    >
                      {item.source}
                    </span>
                  ) : null}
                </div>
                {item.photo ? (
                  <div className="testimonials__photo-wrap">
                    <img
                      src={item.photo}
                      alt={`Photo de burger partagée par ${item.name}`}
                      className="testimonials__photo"
                      loading="lazy"
                    />
                  </div>
                ) : null}
                <p className="testimonials__text">“{item.text}”</p>
                <div className="testimonials__meta">
                  <span className="testimonials__name">{item.name}</span>
                  <span className="testimonials__city">{item.city}</span>
                  <span className="testimonials__date">{item.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

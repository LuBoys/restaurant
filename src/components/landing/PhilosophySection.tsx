/* eslint-disable @next/next/no-img-element */
type PhilosophySectionProps = {
  sideMark: string;
  label: string;
  headingHtml: string;
  paragraphOne: string;
  paragraphTwo: string;
  signature: string;
  image: string;
  imageAlt: string;
};

export function PhilosophySection({
  sideMark,
  label,
  headingHtml,
  paragraphOne,
  paragraphTwo,
  signature,
  image,
  imageAlt,
}: PhilosophySectionProps) {
  return (
    <section className="philosophy" id="philosophy">
      <div className="philosophy__container">
        <div className="philosophy__left reveal-left">
          <span className="philosophy__kanji">{sideMark}</span>
          <div className="philosophy__image-frame">
            <img src={image} alt={imageAlt} className="philosophy__image" />
          </div>
        </div>

        <div className="philosophy__right">
          <span className="philosophy__label reveal">{label}</span>
          <h2
            className="philosophy__heading reveal"
            dangerouslySetInnerHTML={{ __html: headingHtml }}
          />
          <p className="philosophy__text reveal">{paragraphOne}</p>
          <p className="philosophy__text reveal">{paragraphTwo}</p>
          <span className="philosophy__signature reveal">{signature}</span>
        </div>
      </div>
    </section>
  );
}

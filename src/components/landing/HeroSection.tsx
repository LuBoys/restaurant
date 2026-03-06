type HeroSectionProps = {
  symbol: string;
  title: string;
  tagline: string;
  videoSrc: string;
};

export function HeroSection({ symbol, title, tagline, videoSrc }: HeroSectionProps) {
  return (
    <section className="hero" id="hero">
      <div className="hero__canvas-container">
        <video
          className="hero__video"
          id="heroVideo"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Vidéo d'introduction burger"
        />
        <div className="hero__overlay" />
        <div className="hero__fade" />

        <div className="hero__content">
          <h1 className="hero__japanese" id="heroJapanese">
            {symbol}
          </h1>
          <p className="hero__title" id="heroTitle">
            {title}
          </p>
          <p className="hero__tagline" id="heroTagline">
            {tagline}
          </p>

          <div className="hero__actions" id="heroActions">
            <a href="#menu" className="hero__order-btn">
              Commander
            </a>
          </div>
        </div>

        <div className="hero__scroll" id="heroScroll">
          <span className="hero__scroll-text">Défilez pour explorer</span>
          <span className="hero__scroll-line" />
        </div>
      </div>
    </section>
  );
}

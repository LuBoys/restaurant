type LoaderProps = {
  logo: string;
};

export function Loader({ logo }: LoaderProps) {
  return (
    <div className="loader" id="loader">
      <div className="loader__logo">{logo}</div>
      <div className="loader__text">Chargement de l&apos;experience</div>
      <div className="loader__progress" aria-hidden="true">
        <div className="loader__progress-bar" id="loaderProgress" />
      </div>
      <div className="loader__count" id="loaderCount" aria-live="polite">
        0%
      </div>
    </div>
  );
}

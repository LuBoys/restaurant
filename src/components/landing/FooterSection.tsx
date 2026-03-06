import type { ReactNode } from "react";

type FooterLink = {
  href: string;
  label: string;
};

type FooterSectionProps = {
  logo: ReactNode;
  logoLabel: string;
  tagline: string;
  navLinks: FooterLink[];
  navigateTitle: string;
  contactTitle: string;
  hoursTitle: string;
  address: string;
  phone: string;
  email: string;
  hoursWeek: string;
  hoursExtra: string;
  copyright: string;
  legal: FooterLink[];
  creator: string;
};

export function FooterSection({
  logo,
  logoLabel,
  tagline,
  navLinks,
  navigateTitle,
  contactTitle,
  hoursTitle,
  address,
  phone,
  email,
  hoursWeek,
  hoursExtra,
  copyright,
  legal,
  creator,
}: FooterSectionProps) {
  return (
    <footer className="footer">
      <span className="footer__kanji">BO</span>

      <div className="footer__container">
        <div className="footer__brand">
          <div className="footer__logo">{logo}</div>
          <div className="footer__logo-en">{logoLabel}</div>
          <p className="footer__tagline">{tagline}</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">{navigateTitle}</h4>
          <ul className="footer__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="footer__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">{contactTitle}</h4>
          <p className="footer__contact-item">{address}</p>
          <p className="footer__contact-item">{phone}</p>
          <p className="footer__contact-item">{email}</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">{hoursTitle}</h4>
          <p className="footer__contact-item">{hoursWeek}</p>
          <p className="footer__contact-item">{hoursExtra}</p>
          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="Instagram">
              IG
            </a>
            <a href="#" className="footer__social-link" aria-label="Facebook">
              FB
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">{copyright}</p>
        <div className="footer__legal">
          {legal.map((item) => (
            <a key={item.label} href={item.href} className="footer__legal-link">
              {item.label}
            </a>
          ))}
          <span className="footer__legal-link footer__creator">{creator}</span>
        </div>
      </div>
    </footer>
  );
}

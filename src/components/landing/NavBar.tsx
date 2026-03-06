import type { ReactNode } from "react";

type NavLinkItem = {
  href: string;
  label: string;
};

type NavBarProps = {
  logoSymbol: ReactNode;
  logoLabel: string;
  links: NavLinkItem[];
  ctaLabel: string;
};

export function NavBar({ logoSymbol, logoLabel, links, ctaLabel }: NavBarProps) {
  return (
    <nav className="nav" id="nav">
      <a href="#hero" className="nav__logo" aria-label={`${logoLabel} accueil`}>
        {logoSymbol}
        <span className="nav__logo-en">{logoLabel}</span>
      </a>

      <ul className="nav__links">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="nav__link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#reservation" className="nav__cta">
        {ctaLabel}
      </a>

      <button className="nav__menu-btn" aria-label="Ouvrir le menu" type="button">
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

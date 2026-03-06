"use client";

import { NavBar } from "@/components/landing/NavBar";
import { HeroSection } from "@/components/landing/HeroSection";
import { PhilosophySection } from "@/components/landing/PhilosophySection";
import { MenuSection } from "@/components/landing/MenuSection";
import { ExperienceSection } from "@/components/landing/ExperienceSection";
import { IngredientsSection } from "@/components/landing/IngredientsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { CreationsSection } from "@/components/landing/CreationsSection";
import { ChefSection } from "@/components/landing/ChefSection";
import { ReservationSection } from "@/components/landing/ReservationSection";
import { FooterSection } from "@/components/landing/FooterSection";
import { burgerProducts } from "@/data/burgerProducts";
import {
  backgroundWatermarkText,
  brand,
  chefStory,
  creations,
  experience,
  footer,
  heroVideo,
  ingredients,
  navLinks,
  philosophy,
  reservation,
  testimonials,
} from "@/data/siteContent";
import { useLandingAnimations } from "@/hooks/useLandingAnimations";

const headingHtml = philosophy.heading.replace(/\n/g, "<br />");

export function BurgerLanding() {
  useLandingAnimations();

  return (
    <>
      <div className="grain" />

      <NavBar
        logoSymbol={brand.symbol}
        logoLabel={brand.name}
        links={navLinks}
        ctaLabel="Réserver"
      />

      <HeroSection
        symbol={brand.symbol}
        title={brand.name}
        tagline={brand.tagline}
        videoSrc={heroVideo.src}
      />

      <div className="main-content">
        <div className="background-kanji" aria-hidden="true">
          <div className="background-kanji__text">{backgroundWatermarkText}</div>
        </div>

        <PhilosophySection
          sideMark={philosophy.sideMark}
          label={philosophy.label}
          headingHtml={headingHtml}
          paragraphOne={philosophy.paragraphOne}
          paragraphTwo={philosophy.paragraphTwo}
          signature={philosophy.signature}
          image={philosophy.image}
          imageAlt={philosophy.imageAlt}
        />

        <MenuSection products={burgerProducts} />

        <CreationsSection
          label={creations.label}
          title={creations.title}
          note={creations.note}
          items={creations.items}
        />

        <ExperienceSection
          label={experience.label}
          title={experience.title}
          items={experience.items}
        />

        <IngredientsSection
          label={ingredients.label}
          title={ingredients.title}
          titleHtml={ingredients.titleHtml}
          items={ingredients.items}
        />

        <TestimonialsSection
          label={testimonials.label}
          title={testimonials.title}
          titleHtml={testimonials.titleHtml}
          note={testimonials.note}
          items={testimonials.items}
        />

        <ChefSection
          label={chefStory.label}
          quote={chefStory.quote}
          name={chefStory.name}
          title={chefStory.title}
          mark={chefStory.mark}
        />

        <ReservationSection
          mark={reservation.mark}
          label={reservation.label}
          title={reservation.title}
          subtitle={reservation.subtitle}
          cta={reservation.cta}
        />
      </div>

      <FooterSection
        logo={brand.symbol}
        logoLabel={brand.name}
        tagline={brand.footerTagline}
        navLinks={navLinks}
        navigateTitle={footer.navigateTitle}
        contactTitle={footer.contactTitle}
        hoursTitle={footer.hoursTitle}
        address={footer.address}
        phone={footer.phone}
        email={footer.email}
        hoursWeek={footer.hoursWeek}
        hoursExtra={footer.hoursExtra}
        copyright={footer.copyright}
        legal={footer.legal}
        creator={footer.creator}
      />
    </>
  );
}

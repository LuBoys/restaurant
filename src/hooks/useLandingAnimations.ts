"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useLandingAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cleanupFns: Array<() => void> = [];
    const timeouts: number[] = [];

    let destroyed = false;
    let lastScroll = 0;

    const initNavigation = () => {
      const nav = document.getElementById("nav");
      if (!nav) {
        return;
      }

      const onScroll = () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > window.innerHeight) {
          if (currentScroll > lastScroll) {
            nav.classList.add("hidden");
          } else {
            nav.classList.remove("hidden");
          }
        } else {
          nav.classList.remove("hidden");
        }

        lastScroll = currentScroll;
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      cleanupFns.push(() => window.removeEventListener("scroll", onScroll));
    };

    const initHeroVideo = () => {
      const heroVideo = document.getElementById("heroVideo") as HTMLVideoElement | null;
      if (!heroVideo) {
        return;
      }

      const playVideo = () => {
        heroVideo
          .play()
          .catch(() => {
            // Autoplay may fail on some browsers despite muted/playsInline.
          });
      };

      playVideo();
      heroVideo.addEventListener("canplay", playVideo);
      cleanupFns.push(() => heroVideo.removeEventListener("canplay", playVideo));
    };

    const initBackgroundKanjiAnimation = () => {
      const kanjiElement = document.querySelector(".background-kanji") as HTMLElement | null;
      const kanjiText = document.querySelector(".background-kanji__text") as HTMLElement | null;
      const mainContent = document.querySelector(".main-content") as HTMLElement | null;

      if (!kanjiElement || !kanjiText || !mainContent) {
        return;
      }

      kanjiElement.style.height = "auto";
      const textHeight = kanjiText.offsetHeight;
      kanjiElement.style.height = "0px";

      const updateHeight = () => {
        const rect = mainContent.getBoundingClientRect();
        const vh = window.innerHeight;

        const start = rect.top - vh;
        const end = rect.bottom;
        const progress = Math.min(Math.max(-start / (end - start), 0), 1);

        kanjiElement.style.height = `${progress * textHeight}px`;
      };

      window.addEventListener("scroll", updateHeight, { passive: true });
      window.addEventListener("resize", updateHeight);

      cleanupFns.push(() => {
        window.removeEventListener("scroll", updateHeight);
        window.removeEventListener("resize", updateHeight);
      });

      updateHeight();
    };

    const initRevealAnimations = () => {
      ScrollTrigger.refresh();

      const context = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>(".reveal-left").forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0, x: -40 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>(".reveal-right").forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0, x: 40 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>(".reveal-scale").forEach((element, index) => {
          gsap.fromTo(
            element,
            { opacity: 0, scale: 0.95 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              delay: index * 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 95%",
                toggleActions: "play none none none",
              },
            },
          );
        });
      });

      cleanupFns.push(() => context.revert());
    };

    const initMenuHorizontalScroll = () => {
      const menuSection = document.querySelector(".menu");
      const menuScroll = document.querySelector(".menu__scroll") as HTMLElement | null;
      const menuItems = document.querySelectorAll(".menu__item");

      if (!menuSection || !menuScroll || menuItems.length === 0) {
        return;
      }

      const matchMedia = gsap.matchMedia();
      matchMedia.add("(min-width: 769px)", () => {
        const firstItem = menuItems[0] as HTMLElement;
        const itemWidth = firstItem.offsetWidth;
        const gap = parseFloat(getComputedStyle(menuScroll).gap) || 32;
        const totalWidth = itemWidth * menuItems.length + gap * (menuItems.length - 1);
        const viewportWidth = window.innerWidth;
        const paddingLeft = parseFloat(getComputedStyle(menuScroll).paddingLeft) || 32;

        const scrollDistance = totalWidth - viewportWidth + paddingLeft + gap;

        gsap.to(menuScroll, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: menuSection,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      cleanupFns.push(() => matchMedia.revert());
    };

    const initHeroAnimation = () => {
      const timeline = gsap.timeline({ delay: 0.2 });

      timeline
        .to("#heroJapanese", {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        })
        .to(
          "#heroTitle",
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8",
        )
        .to(
          "#heroTagline",
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.65",
        )
        .to(
          "#heroActions",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .to(
          "#heroScroll",
          {
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4",
        );

      cleanupFns.push(() => timeline.kill());
    };

    const initExperienceHover = () => {
      const items = document.querySelectorAll(".experience__item");

      items.forEach((item) => {
        const element = item as HTMLElement;

        const onMouseMove = (event: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const x = ((event.clientX - rect.left) / rect.width) * 100;
          const y = ((event.clientY - rect.top) / rect.height) * 100;

          element.style.setProperty("--mouse-x", `${x}%`);
          element.style.setProperty("--mouse-y", `${y}%`);
        };

        element.addEventListener("mousemove", onMouseMove);
        cleanupFns.push(() => element.removeEventListener("mousemove", onMouseMove));
      });
    };

    const initAnimations = () => {
      initNavigation();
      initHeroVideo();
      initHeroAnimation();
      initExperienceHover();

      const delayedInit = window.setTimeout(() => {
        if (destroyed) {
          return;
        }

        initRevealAnimations();
        initBackgroundKanjiAnimation();
        initMenuHorizontalScroll();

        const refreshTimeout = window.setTimeout(() => {
          ScrollTrigger.refresh();
        }, 200);

        timeouts.push(refreshTimeout);
      }, 100);

      timeouts.push(delayedInit);
    };

    initAnimations();

    return () => {
      destroyed = true;
      timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
      cleanupFns.forEach((cleanup) => cleanup());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};

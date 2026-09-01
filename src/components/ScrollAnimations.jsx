'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Reveal-on-scroll animations (GSAP + ScrollTrigger) — the replacement for AOS.
 *
 * Any element tagged with `data-animate` fades and slides into view the first
 * time it enters the viewport. An optional `data-animate-delay` (milliseconds)
 * staggers the reveal.
 *
 * The initial hidden state is set in CSS, scoped to `html.js-anim` (added below)
 * and to `prefers-reduced-motion: no-preference`, so the page is fully visible
 * when JS is unavailable and for readers who opt out of motion.
 *
 * This component lives in the root layout and does not remount between routes,
 * so the setup is keyed on `usePathname()` and re-scans the DOM on every client
 * navigation — otherwise a new page's elements would stay hidden by the CSS
 * above with no ScrollTrigger to reveal them.
 */
export const ScrollAnimations = () => {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add('js-anim');

    const elements = gsap.utils.toArray('[data-animate]');
    if (elements.length === 0) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduceMotion) {
      // CSS already leaves these visible for reduced motion; make sure any
      // inline state from a previous route is cleared too.
      gsap.set(elements, { clearProps: 'all' });
      return;
    }

    const tweens = elements.map((el) => {
      const delay = Number(el.dataset.animateDelay || 0) / 1000;
      return gsap.to(el, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      });
    });

    // ScrollTrigger measures start positions when the tweens are created — on
    // first load that is mid-hydration, before fonts and images settle — so
    // re-measure once the layout is stable.
    const refresh = () => ScrollTrigger.refresh();
    const raf = requestAnimationFrame(refresh);
    window.addEventListener('load', refresh);
    document.fonts?.ready.then(refresh).catch(() => {});

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('load', refresh);
      for (const t of tweens) {
        t.scrollTrigger?.kill();
        t.kill();
      }
    };
  }, [pathname]);

  return null;
};

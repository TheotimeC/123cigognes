'use client';

import { useEffect, useCallback } from 'react';

export default function ScrollReveal() {
  const handleIntersection = useCallback((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        entry.target.setAttribute('data-revealed', 'true');
        observer.unobserve(entry.target);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    });

    // Observe all current .reveal elements that haven't been revealed yet
    const observe = () => {
      document.querySelectorAll('.reveal:not([data-revealed])').forEach((el) => {
        observer.observe(el);
      });
    };

    observe();

    // Use MutationObserver to catch dynamically added .reveal elements
    const mutationObserver = new MutationObserver(() => {
      observe();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [handleIntersection]);

  return null;
}

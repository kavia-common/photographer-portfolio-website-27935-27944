import { useEffect } from 'react';

/**
 * PUBLIC_INTERFACE
 * useAppInteractions
 * Hook to initialize page-level interactions adapted from assets/app.js:
 * - Smooth scroll for in-page anchor links
 * - Add 'user-tabbing' class on Tab key for focus-visible styling
 * - Pressed feedback on .btn and .nav-item elements
 */
export function useAppInteractions() {
  useEffect(() => {
    // Smooth scroll for anchors with href starting with '#'
    const handleDocClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    // On first Tab press, add class for focus styles
    const handleKeydown = (e) => {
      if (e.key === 'Tab') {
        document.documentElement.classList.add('user-tabbing');
      }
    };

    // Pressed feedback handlers
    const addPressHandlers = (el) => {
      const down = () => el.classList.add('pressed');
      const up = () => el.classList.remove('pressed');

      el.addEventListener('mousedown', down);
      el.addEventListener('mouseup', up);
      el.addEventListener('mouseleave', up);
      el.addEventListener('touchstart', down, { passive: true });
      el.addEventListener('touchend', up);

      // Return cleanup
      return () => {
        el.removeEventListener('mousedown', down);
        el.removeEventListener('mouseup', up);
        el.removeEventListener('mouseleave', up);
        el.removeEventListener('touchstart', down);
        el.removeEventListener('touchend', up);
      };
    };

    document.addEventListener('click', handleDocClick);
    document.addEventListener('keydown', handleKeydown);

    // Initialize pressed handlers for current elements
    const interactiveEls = Array.from(document.querySelectorAll('.btn, .nav-item'));
    const cleanups = interactiveEls.map(addPressHandlers);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleDocClick);
      document.removeEventListener('keydown', handleKeydown);
      cleanups.forEach((fn) => typeof fn === 'function' && fn());
    };
  }, []);
}

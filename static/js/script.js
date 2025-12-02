/**
 * Portfolio Website JavaScript
 * Handles: Smooth scrolling, fade-in animations, burger menu
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  initBurgerMenu();
  initScrollAnimations();
  initSmoothScroll();
});

/**
 * Initialize burger menu functionality for mobile
 */
function initBurgerMenu() {
  const burgerBtn = document.querySelector('.burger-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

  if (!burgerBtn || !mobileMenu) return;

  // Toggle menu on burger button click
  burgerBtn.addEventListener('click', function() {
    const isOpen = mobileMenu.classList.contains('open');
    toggleMenu(!isOpen);
  });

  // Close menu when clicking overlay
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', function() {
      toggleMenu(false);
    });
  }

  // Close menu when clicking a link
  mobileMenuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      toggleMenu(false);
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      toggleMenu(false);
    }
  });

  function toggleMenu(open) {
    if (open) {
      mobileMenu.classList.add('open');
      if (mobileMenuOverlay) mobileMenuOverlay.classList.add('open');
      burgerBtn.classList.add('open');
      burgerBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.remove('open');
      if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('open');
      burgerBtn.classList.remove('open');
      burgerBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }
}

/**
 * Initialize scroll animations using Intersection Observer
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in');

  if (!animatedElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionally stop observing after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(function(el) {
    observer.observe(el);
  });
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

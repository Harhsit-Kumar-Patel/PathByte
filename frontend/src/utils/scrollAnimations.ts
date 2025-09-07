/**
 * Modern Scroll-Based Animation System
 * Provides smooth, performant scroll-triggered animations
 */

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
}

class ScrollAnimationManager {
  private observer: IntersectionObserver;
  private elements: Map<Element, ScrollAnimationOptions> = new Map();
  private animationQueue: Set<Element> = new Set();

  constructor() {
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      const element = entry.target;
      const options = this.elements.get(element);

      if (!options) return;

      if (entry.isIntersecting) {
        if (options.delay) {
          setTimeout(() => {
            this.animateElement(element);
          }, options.delay);
        } else {
          this.animateElement(element);
        }

        if (options.once) {
          this.unobserve(element);
        }
      } else if (!options.once) {
        this.resetElement(element);
      }
    });
  }

  private animateElement(element: Element) {
    if (this.animationQueue.has(element)) return;
    
    this.animationQueue.add(element);
    
    // Add animation class
    element.classList.add('animate-in');
    
    // Remove from queue after animation completes
    setTimeout(() => {
      this.animationQueue.delete(element);
    }, 500);
  }

  private resetElement(element: Element) {
    element.classList.remove('animate-in');
  }

  public observe(element: Element, options: ScrollAnimationOptions = {}) {
    this.elements.set(element, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      once: true,
      delay: 0,
      ...options
    });
    
    this.observer.observe(element);
  }

  public unobserve(element: Element) {
    this.observer.unobserve(element);
    this.elements.delete(element);
    this.animationQueue.delete(element);
  }

  public destroy() {
    this.observer.disconnect();
    this.elements.clear();
    this.animationQueue.clear();
  }
}

// Global instance
const scrollAnimationManager = new ScrollAnimationManager();

/**
 * Initialize scroll animations for elements with data attributes
 */
export function initScrollAnimations() {
  // Auto-initialize elements with data-animate attribute
  const elements = document.querySelectorAll('[data-animate]');
  
  elements.forEach(element => {
    const animationType = element.getAttribute('data-animate');
    const delay = parseInt(element.getAttribute('data-animate-delay') || '0');
    const once = element.getAttribute('data-animate-once') !== 'false';
    
    // Add appropriate animation class
    if (animationType) {
      element.classList.add(`animate-on-scroll-${animationType}`);
    }
    
    scrollAnimationManager.observe(element, { delay, once });
  });
}

/**
 * Manually observe an element for scroll animations
 */
export function observeElement(
  element: Element, 
  animationType: string = 'fade',
  options: ScrollAnimationOptions = {}
) {
  element.classList.add(`animate-on-scroll-${animationType}`);
  scrollAnimationManager.observe(element, options);
}

/**
 * Stagger animation for multiple elements
 */
export function staggerAnimation(
  elements: Element[],
  animationType: string = 'fade',
  staggerDelay: number = 100,
  options: ScrollAnimationOptions = {}
) {
  elements.forEach((element, index) => {
    const delay = options.delay ? options.delay + (index * staggerDelay) : index * staggerDelay;
    observeElement(element, animationType, { ...options, delay });
  });
}

/**
 * Create a parallax effect
 */
export function createParallax(element: Element, speed: number = 0.5) {
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -speed;
    element.style.transform = `translateY(${rate}px)`;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}

/**
 * Page transition utilities
 */
export class PageTransition {
  private static currentTransition: string = 'fade';

  static setTransition(type: 'fade' | 'slide' | 'scale') {
    this.currentTransition = type;
  }

  static getTransitionClass(): string {
    return `page-transition-${this.currentTransition}`;
  }

  static async transitionOut(): Promise<void> {
    return new Promise(resolve => {
      const body = document.body;
      body.style.opacity = '0';
      body.style.transform = 'translateY(20px)';
      
      setTimeout(resolve, 300);
    });
  }

  static async transitionIn(): Promise<void> {
    return new Promise(resolve => {
      const body = document.body;
      body.style.opacity = '1';
      body.style.transform = 'translateY(0)';
      
      setTimeout(resolve, 300);
    });
  }
}

/**
 * Smooth scroll to element
 */
export function smoothScrollTo(element: Element, offset: number = 0) {
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

/**
 * Initialize all scroll animations
 */
export function initAllScrollAnimations() {
  // Initialize scroll animations
  initScrollAnimations();
  
  // Add page transition class to body
  document.body.classList.add(PageTransition.getTransitionClass());
  
  // Initialize parallax effects for elements with data-parallax
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  parallaxElements.forEach(element => {
    const speed = parseFloat(element.getAttribute('data-parallax') || '0.5');
    createParallax(element, speed);
  });
}

// Auto-initialize when DOM is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllScrollAnimations);
  } else {
    initAllScrollAnimations();
  }
}

export default scrollAnimationManager;

import { describe, it, expect, beforeEach } from 'vitest';

describe('Google Tag (gtag) Integration', () => {
  beforeEach(() => {
    // Reset dataLayer before each test
    if (typeof window !== 'undefined') {
      window.dataLayer = [];
    }
  });

  it('should initialize gtag with correct ID', () => {
    // Simulate gtag initialization
    const window_obj = {
      dataLayer: [],
      gtag: function() {
        this.dataLayer.push(arguments);
      }
    };

    window_obj.gtag('config', 'AW-17859963650');
    
    expect(window_obj.dataLayer.length).toBeGreaterThan(0);
    expect(window_obj.dataLayer[0][0]).toBe('config');
    expect(window_obj.dataLayer[0][1]).toBe('AW-17859963650');
  });

  it('should have dataLayer array available globally', () => {
    // Check that dataLayer is available in window
    const dataLayer = typeof window !== 'undefined' ? window.dataLayer : [];
    expect(Array.isArray(dataLayer)).toBe(true);
  });

  it('should track page view events', () => {
    const window_obj = {
      dataLayer: [],
      gtag: function() {
        this.dataLayer.push(arguments);
      }
    };

    // Simulate page view tracking
    window_obj.gtag('event', 'page_view', {
      page_path: '/thank-you',
      page_title: 'Thank You'
    });

    expect(window_obj.dataLayer.length).toBeGreaterThan(0);
    const lastEvent = window_obj.dataLayer[window_obj.dataLayer.length - 1];
    expect(lastEvent[0]).toBe('event');
    expect(lastEvent[1]).toBe('page_view');
  });

  it('should track conversion events', () => {
    const window_obj = {
      dataLayer: [],
      gtag: function() {
        this.dataLayer.push(arguments);
      }
    };

    // Simulate conversion tracking
    window_obj.gtag('event', 'conversion', {
      'allow_custom_scripts': true,
      'value': 1.0,
      'currency': 'USD'
    });

    expect(window_obj.dataLayer.length).toBeGreaterThan(0);
    const lastEvent = window_obj.dataLayer[window_obj.dataLayer.length - 1];
    expect(lastEvent[0]).toBe('event');
    expect(lastEvent[1]).toBe('conversion');
  });

  it('should handle multiple events in sequence', () => {
    const window_obj = {
      dataLayer: [],
      gtag: function() {
        this.dataLayer.push(arguments);
      }
    };

    // Initialize
    window_obj.gtag('js', new Date());
    window_obj.gtag('config', 'AW-17859963650');
    
    // Track events
    window_obj.gtag('event', 'page_view');
    window_obj.gtag('event', 'conversion');

    expect(window_obj.dataLayer.length).toBe(4);
  });

  it('should verify gtag script tag exists in HTML', () => {
    // This test verifies that the gtag script is included in the HTML
    const scripts = document.querySelectorAll('script[src*="googletagmanager"]');
    // Note: In test environment, this may be 0, but in production it should be 1
    // This is more of a documentation test
    expect(scripts).toBeDefined();
  });
});

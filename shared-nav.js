/* ============================================================
   REHABIST — SHARED NAV & FOOTER
   Tüm alt sayfalara ortak nav + mobile menu + footer enjekte eder.
   Kullanım: <div id="rb-nav-mount"></div> ve <div id="rb-footer-mount"></div>
   placeholder'ları olan herhangi bir sayfada.
   ============================================================ */

(function() {
  'use strict';

  var WHATSAPP_URL = 'https://wa.me/905345840913?text=Merhaba%2C%20randevu%20almak%20istiyorum.';

  // ============== NAV HTML ==============
  var navHTML =
    '<nav class="rb-nav" id="rbNav">' +
      '<div class="rb-nav-inner">' +
        '<a href="/" class="rb-logo">' +
          '<span class="rb-logo-mark">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20"/></svg>' +
          '</span>' +
          'Rehabist' +
        '</a>' +
        '<div class="rb-nav-links">' +
          '<a href="/#nasil-calisir" class="rb-nav-link">Nasıl Çalışır</a>' +
          '<a href="/#araclar" class="rb-nav-link">Araçlar</a>' +
          '<a href="/blog.html" class="rb-nav-link">Blog</a>' +
          '<a href="/#hakkinda" class="rb-nav-link">Hakkında</a>' +
        '</div>' +
        '<div style="display:flex; align-items:center; gap:10px;">' +
          '<a href="' + WHATSAPP_URL + '" target="_blank" rel="noopener" class="rb-nav-cta">Randevu</a>' +
          '<button type="button" class="rb-menu-btn" id="rbMenuBtn" aria-label="Menü">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</nav>';

  // ============== MOBILE MENU HTML ==============
  var mobileHTML =
    '<div class="rb-mobile-menu" id="rbMobileMenu">' +
      '<button type="button" class="rb-mobile-close" id="rbMobileClose" aria-label="Kapat">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>' +
      '</button>' +
      '<div class="rb-mobile-section-label">Dijital Araçlar</div>' +
      '<a href="/harita.html" class="rb-mobile-link tool-link">' +
        '<span class="rb-mobile-link-icon" style="color:var(--red-700); background:#fee2e2">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>' +
        '</span>Ağrı Haritası' +
      '</a>' +
      '<a href="/postur-analizi.html" class="rb-mobile-link tool-link">' +
        '<span class="rb-mobile-link-icon">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4" r="2"/><path d="M12 6v16M8 10l4-4 4 4"/></svg>' +
        '</span>Postür Analizi' +
      '</a>' +
      '<a href="/cocuk-postur-analizi.html" class="rb-mobile-link tool-link">' +
        '<span class="rb-mobile-link-icon" style="color:#a16207; background:#fef3c7">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-12a4 4 0 11-8 0 4 4 0 018 0zm6 4a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' +
        '</span>Çocuk Postür Analizi' +
      '</a>' +
      '<a href="/avatar-kurucu.html" class="rb-mobile-link tool-link">' +
        '<span class="rb-mobile-link-icon" style="color:#7c3aed; background:#ede9fe">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>' +
        '</span>Avatarımı Oluştur' +
      '</a>' +
      '<a href="/asistan.html" class="rb-mobile-link tool-link">' +
        '<span class="rb-mobile-link-icon" style="color:#6d28d9; background:#ede9fe">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>' +
        '</span>AI Asistan' +
      '</a>' +
      '<a href="/panel.html" class="rb-mobile-link tool-link">' +
        '<span class="rb-mobile-link-icon" style="color:var(--green-600); background:var(--green-50)">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>' +
        '</span>Panelim' +
      '</a>' +
      '<a href="/vucut-yasi.html" class="rb-mobile-link tool-link">' +
        '<span class="rb-mobile-link-icon" style="color:#a16207; background:#fef3c7">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' +
        '</span>Vücut Yaşı' +
      '</a>' +
      '<a href="/check-up.html" class="rb-mobile-link tool-link">' +
        '<span class="rb-mobile-link-icon" style="color:#0e7490; background:#cffafe">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>' +
        '</span>Check-up' +
      '</a>' +
      '<div class="rb-mobile-section-label">Menü</div>' +
      '<a href="/" class="rb-mobile-link">Ana Sayfa</a>' +
      '<a href="/#nasil-calisir" class="rb-mobile-link">Nasıl Çalışır</a>' +
      '<a href="/#araclar" class="rb-mobile-link">Araçlar</a>' +
      '<a href="/blog.html" class="rb-mobile-link">Blog</a>' +
      '<a href="/#hakkinda" class="rb-mobile-link">Hakkında</a>' +
      '<a href="' + WHATSAPP_URL + '" target="_blank" rel="noopener" class="rb-mobile-cta">' +
        '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.78 11.78 0 0012.04 0C5.46 0 .1 5.36.1 11.94c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.9 11.9 0 005.76 1.47c6.58 0 11.94-5.36 11.94-11.94 0-3.19-1.24-6.19-3.46-8.41z"/></svg>' +
        'WhatsApp\'tan Randevu' +
      '</a>' +
    '</div>';

  // ============== FOOTER HTML ==============
  var footerHTML =
    '<footer class="rb-footer">' +
      '<div class="rb-footer-inner">' +
        '<div class="rb-footer-left">' +
          '<span class="rb-footer-logo-mark">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20"/></svg>' +
          '</span>' +
          '<span>Rehabist © 2026 · Fzt. Umut Yalçın</span>' +
        '</div>' +
        '<div>Aydın · Efeler · 0534 584 0913</div>' +
      '</div>' +
    '</footer>';

  // ============== INJECT ==============
  function inject() {
    var navMount = document.getElementById('rb-nav-mount');
    if (navMount) {
      navMount.outerHTML = navHTML + mobileHTML;
    }
    var footerMount = document.getElementById('rb-footer-mount');
    if (footerMount) {
      footerMount.outerHTML = footerHTML;
    }
    bindEvents();
  }

  // ============== EVENTS ==============
  function bindEvents() {
    var nav = document.getElementById('rbNav');
    if (nav) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 40) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
      }, { passive: true });
    }

    var menuBtn = document.getElementById('rbMenuBtn');
    var menuClose = document.getElementById('rbMobileClose');
    var menu = document.getElementById('rbMobileMenu');

    function open() {
      if (!menu) return;
      menu.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      if (!menu) return;
      menu.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (menuBtn) menuBtn.addEventListener('click', open);
    if (menuClose) menuClose.addEventListener('click', close);

    if (menu) {
      var menuLinks = menu.querySelectorAll('a');
      for (var i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', close);
      }
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && menu && menu.classList.contains('open')) close();
    });
  }

  // ============== INIT ==============
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();

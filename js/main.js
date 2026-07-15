
const translations = {
  en: {
    nav_home: 'Home',
    nav_password: 'Password Gen',
    nav_hash: 'Hash Tool',
    nav_blog: 'Blog',
    nav_toolkit: 'Security Hub',
    nav_contact: 'Contact',
    footer_desc: 'Your personal cybersecurity toolkit — built with passion for digital security and privacy.',
    footer_tools: 'Tools',
    footer_pages: 'Pages',
    footer_copy: '© 2026 CyberShield. All rights reserved.',
    footer_made: 'Created by Mustafa Rashid Hamid',
    // home
    hero_badge: 'Cybersecurity Toolkit',
    hero_title_1: 'Secure Your',
    hero_title_2: 'Digital World',
    hero_subtitle: 'A complete suite of cybersecurity tools — password generator, hash analyzer, and educational security resources. All in one place, all free.',
    hero_btn1: 'Explore Tools',
    hero_btn2: 'Read Blog',
    stat1: 'Algorithms',
    stat2: 'Free Tools',
    stat3: 'Languages',
    features_badge: 'What We Offer',
    features_title: 'Security Tools & Resources',
    feat1_title: 'Password Generator',
    feat1_desc: 'Generate ultra-secure passwords with custom complexity, length, and character sets.',
    feat2_title: 'Hash Generator',
    feat2_desc: 'Compute MD5, SHA-1, SHA-256, SHA-512 hashes for any text instantly.',
    feat_toolkit_title: 'Security Hub',
    feat_toolkit_desc: 'Interactive Dictionary, Crypto Lab, Subnet Calculator, Quiz, Library and live CISA alerts.',
    feat3_title: 'Security Blog',
    feat3_desc: 'Educational articles on cybersecurity, privacy, and digital safety best practices.',
    feat4_title: 'Password Strength',
    feat4_desc: 'Analyze your password strength and get actionable security recommendations.',
    feat5_title: 'Open Source',
    feat5_desc: 'All tools run client-side. Your data never leaves your browser.',
    feat6_title: 'Multi-language',
    feat6_desc: 'Full Arabic and English support for a global cybersecurity community.',
  },
  ar: {
    nav_home: 'الرئيسية',
    nav_password: 'مولد الكلمات',
    nav_hash: 'أداة الهاش',
    nav_blog: 'المدونة',
    nav_toolkit: 'الأدوات الأمنية',
    nav_contact: 'تواصل معي',
    footer_desc: 'مجموعة أدواتك الشخصية للأمن السيبراني — مبنية بشغف للأمن الرقمي والخصوصية.',
    footer_tools: 'الأدوات',
    footer_pages: 'الصفحات',
    footer_copy: '© 2026 سايبر شيلد. جميع الحقوق محفوظة.',
    footer_made: 'تم الإنشاء بواسطة مصطفى رشيد حميد',
    // home
    hero_badge: 'مجموعة أدوات الأمن السيبراني',
    hero_title_1: 'احمِ فضاءك الرقمي',
    hero_title_2: 'بأدوات أمان متطورة',
    hero_subtitle: 'مجموعة متكاملة من أدوات الأمن السيبراني — مولد كلمات المرور، محلل الهاش، ومصادر تعليمية أمنية. كل شيء في مكان واحد، وكله مجاناً.',
    hero_btn1: 'استكشف الأدوات',
    hero_btn2: 'اقرأ المدونة',
    stat1: 'خوارزمية',
    stat2: 'أداة مجانية',
    stat3: 'لغات',
    features_badge: 'ما نقدمه',
    features_title: 'أدوات الأمان والموارد',
    feat1_title: 'مولد كلمات المرور',
    feat1_desc: 'أنشئ كلمات مرور فائقة الأمان بتعقيد مخصص وطول ومجموعات أحرف متنوعة.',
    feat2_title: 'مولد الهاش',
    feat2_desc: 'احسب هاش MD5 وSHA-1 وSHA-256 وSHA-512 لأي نص بشكل فوري.',
    feat_toolkit_title: 'الأدوات الأمنية الشاملة',
    feat_toolkit_desc: 'قاموس تفاعلي، مختبر التشفير، حاسبة الشبكات، اختبارات أمنية، مكتبة كتب مجانية وتنبيهات مباشرة.',
    feat3_title: 'مدونة الأمان',
    feat3_desc: 'مقالات تعليمية حول الأمن السيبراني والخصوصية وأفضل ممارسات السلامة الرقمية.',
    feat4_title: 'قوة كلمة المرور',
    feat4_desc: 'حلل قوة كلمة مرورك واحصل على توصيات أمنية قابلة للتنفيذ.',
    feat5_title: 'مفتوح المصدر',
    feat5_desc: 'جميع الأدوات تعمل من جانب العميل. بياناتك لا تغادر متصفحك أبدًا.',
    feat6_title: 'متعدد اللغات',
    feat6_desc: 'دعم كامل للعربية والإنجليزية لمجتمع الأمن السيبراني العالمي.',
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.body.classList.toggle('lang-ar', lang === 'ar');
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const t = translations[lang];
    if (t && t[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
        if (el.hasAttribute('data-text')) {
          el.setAttribute('data-text', t[key]);
        }
      }
    }
  });
  // Dispatch custom event for page-specific handlers
  document.dispatchEvent(new CustomEvent('langChange', { detail: { lang } }));
}

// ─── MATRIX CANVAS ─────────────────────────────────
function initMatrix() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ!@#$%^&*ABCDEFabcdef0123456789';
  const fontSize = 14;
  const cols = Math.floor(canvas.width / fontSize);
  const drops = Array(cols).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(5, 10, 15, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff88';
    ctx.font = `${fontSize}px monospace`;
    drops.forEach((y, i) => {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, y * fontSize);
      if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }

  setInterval(draw, 50);

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ─── NAVBAR ────────────────────────────────────────
function initNavbar() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
    document.addEventListener('click', e => {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
      }
    });
  }

  // Active link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ─── COPY TO CLIPBOARD ─────────────────────────────
function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '✅ ' + (currentLang === 'ar' ? 'تم النسخ' : 'Copied!');
      btn.classList.add('copied');
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.classList.remove('copied');
      }, 2000);
    }
  });
}

// ─── SCAN LINE ─────────────────────────────────────
function addScanLine() {
  const el = document.createElement('div');
  el.className = 'scan-line';
  document.body.appendChild(el);
}

// ─── COUNTER ANIMATION ─────────────────────────────
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start);
    }
  }, 16);
}

// ─── INTERSECTION OBSERVER ─────────────────────────
function initObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Counter animation
        if (entry.target.dataset.count) {
          animateCounter(entry.target, parseInt(entry.target.dataset.count));
        }
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-in, [data-count]').forEach(el => observer.observe(el));
}

// ─── INIT ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initMatrix();
  addScanLine();
  initNavbar();
  initObserver();
  setLang(currentLang);

  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
});

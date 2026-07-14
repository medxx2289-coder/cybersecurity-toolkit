const blogPosts = [
  {
    id: 1,
    tag: { en: 'Passwords', ar: 'كلمات المرور' },
    tagClass: 'tag-green',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80',
    date: '2026-07-10',
    title: { en: '10 Rules for Creating Unbreakable Passwords', ar: '10 قواعد لإنشاء كلمات مرور غير قابلة للاختراق' },
    excerpt: {
      en: 'Learn the essential rules that separate weak passwords from truly secure ones. From length to complexity, master password creation.',
      ar: 'تعلّم القواعد الأساسية التي تفصل كلمات المرور الضعيفة عن القوية حقاً. من الطول إلى التعقيد، أتقن إنشاء كلمات المرور.'
    },
    content: {
      en: `<h3>Why Strong Passwords Matter</h3>
<p>Over 80% of data breaches involve weak or stolen passwords. A strong password is your first and most important line of defense against hackers.</p>
<h3>The 10 Golden Rules</h3>
<ul>
<li><strong>Use 16+ characters</strong> — longer passwords are exponentially harder to crack.</li>
<li><strong>Mix character types</strong> — combine uppercase, lowercase, numbers, and symbols.</li>
<li><strong>Avoid dictionary words</strong> — hackers use wordlists to crack common words instantly.</li>
<li><strong>Never reuse passwords</strong> — one breach can compromise all your accounts.</li>
<li><strong>Use a password manager</strong> — let software remember complex passwords for you.</li>
<li><strong>Enable 2FA</strong> — add a second layer of protection beyond your password.</li>
<li><strong>Avoid personal info</strong> — don't use birthdays, names, or pet names.</li>
<li><strong>Change compromised passwords immediately</strong> — check haveibeenpwned.com regularly.</li>
<li><strong>Use passphrases</strong> — "correct-horse-battery-staple" is stronger than "P@ssw0rd!".</li>
<li><strong>Test your passwords</strong> — use our strength checker tool to verify security.</li>
</ul>
<div class="tip">💡 Tip: Use our Password Generator tool to create ultra-secure passwords instantly!</div>`,
      ar: `<h3>لماذا تهم كلمات المرور القوية؟</h3>
<p>أكثر من 80% من خروقات البيانات تتضمن كلمات مرور ضعيفة أو مسروقة. كلمة المرور القوية هي خط دفاعك الأول والأهم ضد المخترقين.</p>
<h3>القواعد الذهبية العشر</h3>
<ul>
<li><strong>استخدم 16 حرفاً أو أكثر</strong> — كلمات المرور الأطول أصعب بكثير في الاختراق.</li>
<li><strong>امزج أنواع الأحرف</strong> — اجمع بين الكبيرة والصغيرة والأرقام والرموز.</li>
<li><strong>تجنب كلمات القاموس</strong> — المخترقون يستخدمون قوائم الكلمات لاختراقها فوراً.</li>
<li><strong>لا تعد استخدام كلمات المرور</strong> — خرق واحد يمكن أن يعرض كل حساباتك للخطر.</li>
<li><strong>استخدم مدير كلمات المرور</strong> — دع البرنامج يتذكر كلمات المرور المعقدة.</li>
<li><strong>فعّل المصادقة الثنائية</strong> — أضف طبقة حماية إضافية.</li>
<li><strong>تجنب المعلومات الشخصية</strong> — لا تستخدم تواريخ الميلاد أو الأسماء.</li>
<li><strong>غيّر كلمات المرور المخترقة فوراً</strong> — تحقق بانتظام.</li>
<li><strong>استخدم عبارات المرور</strong> — الجمل أقوى من الكلمات القصيرة المعقدة.</li>
<li><strong>اختبر كلمات مرورك</strong> — استخدم أداة فحص القوة لدينا.</li>
</ul>
<div class="tip">💡 نصيحة: استخدم أداة مولد كلمات المرور لدينا لإنشاء كلمات مرور فائقة الأمان فوراً!</div>`
    }
  },
  {
    id: 2,
    tag: { en: 'Phishing', ar: 'التصيّد' },
    tagClass: 'tag-red',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    date: '2026-07-05',
    title: { en: 'How to Recognize and Avoid Phishing Attacks', ar: 'كيف تتعرف على هجمات التصيّد الاحتيالي وتتجنبها' },
    excerpt: {
      en: 'Phishing remains the #1 attack vector. Learn to identify fake emails, malicious links, and social engineering tricks.',
      ar: 'التصيّد الاحتيالي لا يزال الهجوم الأول. تعلّم التعرف على الرسائل المزيفة والروابط الخبيثة وحيل الهندسة الاجتماعية.'
    },
    content: {
      en: `<h3>What is Phishing?</h3>
<p>Phishing is a cyberattack where criminals impersonate trusted entities to trick you into revealing sensitive information like passwords, credit card numbers, or personal data.</p>
<h3>Red Flags to Watch For</h3>
<ul>
<li><strong>Urgent language</strong> — "Your account will be suspended!" creates panic.</li>
<li><strong>Suspicious sender address</strong> — check the actual email domain carefully.</li>
<li><strong>Generic greetings</strong> — "Dear Customer" instead of your actual name.</li>
<li><strong>Mismatched links</strong> — hover over links before clicking to see the real URL.</li>
<li><strong>Attachments from strangers</strong> — never open unexpected attachments.</li>
<li><strong>Too good to be true</strong> — "You've won $1 million!" is always fake.</li>
</ul>
<h3>How to Protect Yourself</h3>
<ul>
<li>Always verify the sender's email address carefully.</li>
<li>Never click links in suspicious emails — go directly to the website.</li>
<li>Enable two-factor authentication on all important accounts.</li>
<li>Keep your browser and antivirus software updated.</li>
<li>Report phishing emails to your email provider.</li>
</ul>
<div class="tip">🛡️ Remember: Legitimate companies will NEVER ask for your password via email.</div>`,
      ar: `<h3>ما هو التصيّد الاحتيالي؟</h3>
<p>التصيّد الاحتيالي هو هجوم سيبراني يقوم فيه المجرمون بانتحال هوية جهات موثوقة لخداعك للكشف عن معلومات حساسة مثل كلمات المرور وأرقام البطاقات.</p>
<h3>علامات التحذير</h3>
<ul>
<li><strong>لغة الاستعجال</strong> — "سيتم تعليق حسابك!" تخلق حالة من الذعر.</li>
<li><strong>عنوان مرسل مشبوه</strong> — تحقق من نطاق البريد الفعلي بعناية.</li>
<li><strong>تحيات عامة</strong> — "عزيزي العميل" بدلاً من اسمك الحقيقي.</li>
<li><strong>روابط غير متطابقة</strong> — مرر المؤشر فوق الروابط قبل النقر.</li>
<li><strong>مرفقات من غرباء</strong> — لا تفتح المرفقات غير المتوقعة أبداً.</li>
<li><strong>أمور خيالية</strong> — "لقد ربحت مليون دولار!" دائماً مزيفة.</li>
</ul>
<h3>كيف تحمي نفسك</h3>
<ul>
<li>تحقق دائماً من عنوان البريد الإلكتروني للمرسل.</li>
<li>لا تنقر على روابط في رسائل مشبوهة — اذهب مباشرة للموقع.</li>
<li>فعّل المصادقة الثنائية على جميع الحسابات المهمة.</li>
<li>حافظ على تحديث متصفحك وبرنامج مكافحة الفيروسات.</li>
<li>أبلغ عن رسائل التصيّد لمزود بريدك الإلكتروني.</li>
</ul>
<div class="tip">🛡️ تذكر: الشركات المشروعة لن تطلب كلمة مرورك عبر البريد الإلكتروني أبداً.</div>`
    }
  },
  {
    id: 3,
    tag: { en: 'Privacy', ar: 'الخصوصية' },
    tagClass: 'tag-purple',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    date: '2026-06-28',
    title: { en: 'Ultimate Guide to Online Privacy in 2026', ar: 'الدليل الشامل للخصوصية الرقمية في 2026' },
    excerpt: {
      en: 'Your digital footprint is larger than you think. Discover practical steps to reclaim your online privacy and reduce data exposure.',
      ar: 'بصمتك الرقمية أكبر مما تعتقد. اكتشف خطوات عملية لاستعادة خصوصيتك على الإنترنت وتقليل تعرض بياناتك.'
    },
    content: {
      en: `<h3>Your Data Is Everywhere</h3>
<p>Every website you visit, every app you use, and every search you make creates data. Companies collect, analyze, and sell this information. Taking control of your privacy is essential in 2026.</p>
<h3>Essential Privacy Steps</h3>
<ul>
<li><strong>Use a VPN</strong> — encrypt your internet traffic and hide your IP address.</li>
<li><strong>Switch to privacy-focused browsers</strong> — Firefox, Brave, or Tor for sensitive browsing.</li>
<li><strong>Use encrypted messaging</strong> — Signal or Element for private conversations.</li>
<li><strong>Review app permissions</strong> — remove unnecessary access to camera, mic, and location.</li>
<li><strong>Use email aliases</strong> — don't give your real email to every service.</li>
<li><strong>Enable DNS-over-HTTPS</strong> — prevent ISPs from tracking your browsing.</li>
</ul>
<div class="tip">🔒 Start with one step at a time. Every improvement to your privacy matters!</div>`,
      ar: `<h3>بياناتك في كل مكان</h3>
<p>كل موقع تزوره وكل تطبيق تستخدمه وكل بحث تقوم به ينشئ بيانات. الشركات تجمع هذه المعلومات وتحللها وتبيعها. التحكم في خصوصيتك أمر ضروري في 2026.</p>
<h3>خطوات الخصوصية الأساسية</h3>
<ul>
<li><strong>استخدم VPN</strong> — شفّر حركة الإنترنت وأخفِ عنوان IP الخاص بك.</li>
<li><strong>انتقل لمتصفحات تركز على الخصوصية</strong> — Firefox أو Brave أو Tor.</li>
<li><strong>استخدم المراسلة المشفرة</strong> — Signal أو Element للمحادثات الخاصة.</li>
<li><strong>راجع أذونات التطبيقات</strong> — أزل الوصول غير الضروري للكاميرا والميكروفون والموقع.</li>
<li><strong>استخدم أسماء بريد مستعارة</strong> — لا تعطِ بريدك الحقيقي لكل خدمة.</li>
<li><strong>فعّل DNS-over-HTTPS</strong> — امنع مزودي الخدمة من تتبع تصفحك.</li>
</ul>
<div class="tip">🔒 ابدأ بخطوة واحدة في كل مرة. كل تحسين لخصوصيتك مهم!</div>`
    }
  },
  {
    id: 4,
    tag: { en: 'Hashing', ar: 'الهاش' },
    tagClass: 'tag-blue',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    date: '2026-06-20',
    title: { en: 'Understanding Hash Functions: MD5 vs SHA Family', ar: 'فهم دوال الهاش: MD5 مقابل عائلة SHA' },
    excerpt: {
      en: 'What makes hash functions essential for security? Learn the differences between MD5, SHA-1, SHA-256, and when to use each.',
      ar: 'ما الذي يجعل دوال الهاش أساسية للأمان؟ تعرف على الفرق بين MD5 وSHA-1 وSHA-256 ومتى تستخدم كلاً منها.'
    },
    content: {
      en: `<h3>What Are Hash Functions?</h3>
<p>A hash function takes any input and produces a fixed-size output (the "hash" or "digest"). The same input always produces the same hash, but you can't reverse a hash back to the original input.</p>
<h3>Comparison</h3>
<ul>
<li><strong>MD5 (128-bit)</strong> — Fast but broken. Vulnerable to collision attacks. Don't use for security.</li>
<li><strong>SHA-1 (160-bit)</strong> — Deprecated. Google demonstrated a collision attack in 2017.</li>
<li><strong>SHA-256 (256-bit)</strong> — Gold standard. Used in Bitcoin, SSL certificates, and modern applications.</li>
<li><strong>SHA-512 (512-bit)</strong> — Maximum security. Used for high-security applications and file verification.</li>
</ul>
<div class="tip">🔐 Try our Hash Generator tool to see how each algorithm transforms your text!</div>`,
      ar: `<h3>ما هي دوال الهاش؟</h3>
<p>دالة الهاش تأخذ أي مدخل وتنتج مخرجاً بحجم ثابت. نفس المدخل ينتج دائماً نفس الهاش، لكن لا يمكنك عكسه للحصول على المدخل الأصلي.</p>
<h3>المقارنة</h3>
<ul>
<li><strong>MD5 (128-بت)</strong> — سريع لكنه مكسور. معرض لهجمات التصادم. لا تستخدمه للأمان.</li>
<li><strong>SHA-1 (160-بت)</strong> — مهمل. أثبتت Google هجوم تصادم عليه في 2017.</li>
<li><strong>SHA-256 (256-بت)</strong> — المعيار الذهبي. يُستخدم في Bitcoin وشهادات SSL.</li>
<li><strong>SHA-512 (512-بت)</strong> — أقصى أمان. يُستخدم للتطبيقات عالية الأمان والتحقق من الملفات.</li>
</ul>
<div class="tip">🔐 جرّب أداة مولد الهاش لدينا لرى كيف تحوّل كل خوارزمية نصك!</div>`
    }
  },
  {
    id: 5,
    tag: { en: 'Network', ar: 'الشبكات' },
    tagClass: 'tag-yellow',
    image: 'https://images.unsplash.com/photo-1551709076-89f2499d383b?auto=format&fit=crop&w=800&q=80',
    date: '2026-06-12',
    title: { en: 'Securing Your Home Wi-Fi Network', ar: 'تأمين شبكة Wi-Fi المنزلية' },
    excerpt: {
      en: 'Your home Wi-Fi is the gateway to all your devices. Learn how to lock it down and prevent unauthorized access.',
      ar: 'شبكة Wi-Fi المنزلية هي البوابة لجميع أجهزتك. تعلّم كيف تؤمنها وتمنع الوصول غير المصرح به.'
    },
    content: {
      en: `<h3>Why Wi-Fi Security Matters</h3>
<p>An unsecured Wi-Fi network lets attackers intercept your traffic, access your devices, and use your connection for malicious activities.</p>
<h3>Security Checklist</h3>
<ul>
<li><strong>Use WPA3</strong> — the latest and most secure Wi-Fi encryption standard.</li>
<li><strong>Set a strong password</strong> — at least 16 characters with mixed types.</li>
<li><strong>Change default admin credentials</strong> — default router passwords are publicly known.</li>
<li><strong>Disable WPS</strong> — it has known vulnerabilities that bypass your password.</li>
<li><strong>Update router firmware</strong> — manufacturers patch security vulnerabilities regularly.</li>
<li><strong>Create a guest network</strong> — isolate visitors from your main devices.</li>
<li><strong>Disable remote management</strong> — prevent external access to your router settings.</li>
</ul>
<div class="tip">📶 Use our Password Generator to create a strong Wi-Fi password right now!</div>`,
      ar: `<h3>لماذا يهم أمان Wi-Fi؟</h3>
<p>شبكة Wi-Fi غير المؤمنة تسمح للمهاجمين باعتراض حركة مرورك والوصول لأجهزتك واستخدام اتصالك في أنشطة خبيثة.</p>
<h3>قائمة التأمين</h3>
<ul>
<li><strong>استخدم WPA3</strong> — أحدث وأقوى معيار تشفير Wi-Fi.</li>
<li><strong>ضع كلمة مرور قوية</strong> — 16 حرفاً على الأقل مع أنواع مختلطة.</li>
<li><strong>غيّر بيانات الدخول الافتراضية</strong> — كلمات مرور الراوتر الافتراضية معروفة.</li>
<li><strong>عطّل WPS</strong> — لديه ثغرات معروفة تتجاوز كلمة مرورك.</li>
<li><strong>حدّث برنامج الراوتر</strong> — المصنعون يصلحون الثغرات بانتظام.</li>
<li><strong>أنشئ شبكة ضيوف</strong> — اعزل الزوار عن أجهزتك الرئيسية.</li>
<li><strong>عطّل الإدارة عن بُعد</strong> — امنع الوصول الخارجي لإعدادات الراوتر.</li>
</ul>
<div class="tip">📶 استخدم مولد كلمات المرور لإنشاء كلمة مرور Wi-Fi قوية الآن!</div>`
    }
  }
];

function renderBlog(lang) {
  const container = document.getElementById('blog-container');
  const readMore = lang === 'ar' ? 'اقرأ المزيد →' : 'Read More →';

  container.innerHTML = blogPosts.map(p => `
    <div class="blog-card" id="post-${p.id}">
      <div class="blog-image-wrap">
        <img class="blog-image" src="${p.image}" alt="${p.title[lang]||p.title.en}" />
      </div>
      <div class="blog-meta">
        <span class="tag ${p.tagClass}">${p.tag[lang]||p.tag.en}</span>
        <span class="blog-date">📅 ${p.date}</span>
      </div>
      <h2 class="blog-title">${p.title[lang]||p.title.en}</h2>
      <p class="blog-excerpt">${p.excerpt[lang]||p.excerpt.en}</p>
      <span class="blog-read" onclick="togglePost(${p.id})" id="toggle-${p.id}">${readMore}</span>
      <div class="blog-full" id="full-${p.id}">${p.content[lang]||p.content.en}</div>
    </div>
  `).join('');
}

function togglePost(id) {
  const full = document.getElementById('full-' + id);
  const btn = document.getElementById('toggle-' + id);
  const isOpen = full.classList.toggle('open');
  const lang = document.documentElement.lang || 'en';
  btn.textContent = isOpen
    ? (lang === 'ar' ? '← إغلاق' : '← Close')
    : (lang === 'ar' ? 'اقرأ المزيد →' : 'Read More →');
}

// i18n for blog page
const bI18n = {
  en: { badge: 'Security Blog', title: 'Cybersecurity <span>Education</span>', desc: 'Learn about digital safety, privacy best practices, and how to protect yourself online.' },
  ar: { badge: 'مدونة الأمان', title: 'تعليم <span>الأمن السيبراني</span>', desc: 'تعلّم عن السلامة الرقمية وأفضل ممارسات الخصوصية وكيفية حماية نفسك على الإنترنت.' }
};

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || 'en';
  renderBlog(lang);
});

document.addEventListener('langChange', e => {
  const t = bI18n[e.detail.lang] || bI18n.en;
  document.getElementById('b-badge').textContent = t.badge;
  document.getElementById('b-title').innerHTML = t.title;
  document.getElementById('b-desc').textContent = t.desc;
  renderBlog(e.detail.lang);
});

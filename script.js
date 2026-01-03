/**
 * ملف JavaScript الرئيسي
 * script.js
 * يحتوي على كل الوظائف التفاعلية للصفحة مع دعم الترجمة
 */

// الانتظار حتى يتم تحميل DOM بالكامل
document.addEventListener("DOMContentLoaded", function () {
  // 1. إعداد نظام الترجمة أولاً
  setupTranslationSystem();

  // 2. التحكم في القائمة المتنقلة
  setupMobileNavigation();

  // 3. التمرير السلس للروابط
  setupSmoothScrolling();

  // 4. التحكم في الجدول الزمني
  setupTimelineControls();

  // 5. إضافة تأثيرات التمرير
  setupScrollEffects();

  // 6. تحميل الصور بكسل
  setupImageLoading();

  // 7. إعداد زر الترجمة
  setupLanguageSwitcher();

  // 8. تحسينات إضافية للهواتف
  setupMobileEnhancements();
});

// ===========================================
// 1. نظام الترجمة
// ===========================================
const translations = {
  ar: {
    // Header
    "header.name": "محمود وليد خليل",
    "header.title": "مهندس حاسوب وأمن سيبراني",
    "header.location": "غزة - فلسطين",
    "header.quotes": "أقوال واقتباسات",
    "header.quote1": "توزيعة Arch Linux هي لوحةً فارغة أنت من ستقوم برسمها",
    "header.quote2": "الدنيا هم من لا هم له، اللهم لا هم إلا الآخرة.",

    // Menu
    "menu.title": "القائمة",
    "menu.profile": "الملف الشخصي",
    "menu.skills": "المهارات",
    "menu.achievements": "الإنجازات",
    "menu.experience": "الخبرات",
    "menu.projects": "المشاريع",
    "menu.youtube": "اليوتيوب",
    "menu.contact": "التواصل",

    // About Section
    "about.title": "الملف الشخصي",
    "about.content1":
      "أنا مهندس حاسوب متخصص في أمن المعلومات مع سنوات من الخبرة في تطوير البرمجيات وإدارة قواعد البيانات والسيرفرات. تخرجت بدرجة بكالوريوس في هندسة أمن المعلومات بتقدير جيد جداً من الكلية الجامعية للعلوم التطبيقية في غزة.",
    "about.content2":
      "🐧 بالمناسبة، أستخدم Arch Linux كنظام تشغيل أساسي. أستمتع بتخصيص بيئة العمل لأقصى حد. 😊 أنا مهتم بتعلم المهارات الجديدة باستمرار، وأعتقد أن الفضول هو المحرك الحقيقي للتطور في مجال التكنولوجيا. ⚡ أحب البرمجة، خاصة على بيئة Linux، حيث أجد حرية ومرونة لا تضاهى في تحويل الأفكار إلى واقع.",
    "about.content3":
      "أمتلك خبرة عملية واسعة في إدارة قواعد البيانات (Oracle, MySQL, SQL Server)، وإدارة سيرفرات Windows وLinux، وتطوير البرمجيات بلغات متعددة (Java, Python, C#). كما أمتلك قناة يوتيوب تعليمية (@cyber.khalil) أشارك فيها معرفتي التقنية مع أكثر من 1.7 ألف مشترك.",

    // Skills Section
    "skills.title": "المهارات التقنية",
    "skills.db": "قواعد البيانات",
    "skills.server": "إدارة السيرفرات",
    "skills.programming": "البرمجة والتطوير",
    "skills.cyber": "الأمن السيبراني",

    // Achievements Section
    "achievements.title": "الإنجازات والتاريخ المهني",
    "achievements.view1": "عرض الخريطة الزمنية",
    "achievements.view2": "عرض القائمة الزمنية",
    "achievements.zoomIn": "تكبير",
    "achievements.zoomOut": "تصغير",

    // Timeline
    "timeline.education": "التعليم",
    "timeline.employment": "التوظيف",
    "timeline.certifications": "الشهادات والدورات",
    "timeline.awards": "الجوائز والتكريمات",
    "timeline.bachelor": "بكالوريوس هندسة أمن المعلومات",
    "timeline.ta": "مساعد تدريس",
    "timeline.network": "مهندس شبكات ومواقع",
    "timeline.software": "مهندس برمجيات",
    "timeline.viewProject": "عرض المشروع على GitHub",
    "timeline.oracle": "شهادة Oracle Academy",
    "timeline.java": "دورة Java 2 SE",
    "timeline.bestStudent": "أفضل الطلاب - UCAS",
    "timeline.now": "الآن",
    "timeline.present": "الحاضر",
    "timeline.taDetails":
      "تدريس مساقات أنظمة التشغيل، برمجة Java، الشبكات، مقدمة في الحوسبة، وأخلاقيات الحاسوب",
    "timeline.networkDetails":
      "إدارة البنية التحتية للشبكات والمواقع الإلكترونية للشركة، وصيانة السيرفرات، وضمان استمرارية الخدمات التقنية",
    "timeline.softwareDetails":
      "تطوير حلول برمجية متكاملة لإدارة بيانات الروضة، وتصميم نظام متكامل يدعم تصدير واستيراد بيانات Excel",
    "timeline.grade": "التقدير: جيد جدًا (ممتاز) - المعدل: 89.23%",
    "timeline.hours": "إجمالي الساعات: 174 ساعة | ساعات التطوع: 140 ساعة",
    "timeline.viewCert": "عرض الشهادة",
    "timeline.competition": "مسابقة برمجية عالمية",
    "timeline.hashcode": "شاركت في مسابقة Hash Code السنوية التي تنظمها Google",
    "timeline.honor": "تم تكريمي كواحد من أفضل الطلاب للفصل الدراسي",
    "timeline.startStudy": "بداية الدراسة الجامعية",
    "timeline.hoursCount": "عدد الساعات: 50 ساعة",
    "timeline.completionDate": "تاريخ الإنجاز: 26 نوفمبر 2016",

    // Experience Section
    "experience.title": "الخبرات العملية",
    "experience.courses": "5 مساقات",
    "experience.students": "+200 طالب",
    "experience.networkManagement": "إدارة شبكات",
    "experience.serverManagement": "إدارة سيرفرات",
    "experience.softwareDev": "تطوير برمجيات",
    "experience.dataManagement": "إدارة بيانات",

    // Projects Section
    "projects.title": "أبرز المشاريع",
    "projects.dbDesc":
      "تصميم وإدارة قاعدة بيانات جامعية متكاملة باستخدام Oracle DBMS تدعم إدارة الطلاب والمدرسين والموظفين.",
    "projects.psDesc":
      "سكربتات PowerShell لأتمتة إعداد Active Directory وخدمات Windows Server (DNS, DHCP, File Sharing).",
    "projects.javaDesc":
      "تطبيق Java مع واجهة مستخدم لإدارة قاعدة بيانات Oracle، مع دعم إجراءات PL/SQL والمشغلات.",
    "projects.stars": "4 نجوم",
    "projects.viewProject": "عرض المشروع",
    "projects.all": "عرض جميع المشاريع على GitHub (46 مستودع)",

    // YouTube Section
    "youtube.title": "قناة YouTube التعليمية",
    "youtube.subscribers": "مشترك",
    "youtube.views": "مشاهدة (آخر سنة)",
    "youtube.hours": "ساعة مشاهدة",
    "youtube.videos": "فيديو",
    "youtube.top": "أبرز الفيديوهات التعليمية",
    "youtube.video1": "مشاركة الملفات مع التحكم في الصلاحيات",
    "youtube.video2": "شرح التعامل مع DNS على Windows Server 2022",
    "youtube.video3": "شرح تثبيت وتفعيل DHCP على Windows Server 2022",
    "youtube.duration": "مدة الفيديو: 13:28 | المشاهدات: 5,174",
    "youtube.visit": "زيارة القناة",

    // Contact Section
    "contact.title": "التواصل معي",
    "contact.info": "معلومات التواصل",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "رقم الهاتف",
    "contact.address": "العنوان",
    "contact.social": "متابعيني على وسائل التواصل",
    "contact.send": "أرسل لي رسالة",
    "contact.telegramTitle": "تواصل عبر Telegram",
    "contact.telegramDesc":
      "يمكنك إرسال رسالة مباشرة إلى حسابي على Telegram. اضغط على الزر أدناه لبدء المحادثة.",
    "contact.telegramButton": "إرسال رسالة على Telegram",
    "contact.telegramNote":
      "سيتم فتح تطبيق Telegram أو الموقع الرسمي. تأكد من تثبيت Telegram على جهازك.",

    // Footer
    "footer.tagline": "مهندس حاسوب وأمن سيبراني | معلم تقني | مطور برمجيات",
    "footer.copyright": "© 2026 سايبر خليل - جميع الحقوق محفوظة.",

    // Language Switcher
    "language.english": "English",
    "language.arabic": "العربية",
  },

  en: {
    // Header
    "header.name": "Mahmoud Walid Khalil",
    "header.title": "Computer Engineer & Cybersecurity Specialist",
    "header.location": "Gaza - Palestine",
    "header.quotes": "Quotes & Sayings",
    "header.quote1":
      "Arch Linux distribution is a blank canvas that you will paint",
    "header.quote2":
      "The world is for those who have no worries, O Allah, no worries except the Hereafter.",

    // Menu
    "menu.title": "Menu",
    "menu.profile": "Profile",
    "menu.skills": "Skills",
    "menu.achievements": "Achievements",
    "menu.experience": "Experience",
    "menu.projects": "Projects",
    "menu.youtube": "YouTube",
    "menu.contact": "Contact",

    // About Section
    "about.title": "Profile",
    "about.content1":
      "I am a computer engineer specialized in information security with years of experience in software development, database management, and servers. I graduated with a Bachelor's degree in Information Security Engineering with a very good grade from the University College of Applied Sciences in Gaza.",
    "about.content2":
      "🐧 By the way, I use Arch Linux as my main operating system. I enjoy customizing the work environment to the maximum. 😊 I am constantly interested in learning new skills, and I believe curiosity is the real driver of development in the technology field. ⚡ I love programming, especially on the Linux environment, where I find unparalleled freedom and flexibility in turning ideas into reality.",
    "about.content3":
      "I have extensive practical experience in database management (Oracle, MySQL, SQL Server), Windows and Linux server management, and software development in multiple languages (Java, Python, C#). I also have an educational YouTube channel (@cyber.khalil) where I share my technical knowledge with over 1.7 thousand subscribers.",

    // Skills Section
    "skills.title": "Technical Skills",
    "skills.db": "Databases",
    "skills.server": "Server Management",
    "skills.programming": "Programming & Development",
    "skills.cyber": "Cybersecurity",

    // Achievements Section
    "achievements.title": "Achievements & Career History",
    "achievements.view1": "Timeline View",
    "achievements.view2": "List View",
    "achievements.zoomIn": "Zoom In",
    "achievements.zoomOut": "Zoom Out",

    // Timeline
    "timeline.education": "Education",
    "timeline.employment": "Employment",
    "timeline.certifications": "Certifications & Courses",
    "timeline.awards": "Awards & Honors",
    "timeline.bachelor": "Bachelor in Information Security Engineering",
    "timeline.ta": "Teaching Assistant",
    "timeline.network": "Network & Web Engineer",
    "timeline.software": "Software Engineer",
    "timeline.viewProject": "View Project on GitHub",
    "timeline.oracle": "Oracle Academy Certificate",
    "timeline.java": "Java 2 SE Course",
    "timeline.bestStudent": "Top Student - UCAS",
    "timeline.now": "Now",
    "timeline.present": "Present",
    "timeline.taDetails":
      "Teaching Operating Systems, Java Programming, Networks, Introduction to Computing, and Computer Ethics",
    "timeline.networkDetails":
      "Managing company's network and web infrastructure, server maintenance, and ensuring technical service continuity",
    "timeline.softwareDetails":
      "Developing integrated software solutions for kindergarten data management, designing a complete system supporting Excel data import/export",
    "timeline.grade": "Grade: Very Good (Excellent) - GPA: 89.23%",
    "timeline.hours": "Total Hours: 174 hours | Volunteer Hours: 140 hours",
    "timeline.viewCert": "View Certificate",
    "timeline.competition": "Global Programming Competition",
    "timeline.hashcode":
      "Participated in the annual Hash Code competition organized by Google",
    "timeline.honor": "Honored as one of the top students for the semester",
    "timeline.startStudy": "Beginning of university studies",
    "timeline.hoursCount": "Hours: 50 hours",
    "timeline.completionDate": "Completion Date: November 26, 2016",

    // Experience Section
    "experience.title": "Work Experience",
    "experience.courses": "5 Courses",
    "experience.students": "+200 Students",
    "experience.networkManagement": "Network Management",
    "experience.serverManagement": "Server Management",
    "experience.softwareDev": "Software Development",
    "experience.dataManagement": "Data Management",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.dbDesc":
      "Design and management of a comprehensive university database using Oracle DBMS supporting student, teacher, and staff management.",
    "projects.psDesc":
      "PowerShell scripts for automating Active Directory setup and Windows Server services (DNS, DHCP, File Sharing).",
    "projects.javaDesc":
      "Java application with user interface for Oracle database management, supporting PL/SQL procedures and triggers.",
    "projects.stars": "4 Stars",
    "projects.viewProject": "View Project",
    "projects.all": "View All Projects on GitHub (46 repositories)",

    // YouTube Section
    "youtube.title": "Educational YouTube Channel",
    "youtube.subscribers": "Subscribers",
    "youtube.views": "Views (last year)",
    "youtube.hours": "Watch Hours",
    "youtube.videos": "Videos",
    "youtube.top": "Top Educational Videos",
    "youtube.video1": "File Sharing with Permission Control",
    "youtube.video2": "DNS Management on Windows Server 2022",
    "youtube.video3": "Installing and Configuring DHCP on Windows Server 2022",
    "youtube.duration": "Duration: 13:28 | Views: 5,174",
    "youtube.visit": "Visit Channel",

    // Contact Section
    "contact.title": "Contact Me",
    "contact.info": "Contact Information",
    "contact.email": "Email",
    "contact.phone": "Phone Number",
    "contact.address": "Address",
    "contact.social": "Follow me on Social Media",
    "contact.send": "Send me a message",
    "contact.telegramTitle": "Contact via Telegram",
    "contact.telegramDesc":
      "You can send a direct message to my Telegram account. Click the button below to start the conversation.",
    "contact.telegramButton": "Send Message on Telegram",
    "contact.telegramNote":
      "Telegram app or official website will open. Make sure Telegram is installed on your device.",

    // Footer
    "footer.tagline":
      "Computer Engineer & Cybersecurity Specialist | Technical Teacher | Software Developer",
    "footer.copyright": "© 2026 Cyber Khalil - All rights reserved.",

    // Language Switcher
    "language.english": "English",
    "language.arabic": "العربية",
  },
};

function setupTranslationSystem() {
  // تحديث جميع النصوص بناءً على اللغة الحالية
  updatePageText();
}

function updatePageText() {
  const html = document.documentElement;
  const currentLang = html.getAttribute("data-lang") || "ar";

  // تحديث جميع العناصر التي تحتوي على data-key
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-key");
    if (translations[currentLang] && translations[currentLang][key]) {
      // الاحتفاظ بالـ HTML الداخلي إن وجد (مثل الأيقونات)
      if (element.children.length > 0) {
        const children = Array.from(element.children);
        const textNodes = Array.from(element.childNodes).filter(
          (node) => node.nodeType === 3
        );

        // تحديث النصوص فقط
        textNodes.forEach((node) => {
          if (node.textContent.trim()) {
            node.textContent = translations[currentLang][key];
          }
        });

        // إذا كان العنصر يحتوي على عناصر فرعية، نستخدم innerHTML
        if (element.querySelector("span, i, strong, em")) {
          // حفظ البنية الداخلية
          const temp = document.createElement("div");
          temp.innerHTML = translations[currentLang][key];

          // استبدال المحتوى مع الاحتفاظ بالبنية
          if (temp.children.length > 0) {
            element.innerHTML = translations[currentLang][key];
          } else {
            element.textContent = translations[currentLang][key];
          }
        }
      } else {
        element.textContent = translations[currentLang][key];
      }
    }
  });
}

// ===========================================
// 2. التحكم في القائمة المتنقلة
// ===========================================
function setupMobileNavigation() {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileNav = document.querySelector(".mobile-nav");
  const closeNavBtn = document.querySelector(".close-nav");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");
  const body = document.body;

  if (!mobileMenuBtn || !mobileNav) return;

  // فتح القائمة
  mobileMenuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    mobileNav.classList.add("active");
    body.style.overflow = "hidden";
  });

  // إغلاق القائمة
  if (closeNavBtn) {
    closeNavBtn.addEventListener("click", function () {
      mobileNav.classList.remove("active");
      body.style.overflow = "";
    });
  }

  // إغلاق القائمة عند النقر على رابط
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileNav.classList.remove("active");
      body.style.overflow = "";
    });
  });

  // إغلاق القائمة عند النقر خارجها
  document.addEventListener("click", function (event) {
    if (
      !mobileNav.contains(event.target) &&
      !mobileMenuBtn.contains(event.target) &&
      mobileNav.classList.contains("active")
    ) {
      mobileNav.classList.remove("active");
      body.style.overflow = "";
    }
  });

  // إغلاق القائمة عند التمرير
  window.addEventListener("scroll", function () {
    if (mobileNav.classList.contains("active")) {
      mobileNav.classList.remove("active");
      body.style.overflow = "";
    }
  });

  // إغلاق القائمة عند تغيير حجم النافذة
  window.addEventListener("resize", function () {
    if (window.innerWidth > 992 && mobileNav.classList.contains("active")) {
      mobileNav.classList.remove("active");
      body.style.overflow = "";
    }
  });
}

// ===========================================
// 3. التمرير السلس للروابط
// ===========================================
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // إغلاق القائمة المتنقلة إذا كانت مفتوحة
        const mobileNav = document.querySelector(".mobile-nav");
        if (mobileNav && mobileNav.classList.contains("active")) {
          mobileNav.classList.remove("active");
          document.body.style.overflow = "";
        }

        // التمرير إلى العنصر الهدف
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
}

// ===========================================
// 4. التحكم في الجدول الزمني
// ===========================================
function setupTimelineControls() {
  // View Toggle
  const viewToggleBtns = document.querySelectorAll(".view-toggle-btn");
  const timelineViews = document.querySelectorAll(".timeline-view");

  if (viewToggleBtns.length === 0) return;

  viewToggleBtns.forEach((button) => {
    button.addEventListener("click", function () {
      // إزالة active class من جميع الأزرار
      viewToggleBtns.forEach((btn) => btn.classList.remove("active"));

      // إضافة active class للزر المحدد
      this.classList.add("active");

      const viewType = this.getAttribute("data-view");

      // إخفاء جميع طرق العرض
      timelineViews.forEach((view) => view.classList.remove("active"));

      // عرض طريقة العرض المحددة
      const selectedView = document.querySelector(`.${viewType}-view`);
      if (selectedView) {
        selectedView.classList.add("active");
      }
    });
  });

  // Zoom Controls (للجدول الأفقي فقط)
  const zoomInBtn = document.getElementById("zoomIn");
  const zoomOutBtn = document.getElementById("zoomOut");
  const timelineContainer = document.querySelector(
    ".timeline-horizontal-container"
  );

  if (zoomInBtn && zoomOutBtn && timelineContainer) {
    let zoomLevel = 1;
    const minZoom = 0.8;
    const maxZoom = 2;
    const zoomStep = 0.2;

    // التكبير
    zoomInBtn.addEventListener("click", function () {
      if (zoomLevel < maxZoom) {
        zoomLevel += zoomStep;
        updateZoom();
      }
      updateButtonStates();
    });

    // التصغير
    zoomOutBtn.addEventListener("click", function () {
      if (zoomLevel > minZoom) {
        zoomLevel -= zoomStep;
        updateZoom();
      }
      updateButtonStates();
    });

    function updateZoom() {
      timelineContainer.style.transform = `scaleX(${zoomLevel})`;
      timelineContainer.style.transformOrigin = "right center";

      // تحديث حجم الخط للعلامات الزمنية
      const yearMarkers = document.querySelectorAll(".year-marker");
      yearMarkers.forEach((marker) => {
        marker.style.fontSize = `${0.9 * zoomLevel}rem`;
      });

      // تحديث أماكن ظهور popups
      const eventItems = document.querySelectorAll(".event-item");
      eventItems.forEach((item) => {
        const popup = item.querySelector(".event-popup");
        if (popup) {
          popup.style.transform = `translateX(-50%) translateY(${
            zoomLevel > 1.5 ? "20px" : "10px"
          })`;
        }
      });
    }

    function updateButtonStates() {
      zoomInBtn.disabled = zoomLevel >= maxZoom;
      zoomOutBtn.disabled = zoomLevel <= minZoom;

      if (zoomInBtn.disabled) {
        zoomInBtn.style.opacity = "0.5";
        zoomInBtn.style.cursor = "not-allowed";
      } else {
        zoomInBtn.style.opacity = "1";
        zoomInBtn.style.cursor = "pointer";
      }

      if (zoomOutBtn.disabled) {
        zoomOutBtn.style.opacity = "0.5";
        zoomOutBtn.style.cursor = "not-allowed";
      } else {
        zoomOutBtn.style.opacity = "1";
        zoomOutBtn.style.cursor = "pointer";
      }
    }

    // تهيئة حالة الأزرار
    updateButtonStates();
  }

  // تحسينات للهواتف للجدول الزمني
  if (window.innerWidth <= 768) {
    const timelineContainer = document.querySelector(
      ".timeline-horizontal-container"
    );
    if (timelineContainer) {
      // إضافة تحسينات للتمرير على الهواتف
      let isScrolling = false;
      let startX, scrollLeft;

      timelineContainer.addEventListener("touchstart", function (e) {
        isScrolling = true;
        startX = e.touches[0].pageX - timelineContainer.offsetLeft;
        scrollLeft = timelineContainer.scrollLeft;
      });

      timelineContainer.addEventListener("touchmove", function (e) {
        if (!isScrolling) return;
        e.preventDefault();
        const x = e.touches[0].pageX - timelineContainer.offsetLeft;
        const walk = (x - startX) * 2;
        timelineContainer.scrollLeft = scrollLeft - walk;
      });

      timelineContainer.addEventListener("touchend", function () {
        isScrolling = false;
      });
    }
  }
}

// ===========================================
// 5. إضافة تأثيرات التمرير
// ===========================================
function setupScrollEffects() {
  // إضافة active class لروابط التنقل أثناء التمرير
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".mobile-nav-links a");

    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });

    // إضافة تأثير ظهور العناصر عند التمرير
    const animatedElements = document.querySelectorAll(
      ".project-card, .skill-category, .stat-card"
    );
    animatedElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        element.classList.add("animate-in");
      }
    });
  });

  // إضافة أنماط للتحريك
  const style = document.createElement("style");
  style.textContent = `
        .project-card, .skill-category, .stat-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .project-card.animate-in, 
        .skill-category.animate-in, 
        .stat-card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .mobile-nav-links a.active {
            background-color: var(--secondary);
            color: white;
        }
        
        .mobile-nav-links a.active i {
            color: white;
        }
    `;
  document.head.appendChild(style);

  // تشغيل التحريك الأولي
  setTimeout(() => {
    window.dispatchEvent(new Event("scroll"));
  }, 100);
}

// ===========================================
// 6. تحميل الصور بكسل
// ===========================================
function setupImageLoading() {
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    if (img.complete) {
      img.classList.add("loaded");
    } else {
      img.addEventListener("load", function () {
        this.classList.add("loaded");
      });

      img.addEventListener("error", function () {
        console.error("فشل تحميل الصورة:", this.src);
      });
    }
  });

  // إضافة أنماط للتحميل
  const style = document.createElement("style");
  style.textContent = `
        img {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        img.loaded {
            opacity: 1;
        }
    `;
  document.head.appendChild(style);
}

// ===========================================
// 7. إعداد زر تبديل اللغة
// ===========================================
function setupLanguageSwitcher() {
  const langSwitch = document.getElementById("langSwitch");
  const html = document.documentElement;

  if (!langSwitch) return;

  // تحديد اللغة الحالية
  let currentLang = html.getAttribute("data-lang") || "ar";

  // تحديث نص الزر
  function updateButtonText() {
    const langText = langSwitch.querySelector(".lang-text");
    if (langText) {
      if (currentLang === "ar") {
        langText.textContent = "English";
        langSwitch.setAttribute("data-lang", "en");
      } else {
        langText.textContent = "العربية";
        langSwitch.setAttribute("data-lang", "ar");
      }
    }
  }

  // تبديل اللغة
  function switchLanguage(lang) {
    // تحديث سمة HTML
    html.setAttribute("data-lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    // تحديث النصوص
    updatePageText();

    // تحديث اتجاه العناصر
    updateDirection(lang);

    // حفظ اللغة في localStorage
    localStorage.setItem("preferred-language", lang);

    currentLang = lang;
    updateButtonText();

    // إعادة تهيئة بعض العناصر بعد تغيير اللغة
    setTimeout(() => {
      setupTimelineControls();
      setupScrollEffects();
    }, 100);
  }

  // تحديث اتجاه العناصر
  function updateDirection(lang) {
    // تحديث اتجاه الحقول التي تحتوي على أرقام
    const ltrElements = document.querySelectorAll(
      '.ltr-direction, .info-item span[style*="direction: ltr"]'
    );
    ltrElements.forEach((el) => {
      el.style.direction = "ltr";
    });

    // تحديث اتجاه الاقتباسات والعناصر الأخرى
    if (lang === "en") {
      document.querySelectorAll("input, textarea").forEach((el) => {
        el.style.textAlign = "left";
      });
    } else {
      document.querySelectorAll("input, textarea").forEach((el) => {
        el.style.textAlign = "right";
      });
    }
  }

  // حدث النقر على زر التبديل
  langSwitch.addEventListener("click", function () {
    const newLang = this.getAttribute("data-lang");
    switchLanguage(newLang);
  });

  // محاولة تحميل اللغة المفضلة من localStorage
  const savedLang = localStorage.getItem("preferred-language");
  if (savedLang && savedLang !== currentLang) {
    switchLanguage(savedLang);
  }

  // تحديث الزر في البداية
  updateButtonText();
}

// ===========================================
// 8. تحسينات إضافية للهواتف
// ===========================================
function setupMobileEnhancements() {
  // منع التكبير التلقائي في حقول الإدخال على iOS
  if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
    const inputs = document.querySelectorAll("input, textarea, select");
    inputs.forEach((input) => {
      input.addEventListener("focus", function () {
        this.style.fontSize = "16px";
      });
    });
  }

  // تحسين أداء التمرير على الهواتف
  if ("ontouchstart" in window) {
    document.body.style.overflowScrolling = "touch";
    document.body.style.webkitOverflowScrolling = "touch";
  }
}

// ===========================================
// 9. تحسينات تحميل الصفحة
// ===========================================
// إضافة مؤشر تحميل
window.addEventListener("load", function () {
  // إخفاء مؤشر التحميل إذا كان موجوداً
  const loader = document.getElementById("page-loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 300);
  }

  // تحسين تحميل الخطوط
  if ("fonts" in document) {
    document.fonts.ready.then(() => {
      document.body.classList.add("fonts-loaded");
    });
  }
});

// إضافة أنماط إضافية للتحسين
const performanceStyles = document.createElement("style");
performanceStyles.textContent = `
    .fonts-loaded body {
        font-display: swap;
    }
    
    * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    /* تحسين أداء التمرير */
    .project-card, .skill-category, .timeline-view {
        will-change: transform;
    }
    
    /* تعديلات للغة الإنجليزية */
    html[data-lang="en"] {
        direction: ltr;
    }
    
    html[data-lang="en"] .quote {
        border-left: 5px solid var(--secondary);
        border-right: none;
    }
`;
document.head.appendChild(performanceStyles);

// التحكم في حجم الخط بناءً على حجم الشاشة
function adjustFontSizes() {
  const html = document.documentElement;
  const screenWidth = window.innerWidth;

  if (screenWidth <= 480) {
    html.style.fontSize = "14px";
  } else if (screenWidth <= 768) {
    html.style.fontSize = "15px";
  } else {
    html.style.fontSize = "16px";
  }
}

// استدعاء الدالة عند تحميل الصفحة وتغيير حجم النافذة
window.addEventListener("load", adjustFontSizes);
window.addEventListener("resize", adjustFontSizes);

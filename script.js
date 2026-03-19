const translations = {
    ar: {
        nav_home: "الرئيسية", nav_exp: "الإنجازات", nav_academy: "الأكاديمية", nav_youtube: "يوتيوب",
        hero_badge: "مرحباً بك في عالمي الرقمي",
        hero_title: "محمود الشيخ خليل", hero_subtitle: "مهندس حاسوب وأمن سيبراني",
        hero_desc: "خبير في إدارة الأنظمة والشبكات، ومحاضر تقني يسعى لنشر المعرفة الرقمية وحماية الفضاء السيبراني العربي.",
        btn_academy: "دخول الأكاديمية", btn_youtube: "قناة اليوتيوب",
        exp_title: "المسيرة المهنية والتقنية",
        exp_job1: "محاضر مساعد - UCAS", exp_job1_desc: "تدريس مساقات أنظمة التشغيل وأمن الشبكات، والبرمجة.",
        exp_job2: "إدارة الشبكات - وزارة الاتصالات", exp_job2_desc: "خبرة عمل في إدارة الأنظمة والشبكات الحكومية (تدريب ميداني).",
        exp_award: "التميز الأكاديمي", exp_award_desc: "حاصل على لقب 'أفضل طالب' لعدة فصول وجائزة Everest للأنظمة.",
        exp_linux: "إدارة أنظمة Linux", exp_linux_desc: "بناء وإدارة بيئات عمل تعتمد على Arch Linux وتخصيصها للأمن السيبراني.",
        exp_content: "صناعة المحتوى التقني", exp_content_desc: "تأسيس منصة 'سايبر خليل' التعليمية وتقديم شروحات متقدمة في الأمن الرقمي.",
        exp_community: "إدارة المجتمعات التقنية", exp_community_desc: "قيادة تجمع 'سايبر خليل' على تليجرام لتقديم الدعم التقني للطلاب.",
        academy_title: "أكاديمية سايبر خليل", academy_desc: "مركز المحاضرات والمواد العلمية لطلاب هندسة أمن المعلومات.",
        academy_go: "تصفح المنصة الآن", youtube_title: "آخر الدروس التعليمية",
        footer_desc: "نحو فضاء سيبراني تعليمي متميز.", footer_copy: "© 2026 جميع الحقوق محفوظة لـ محمود الشيخ خليل"
    },
    en: {
        nav_home: "Home", nav_exp: "Portfolio", nav_academy: "Academy", nav_youtube: "YouTube",
        hero_badge: "Welcome to my digital world",
        hero_title: "Mahmoud Khalil", hero_subtitle: "Cybersecurity & Computer Engineer",
        hero_desc: "Expert in systems and network administration, a technical lecturer dedicated to securing cyberspace and spreading knowledge.",
        btn_academy: "Enter Academy", btn_youtube: "YouTube Channel",
        exp_title: "Professional Journey",
        exp_job1: "Teaching Assistant - UCAS", exp_job1_desc: "Teaching Operating Systems, Network Security, and Programming.",
        exp_job2: "Network Admin - MTIT", exp_job2_desc: "Professional experience in government systems and networks (Field Training).",
        exp_award: "Academic Excellence", exp_award_desc: "Awarded 'Best Student' multiple times and Everest Systems prize.",
        exp_linux: "Linux Administration", exp_linux_desc: "Building and managing custom Arch Linux environments for cybersecurity.",
        exp_content: "Technical Content", exp_content_desc: "Founding 'Cyber Khalil' platform and providing advanced security tutorials.",
        exp_community: "Community Management", exp_community_desc: "Leading the 'Cyber Khalil' community on Telegram to support IT students.",
        academy_title: "Cyber Khalil Academy", academy_desc: "A hub for lectures and educational materials for Information Security students.",
        academy_go: "Explore Now", youtube_title: "Latest Video Tutorials",
        footer_desc: "Towards a distinguished educational cyberspace.", footer_copy: "© 2026 All Rights Reserved - Mahmoud Khalil"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-toggle');
    const htmlTag = document.getElementById('html-tag');
    const heroContent = document.getElementById('hero-content');
    let currentLang = 'ar';

    // تبديل اللغة مع تأثير التلاشي
    langBtn.addEventListener('click', () => {
        heroContent.style.opacity = '0';
        
        setTimeout(() => {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            htmlTag.setAttribute('lang', currentLang);
            htmlTag.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
            langBtn.innerText = currentLang === 'ar' ? 'English' : 'العربية';
            
            document.querySelectorAll('[data-key]').forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[currentLang][key]) {
                    el.innerText = translations[currentLang][key];
                }
            });
            
            heroContent.style.opacity = '1';
        }, 300);
    });
const videoIds = ['bX6dZ8MZH2E', 'LVQhJ5b5z-A', 'PuzWrafUOp0'];
const ytContainer = document.getElementById('youtube-container');

videoIds.forEach(id => {
    const card = document.createElement('a');
    card.href = `https://www.youtube.com/watch?v=${id}`;
    card.target = '_blank';
    card.className = 'v-card';
    
    // وضع الصورة والعنوان المؤقت
    card.innerHTML = `
        <img src="https://img.youtube.com/vi/${id}/maxresdefault.jpg" alt="Video">
        <h4 id="title-${id}">يتم التحميل...</h4>
    `;
    ytContainer.appendChild(card);

    // استخدام fetch مع رابط oembed المباشر 
    // ملاحظة: يوتيوب أحياناً يسمح بـ fetch المباشر لروابط oembed في المتصفحات الحديثة
    fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById(`title-${id}`).innerText = data.title;
        })
        .catch(err => {
            // في حال فشل الـ fetch بسبب CORS، نستخدم الحل البديل (No-Cors) أو نص افتراضي
            console.log("CORS error, trying fallback for ID:", id);
            document.getElementById(`title-${id}`).innerText = "مشاهدة الفيديو على يوتيوب";
        });
});

	// وظيفة القائمة المتنقلة (Mobile Menu) - نسخة معدلة ومضمونة
	const menuToggle = document.getElementById('mobile-menu');
	const navLinks = document.getElementById('nav-links');

	if (menuToggle && navLinks) {
		menuToggle.addEventListener('click', () => {
			navLinks.classList.toggle('active');
			// تغيير شكل الأيقونة من قضبان إلى X
			const icon = menuToggle.querySelector('i');
			icon.classList.toggle('fa-bars');
			icon.classList.toggle('fa-times');
		});

		// إغلاق القائمة تلقائياً عند الضغط على أي رابط لتسهيل التصفح
		document.querySelectorAll('.nav-links a').forEach(link => {
			link.addEventListener('click', () => {
				navLinks.classList.remove('active');
				menuToggle.querySelector('i').classList.add('fa-bars');
				menuToggle.querySelector('i').classList.remove('fa-times');
			});
		});
	}
});
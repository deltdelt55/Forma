"use strict";

document.documentElement.classList.add("js");

/*
 * Replace these temporary placeholders with your own contact details.
 * WhatsApp URL format: https://wa.me/374XXXXXXXXX (digits only).
 */
const CONTACTS = {
  telegram: { value: "@omgsop", url: "https://t.me/omgsop" },
  whatsapp: { value: "+374 98 53 10 07", url: "https://wa.me/37498531007" },
  email: { value: "deltdelt55@gmail.com", url: "mailto:deltdelt55@gmail.com" }
};

const translations = {
  hy: {
    metaTitle: "FORMA — Պատվերով կայքերի ստեղծում",
    metaDescription: "Ժամանակակից, արագ և հարմարավետ կայքեր բիզնեսի, ստարտափների և անձնական նախագծերի համար։",
    ogDescription: "Կայքերի դիզայն և մշակում՝ գաղափարից մինչև գործարկում։",
    skip: "Անցնել հիմնական բովանդակությանը",
    navLabel: "Հիմնական նավիգացիա",
    mobileNavLabel: "Բջջային նավիգացիա",
    footerNavLabel: "Ստորին նավիգացիա",
    languageLabel: "Ընտրել լեզուն",
    menuOpen: "Բացել ընտրացանկը",
    menuClose: "Փակել ընտրացանկը",
    closeDialog: "Փակել",
    navServices: "Ծառայություններ",
    navAbout: "Առավելություններ",
    navWork: "Աշխատանքներ",
    navProcess: "Գործընթացը",
    navContact: "Կապ",
    heroEyebrow: "Դիզայն + մշակում",
    heroTitle: "Ստեղծում եմ ժամանակակից կայքեր՝ ձեր գաղափարների համար",
    heroLead: "Ստեղծում եմ կայքեր բիզնեսի, ստարտափների, անձնական նախագծերի և ցանկացած այլ խնդրի համար՝ գաղափարից մինչև գործարկում։",
    orderSite: "Պատվիրել կայք",
    viewServices: "Դիտել ծառայությունները",
    heroNote: "Դիզայն, մշակում և գործարկում՝ մեկ գործընթացում",
    explore: "Ուսումնասիրել",
    heroFoot: "Բիզնես / Ստարտափ / Անձնական նախագիծ",
    servicesLabel: "Ծառայություններ",
    servicesTitle: "Կայք, որը լուծում է ձեր խնդիրը",
    servicesLead: "Յուրաքանչյուր նախագիծ սկսվում է նպատակից, ոչ թե պատրաստի ձևանմուշից։ Ընտրեք ուղին կամ պատմեք ձեր գաղափարի մասին։",
    service1Title: "Կայքեր բիզնեսի և ընկերությունների համար",
    service1Text: "Ներկայացրեք ընկերությունը, ծառայությունները և առավելությունները՝ հստակ կառուցվածքով և վստահություն ձևավորող դիզայնով։",
    service2Title: "Լենդինգներ ապրանքների և ծառայությունների համար",
    service2Text: "Մեկ ուղի ունեցող էջ, որը պարզ ներկայացնում է արժեքը և օգնում է այցելուին կատարել թիրախային գործողություն։",
    service3Title: "Պորտֆոլիո կայքեր",
    service3Text: "Անհատական էջ մասնագետի, ստեղծագործական թիմի կամ աշխատանքների հավաքածուի համար՝ ուժեղ տեսողական կենտրոնով։",
    service4Title: "Ինտերնետ խանութներ",
    service4Text: "Հարմար կատալոգ, ապրանքի քարտ և պարզ գնման ուղի՝ առցանց վաճառքի համար անհրաժեշտ ամեն ինչով։",
    service5Title: "Կայքեր ստարտափների և անձնական նախագծերի համար",
    service5Text: "Ճկուն լուծում նոր արտադրանքի, համայնքի, բլոգի կամ անձնական նախաձեռնության մեկնարկի և զարգացման համար։",
    service6Title: "Անհատական լուծումներ",
    service6Text: "Ոչ ստանդարտ կառուցվածք և ֆունկցիոնալություն՝ ձեր նպատակների, բովանդակության և լսարանի պահանջներին համապատասխան։",
    discussTask: "Քննարկել խնդիրը",
    aboutLabel: "Ինչու՞ ես",
    aboutTitle: "Որակը՝ յուրաքանչյուր մանրուքում",
    aboutLead: "Ստեղծում եմ ոչ միայն գեղեցիկ, այլ նաև հասկանալի, արագ և հարմար կայքեր։ Դուք միշտ գիտեք՝ ինչ փուլում է նախագիծը և ինչ է հետևում։",
    seeProcess: "Տեսնել գործընթացը",
    benefit1Title: "Անհատական մոտեցում",
    benefit1Text: "Լուծումները կազմվում են ձեր խնդրի և նպատակների հիման վրա, ոչ թե պատրաստի ձևանմուշի սահմաններում։",
    benefit2Title: "Ժամանակակից դիզայն",
    benefit2Text: "Մաքուր տեսողական լեզու, ուժեղ տիպոգրաֆիա և մանրուքների ուշադիր մշակում։",
    benefit3Title: "Հարմարավետ ցանկացած սարքում",
    benefit3Text: "Կայքը հարմարավետ է համակարգչի, պլանշետի և հեռախոսի վրա՝ առանց օգտատիրոջ փորձի որակի կորստի։",
    benefit4Title: "Պարզ նավիգացիա",
    benefit4Text: "Տրամաբանական կառուցվածք, որը օգնում է այցելուին արագ գտնել անհրաժեշտ տեղեկությունը։",
    benefit5Title: "Բեռնման արագություն",
    benefit5Text: "Թեթև կոդ և օպտիմիզացված ռեսուրսներ՝ արագ աշխատանքի և լավ օգտատիրոջ փորձի համար։",
    benefit6Title: "Թափանցիկ շփում",
    benefit6Text: "Քննարկում ենք առաջընթացը, համաձայնեցնում կարևոր որոշումները և պահպանում կապը մինչև գործարկումը։",
    workLabel: "Պորտֆոլիո",
    workTitle: "Լուծումների տեսականին՝ գործող մակետներում",
    workLead: "Այս աշխատանքները ցուցադրական նախագծեր են և ներկայացված են միայն դիզայնի մոտեցումը ցույց տալու համար։",
    demoProject: "Ցուցադրական նախագիծ",
    projectMonoTitle: "MONO — ճարտարապետական ստուդիա",
    projectMonoType: "Կորպորատիվ կայք / Դիզայն / Մշակում",
    projectMonoDescription: "Խստաշունչ և արտահայտիչ կայքի մակետ ճարտարապետական ստուդիայի համար, որտեղ առաջին պլանում են աշխատանքներն ու տարածության տեսողական լեզուն։",
    projectMonoFeature1: "Խմբագրական ոճի անհամաչափ դասավորություն",
    projectMonoFeature2: "Նախագծերի խոշոր տեսողական ներկայացում",
    projectMonoFeature3: "Հստակ ուղի դեպի կապի բաժին",
    projectNovaTitle: "NŌVA — ապրանքների խանութ",
    projectNovaType: "Ինտերնետ խանութ / E-commerce",
    projectNovaDescription: "Նուրբ և ժամանակակից առցանց խանութի մակետ՝ կենտրոնացած ապրանքի, նրա նյութերի և գնման հարմարավետության վրա։",
    projectNovaFeature1: "Ապրանքակենտրոն գլխավոր էջ",
    projectNovaFeature2: "Հարմար կատալոգի տեսողական կառուցվածք",
    projectNovaFeature3: "Պարզ և նկատելի գնման կոճակներ",
    projectPulseTitle: "PULSE — ստարտափ վահանակ",
    projectPulseType: "Վեբ արտադրանք / UI / Պրոտոտիպ",
    projectPulseDescription: "Վեբ արտադրանքի ինտերֆեյսի ցուցադրական մակետ, որը միավորում է կարևոր ցուցանիշները, գործունեության պատկերը և պարզ նավիգացիան։",
    projectPulseFeature1: "Տվյալների հստակ տեսողական հիերարխիա",
    projectPulseFeature2: "Հարմարավետ բջջային և համակարգչային տարբերակ",
    projectPulseFeature3: "Ինտերֆեյսի ճկուն բաղադրիչներ",
    processLabel: "Գործընթացը",
    processTitle: "Գաղափարից գործարկում՝ չորս քայլով",
    step1Title: "Քննարկում ենք գաղափարը",
    step1Text: "Որոշում ենք նպատակները, լսարանը, անհրաժեշտ էջերը և ֆունկցիոնալությունը։",
    step2Title: "Համաձայնեցնում կառուցվածքը և դիզայնը",
    step2Text: "Կազմում ենք էջերի տրամաբանությունը և ստեղծում տեսողական ուղի՝ նախքան մշակումը։",
    step3Title: "Մշակում և ստուգում",
    step3Text: "Ստեղծում եմ կայքը, ապա ստուգում աշխատանքը, հարմարավետությունն ու ցուցադրումը տարբեր սարքերում։",
    step4Title: "Գործարկում և փոխանցում",
    step4Text: "Հրապարակում եմ պատրաստի կայքը և փոխանցում ձեզ՝ անհրաժեշտ հրահանգներով։",
    contactLabel: "Կապ",
    contactTitle: "Գաղափար ունե՞ք։ Եկե՛ք իրականացնենք այն։",
    contactLead: "Պատմեք խնդրի, նպատակների և ցանկալի ժամկետների մասին։ Ընտրեք կապի հարմար եղանակը։",
    contactPlaceholder: "Կոնտակտային տվյալները ժամանակավոր են։",
    footerAbout: "Պատվերով կայքերի դիզայն և մշակում բիզնեսի և անձնական նախագծերի համար։",
    footerLanguage: "Լեզու",
    copyright: "Բոլոր իրավունքները պաշտպանված են։",
    backTop: "Վերև",
    similarProject: "Քննարկել նմանատիպ նախագիծ"
  },

  ru: {
    metaTitle: "FORMA — Создание сайтов на заказ",
    metaDescription: "Современные, быстрые и удобные сайты для бизнеса, стартапов и личных проектов.",
    ogDescription: "Дизайн и разработка сайтов — от идеи до запуска.",
    skip: "Перейти к основному содержанию",
    navLabel: "Основная навигация",
    mobileNavLabel: "Мобильная навигация",
    footerNavLabel: "Навигация в подвале",
    languageLabel: "Выбрать язык",
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    closeDialog: "Закрыть",
    navServices: "Услуги",
    navAbout: "Преимущества",
    navWork: "Портфолио",
    navProcess: "Процесс",
    navContact: "Контакты",
    heroEyebrow: "Дизайн + разработка",
    heroTitle: "Создаю современные сайты под ваши идеи",
    heroLead: "Создаю сайты для бизнеса, стартапов, личных проектов и любых других задач — от первой идеи до запуска.",
    orderSite: "Заказать сайт",
    viewServices: "Посмотреть услуги",
    heroNote: "Дизайн, разработка и запуск — в одном процессе",
    explore: "Смотреть далее",
    heroFoot: "Бизнес / Стартап / Личный проект",
    servicesLabel: "Услуги",
    servicesTitle: "Сайт, который решает вашу задачу",
    servicesLead: "Каждый проект начинается с цели, а не с готового шаблона. Выберите направление или расскажите о своей идее.",
    service1Title: "Сайты для бизнеса и компаний",
    service1Text: "Представьте компанию, услуги и преимущества с помощью понятной структуры и дизайна, который укрепляет доверие.",
    service2Title: "Лендинги для товаров и услуг",
    service2Text: "Целевая страница, которая ясно раскрывает ценность предложения и помогает посетителю совершить нужное действие.",
    service3Title: "Сайты-портфолио",
    service3Text: "Персональный сайт для специалиста, творческой команды или коллекции работ с выразительной визуальной подачей.",
    service4Title: "Сайты для интернет-магазинов",
    service4Text: "Удобный каталог, карточка товара и простой путь к покупке — всё необходимое для продаж в интернете.",
    service5Title: "Сайты для стартапов и личных проектов",
    service5Text: "Гибкое решение для запуска и развития нового продукта, сообщества, блога или личной инициативы.",
    service6Title: "Индивидуальные сайты под задачу",
    service6Text: "Нестандартная структура и функциональность с учётом ваших целей, контента и потребностей аудитории.",
    discussTask: "Обсудить задачу",
    aboutLabel: "Почему я",
    aboutTitle: "Качество в каждой детали",
    aboutLead: "Создаю не только красивые, но и понятные, быстрые и удобные сайты. Вы всегда знаете, на каком этапе проект и что будет дальше.",
    seeProcess: "Посмотреть процесс",
    benefit1Title: "Индивидуальный подход",
    benefit1Text: "Решения строятся вокруг вашей задачи и целей, а не ограничиваются рамками готового шаблона.",
    benefit2Title: "Современный дизайн",
    benefit2Text: "Чистый визуальный язык, выразительная типографика и внимательная проработка каждой детали.",
    benefit3Title: "Удобство на любом устройстве",
    benefit3Text: "Сайт одинаково удобен на компьютере, планшете и телефоне — без потери качества взаимодействия.",
    benefit4Title: "Понятная навигация",
    benefit4Text: "Логичная структура помогает посетителю быстро находить нужную информацию и не теряться на сайте.",
    benefit5Title: "Оптимизация скорости",
    benefit5Text: "Лёгкий код и оптимизированные ресурсы для быстрой загрузки и комфортного пользовательского опыта.",
    benefit6Title: "Прозрачное общение",
    benefit6Text: "Обсуждаем прогресс, согласовываем важные решения и остаёмся на связи на всём пути до запуска.",
    workLabel: "Портфолио",
    workTitle: "Возможности решений — в действующих макетах",
    workLead: "Это демонстрационные проекты, созданные исключительно для того, чтобы показать подход к дизайну. Они не являются заказами клиентов.",
    demoProject: "Демонстрационный проект",
    projectMonoTitle: "MONO — архитектурная студия",
    projectMonoType: "Корпоративный сайт / Дизайн / Разработка",
    projectMonoDescription: "Лаконичный и выразительный макет сайта архитектурной студии, где на первом плане — проекты и визуальный язык пространства.",
    projectMonoFeature1: "Асимметричная editorial-композиция",
    projectMonoFeature2: "Крупная визуальная подача проектов",
    projectMonoFeature3: "Понятный путь к контактам",
    projectNovaTitle: "NŌVA — магазин товаров",
    projectNovaType: "Интернет-магазин / E-commerce",
    projectNovaDescription: "Деликатный и современный макет интернет-магазина, сфокусированный на товаре, материалах и удобстве покупки.",
    projectNovaFeature1: "Товар в центре главной страницы",
    projectNovaFeature2: "Наглядная структура каталога",
    projectNovaFeature3: "Простые и заметные кнопки покупки",
    projectPulseTitle: "PULSE — панель стартапа",
    projectPulseType: "Веб-продукт / UI / Прототип",
    projectPulseDescription: "Демонстрационный интерфейс веб-продукта, объединяющий ключевые показатели, картину активности и простую навигацию.",
    projectPulseFeature1: "Чёткая визуальная иерархия данных",
    projectPulseFeature2: "Удобная мобильная и десктопная версии",
    projectPulseFeature3: "Гибкие компоненты интерфейса",
    processLabel: "Процесс",
    processTitle: "От идеи до запуска — четыре шага",
    step1Title: "Обсуждаем идею и задачи",
    step1Text: "Определяем цели, аудиторию, необходимые страницы и функциональность будущего сайта.",
    step2Title: "Согласовываем структуру и дизайн",
    step2Text: "Выстраиваем логику страниц и создаём визуальное направление до начала разработки.",
    step3Title: "Разрабатываю и проверяю",
    step3Text: "Создаю сайт, затем проверяю функциональность, удобство и отображение на разных устройствах.",
    step4Title: "Публикую и передаю сайт",
    step4Text: "Публикую готовый сайт и передаю его вам вместе с необходимыми инструкциями.",
    contactLabel: "Контакты",
    contactTitle: "Есть идея? Давайте воплотим её в жизнь!",
    contactLead: "Расскажите о задаче, целях и желаемых сроках. Выберите удобный способ связи.",
    contactPlaceholder: "Контактные данные временные.",
    footerAbout: "Дизайн и разработка сайтов на заказ для бизнеса и личных проектов.",
    footerLanguage: "Язык",
    copyright: "Все права защищены.",
    backTop: "Наверх",
    similarProject: "Обсудить похожий проект"
  },

  en: {
    metaTitle: "FORMA — Custom Website Design & Development",
    metaDescription: "Modern, fast, and user-friendly websites for businesses, startups, and personal projects.",
    ogDescription: "Website design and development — from idea to launch.",
    skip: "Skip to main content",
    navLabel: "Main navigation",
    mobileNavLabel: "Mobile navigation",
    footerNavLabel: "Footer navigation",
    languageLabel: "Choose language",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    closeDialog: "Close",
    navServices: "Services",
    navAbout: "Why me",
    navWork: "Work",
    navProcess: "Process",
    navContact: "Contact",
    heroEyebrow: "Design + development",
    heroTitle: "I Build Modern Websites for Your Ideas",
    heroLead: "I create websites for businesses, startups, personal projects, and any other goal — from the first idea to launch.",
    orderSite: "Order a website",
    viewServices: "Explore services",
    heroNote: "Design, development, and launch — one seamless process",
    explore: "Explore",
    heroFoot: "Business / Startup / Personal project",
    servicesLabel: "Services",
    servicesTitle: "A website built around your goal",
    servicesLead: "Every project starts with a purpose, not a pre-made template. Choose a direction or tell me about your idea.",
    service1Title: "Websites for businesses and companies",
    service1Text: "Present your company, services, and strengths through a clear structure and a design that builds trust.",
    service2Title: "Landing pages for products and services",
    service2Text: "A focused page that communicates your value clearly and guides visitors toward the action that matters.",
    service3Title: "Portfolio websites",
    service3Text: "A personal website for a professional, creative team, or body of work with a strong visual point of view.",
    service4Title: "E-commerce websites",
    service4Text: "An intuitive catalogue, product pages, and a frictionless path to purchase — everything you need to sell online.",
    service5Title: "Websites for startups and personal projects",
    service5Text: "A flexible solution for launching and growing a new product, community, blog, or personal initiative.",
    service6Title: "Custom websites for specific needs",
    service6Text: "A tailored structure and functionality shaped around your goals, content, and audience — not a generic template.",
    discussTask: "Discuss your project",
    aboutLabel: "Why work with me",
    aboutTitle: "Quality in every detail",
    aboutLead: "I build websites that are not only beautiful, but clear, fast, and easy to use. You always know where the project stands and what comes next.",
    seeProcess: "See the process",
    benefit1Title: "A tailored approach",
    benefit1Text: "Every decision is shaped by your goals and challenges rather than the limits of an off-the-shelf template.",
    benefit2Title: "Modern, thoughtful design",
    benefit2Text: "A clean visual language, expressive typography, and careful attention to every detail.",
    benefit3Title: "Effortless on any device",
    benefit3Text: "Your website feels natural on desktop, tablet, and mobile, with no compromise in usability.",
    benefit4Title: "Clear navigation",
    benefit4Text: "A logical structure helps visitors find what they need quickly and move through the site with confidence.",
    benefit5Title: "Built for speed",
    benefit5Text: "Lightweight code and optimized assets deliver fast loading and a smoother user experience.",
    benefit6Title: "Transparent communication",
    benefit6Text: "We discuss progress, align on key decisions, and stay in touch throughout the journey to launch.",
    workLabel: "Portfolio",
    workTitle: "Design possibilities, shown in working mockups",
    workLead: "These are demonstration projects created solely to show my design approach. They are not presented as client commissions.",
    demoProject: "Demonstration project",
    projectMonoTitle: "MONO — architecture studio",
    projectMonoType: "Corporate website / Design / Development",
    projectMonoDescription: "A restrained yet expressive concept for an architecture studio, putting projects and the visual language of space at the forefront.",
    projectMonoFeature1: "Asymmetric editorial composition",
    projectMonoFeature2: "Large-scale visual project storytelling",
    projectMonoFeature3: "A clear path to the contact section",
    projectNovaTitle: "NŌVA — curated goods store",
    projectNovaType: "E-commerce / Online store",
    projectNovaDescription: "A refined, contemporary online store concept focused on the product, its materials, and an effortless shopping experience.",
    projectNovaFeature1: "Product-led homepage composition",
    projectNovaFeature2: "A clear and intuitive catalogue structure",
    projectNovaFeature3: "Simple, visible purchase actions",
    projectPulseTitle: "PULSE — startup dashboard",
    projectPulseType: "Web product / UI / Prototype",
    projectPulseDescription: "A demonstration web product interface that brings key metrics, activity patterns, and straightforward navigation together.",
    projectPulseFeature1: "A clear visual hierarchy for data",
    projectPulseFeature2: "Comfortable mobile and desktop layouts",
    projectPulseFeature3: "Flexible interface components",
    processLabel: "Process",
    processTitle: "From idea to launch in four steps",
    step1Title: "We discuss the idea and goals",
    step1Text: "We define your objectives, audience, required pages, and the functionality your website needs.",
    step2Title: "We align on structure and design",
    step2Text: "We map out the page logic and establish the visual direction before development begins.",
    step3Title: "I build and test the website",
    step3Text: "I develop the site, then test its functionality, usability, and appearance across different devices.",
    step4Title: "I launch and hand it over",
    step4Text: "I publish the finished website and hand it over to you with all the necessary guidance.",
    contactLabel: "Contact",
    contactTitle: "Have an idea? Let’s bring it to life!",
    contactLead: "Tell me about your task, goals, and preferred timeline. Choose the most convenient way to get in touch.",
    contactPlaceholder: "These contact details are placeholders.",
    footerAbout: "Custom website design and development for businesses and personal projects.",
    footerLanguage: "Language",
    copyright: "All rights reserved.",
    backTop: "Back to top",
    similarProject: "Discuss a similar project"
  }
};

const projectKeys = {
  mono: "Mono",
  nova: "Nova",
  pulse: "Pulse"
};

let currentLanguage = "hy";
let currentProject = null;
let lastFocusedElement = null;

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const dialog = document.getElementById("project-dialog");
const dialogPreview = document.getElementById("dialog-preview");
const dialogTitle = document.getElementById("dialog-title");
const dialogDescription = document.getElementById("dialog-description");
const dialogFeatures = document.getElementById("dialog-features");

function getSavedLanguage() {
  try {
    const saved = localStorage.getItem("forma-language");
    return Object.hasOwn(translations, saved) ? saved : "hy";
  } catch {
    return "hy";
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem("forma-language", language);
  } catch {
    // The language switch still works when storage is unavailable.
  }
}

function applyLanguage(language) {
  if (!Object.hasOwn(translations, language)) return;
  currentLanguage = language;
  const dictionary = translations[language];

  document.documentElement.lang = language;
  document.title = dictionary.metaTitle;
  document.querySelector('meta[name="description"]').setAttribute("content", dictionary.metaDescription);
  document.querySelector('meta[property="og:title"]').setAttribute("content", dictionary.metaTitle);
  document.querySelector('meta[property="og:description"]').setAttribute("content", dictionary.ogDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key] !== undefined) element.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    if (dictionary[key] !== undefined) element.setAttribute("aria-label", dictionary[key]);
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const menuIsOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-label", menuIsOpen ? dictionary.menuClose : dictionary.menuOpen);

  if (currentProject && dialog.open) renderDialogContent(currentProject);
  saveLanguage(language);
}

function setMenu(open, returnFocus = false) {
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", translations[currentLanguage][open ? "menuClose" : "menuOpen"]);
  mobileMenu.hidden = !open;
  header.classList.toggle("menu-visible", open);
  document.body.classList.toggle("menu-open", open);

  if (open) {
    mobileMenu.querySelector("a")?.focus();
  } else if (returnFocus) {
    menuToggle.focus();
  }
}

menuToggle.addEventListener("click", () => {
  setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024 && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenu(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenu(false, true);
  }
});

let scrollTicking = false;
function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
  scrollTicking = false;
}
window.addEventListener("scroll", () => {
  if (!scrollTicking) {
    window.requestAnimationFrame(updateHeader);
    scrollTicking = true;
  }
}, { passive: true });
updateHeader();

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const heroVisual = document.getElementById("hero-visual");
const scene = document.getElementById("scene");
const canParallax = window.matchMedia("(hover: hover) and (pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (canParallax) {
  heroVisual.addEventListener("pointermove", (event) => {
    const bounds = heroVisual.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    scene.style.setProperty("--rx", `${4 - y * 12}deg`);
    scene.style.setProperty("--ry", `${-8 + x * 16}deg`);
  });
  heroVisual.addEventListener("pointerleave", () => {
    scene.style.setProperty("--rx", "4deg");
    scene.style.setProperty("--ry", "-8deg");
  });
}

function renderDialogContent(project) {
  const suffix = projectKeys[project];
  const dictionary = translations[currentLanguage];
  dialogTitle.textContent = dictionary[`project${suffix}Title`];
  dialogDescription.textContent = dictionary[`project${suffix}Description`];
  dialogFeatures.replaceChildren();

  for (let index = 1; index <= 3; index += 1) {
    const item = document.createElement("li");
    item.textContent = dictionary[`project${suffix}Feature${index}`];
    dialogFeatures.append(item);
  }
}

function openProject(project, trigger) {
  const sourceCard = document.querySelector(`[data-project="${project}"]`);
  if (!sourceCard) return;

  currentProject = project;
  lastFocusedElement = trigger;
  renderDialogContent(project);
  dialogPreview.replaceChildren(sourceCard.querySelector(".project-visual").cloneNode(true));
  document.body.classList.add("dialog-open");
  dialog.showModal();
}

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => openProject(button.dataset.project, button));
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  const inside = event.clientX >= bounds.left && event.clientX <= bounds.right && event.clientY >= bounds.top && event.clientY <= bounds.bottom;
  if (!inside) dialog.close();
});

dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  currentProject = null;
  lastFocusedElement?.focus();
});

document.getElementById("dialog-contact").addEventListener("click", () => {
  dialog.close();
});

function applyContacts() {
  Object.entries(CONTACTS).forEach(([channel, contact]) => {
    const link = document.getElementById(`contact-${channel}`);
    const value = document.getElementById(`${channel}-value`);
    link.href = contact.url;
    value.textContent = contact.value;
  });
}

document.getElementById("current-year").textContent = new Date().getFullYear();
applyContacts();
applyLanguage(getSavedLanguage());

export type CaseLang = "en" | "uk" | "pl" | "ru";

export type CaseStudySection = {
  id: string;
  title: string;
  kicker: string;
  paragraphs: string[];
  bullets?: string[];
};

export type CaseStudyCopy = {
  htmlLang: string;
  languageName: string;
  labels: {
    eyebrow: string;
    title: string;
    subtitle: string;
    switcher: string;
    contents: string;
    summary: string;
    viewWebsite: string;
    keyDecision: string;
    localizationNote: string;
    navigation: string;
  };
  navItems: string[];
  metrics: { label: string; value: string }[];
  sections: CaseStudySection[];
};

export const languageOptions: { code: CaseLang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "uk", label: "UA" },
  { code: "pl", label: "PL" },
  { code: "ru", label: "RU" },
];

export const caseStudyCopy: Record<CaseLang, CaseStudyCopy> = {
  en: {
    htmlLang: "en",
    languageName: "English",
    labels: {
      eyebrow: "UX Case Study",
      title: "Scrolling becomes diving.",
      subtitle:
        "Pelagea explores how a luxury e-commerce interface can become an emotional ocean descent instead of a predictable product catalogue.",
      switcher: "Language",
      contents: "Contents",
      summary: "Project Summary",
      viewWebsite: "View Website",
      keyDecision: "Key UX Decision",
      localizationNote:
        "Language changes happen in place, so the reading position is preserved.",
      navigation: "Case study navigation",
    },
    navItems: ["Home", "About", "Journal", "Contact", "UX Case Study"],
    metrics: [
      { label: "Format", value: "Portfolio concept" },
      { label: "Audience", value: "Collectors, museums, recruiters" },
      { label: "Interaction", value: "Scroll as descent" },
      { label: "Languages", value: "EN / UA / PL / RU" },
    ],
    sections: [
      {
        id: "overview",
        title: "Project Overview",
        kicker: "Luxury e-commerce as an immersive narrative.",
        paragraphs: [
          "Pelagea is a conceptual luxury e-commerce website for rare marine species. It was created as a portfolio case study to explore how an online store can become more than a catalogue.",
          "The main idea is immersion. The user starts at the ocean surface, surrounded by light and openness. As they scroll, the atmosphere becomes deeper, darker and more mysterious. Each section represents a different ocean depth and introduces a new level of rarity.",
          "Pelagea is not a pet store. It is imagined as a premium brand for collectors, museums, private aquariums and people who value rarity, beauty and exclusivity.",
        ],
      },
      {
        id: "core-idea",
        title: "Core UX Idea",
        kicker: "The central rule is simple: scrolling equals diving.",
        paragraphs: [
          "On most websites, scrolling is only a technical action. In Pelagea, scrolling becomes part of the story. Every movement down the page gives the feeling of going deeper underwater.",
          "The deeper the user scrolls, the rarer and more mysterious the species become. Visual depth supports product hierarchy, while the emotional journey supports luxury positioning.",
          "The pace is intentionally slow and calm. Luxury interfaces should not feel rushed; they need space, silence and anticipation.",
        ],
      },
      {
        id: "problem",
        title: "Problem",
        kicker: "A clear shopping structure can still feel ordinary.",
        paragraphs: [
          "Most e-commerce websites use the same structure: hero section, product grid, filters, product cards and checkout buttons. This is understandable, but often predictable.",
          "The challenge was to design a shopping experience that remains clear while feeling less ordinary and more memorable.",
        ],
        bullets: [
          "How can a product catalogue feel immersive without becoming confusing?",
          "How can visual storytelling support navigation instead of replacing it?",
          "How can scrolling become meaningful?",
          "How can rare products be presented as discoveries rather than simple items for sale?",
        ],
      },
      {
        id: "goals",
        title: "Goals",
        kicker: "Build an immersive luxury experience around ocean descent.",
        paragraphs: [
          "The main goal was to connect interaction, hierarchy and emotion. The website needed to feel premium, cinematic and calm while still allowing users to understand the collection.",
        ],
        bullets: [
          "Make scrolling feel meaningful.",
          "Connect depth, rarity and product discovery.",
          "Keep the interface elegant and readable.",
          "Avoid overwhelming users with too many products at once.",
          "Balance emotional storytelling with functional browsing.",
          "Make the project strong enough for a UX/UI portfolio.",
        ],
      },
      {
        id: "audience",
        title: "Target Audience",
        kicker: "One interface for collectors, curators and portfolio viewers.",
        paragraphs: [
          "Luxury collectors are interested in rarity, exclusivity and emotional value. They are not looking for the cheapest option; they want something carefully selected.",
          "Museums and private aquarium curators need trust, structure and information about origin, environment, care requirements and credibility.",
          "Recruiters and designers viewing the work as a portfolio piece need to see visual direction, interaction thinking, hierarchy and storytelling.",
        ],
      },
      {
        id: "journey",
        title: "User Journey",
        kicker: "The page follows the natural logic of an ocean descent.",
        paragraphs: [
          "The journey begins at the surface: bright, open and inviting. The user receives the first impression of the brand and understands that Pelagea is a premium, unusual concept.",
          "The shallow and open ocean stages introduce the collection. Products appear as discoveries within the environment, while color and motion become deeper and more focused.",
          "The deep ocean and abyss become the emotional climax. The rarest species appear in the darkest, quietest sections, making the user feel they have reached something hidden and valuable.",
        ],
      },
      {
        id: "architecture",
        title: "Information Architecture",
        kicker: "Simple pages, clear roles.",
        paragraphs: [
          "The website structure is intentionally simple: Home, About, Journal, Contact and UX Case Study.",
          "The Home page is the core immersive experience. About gives brand context, Journal adds editorial credibility, Contact supports private requests, and the UX Case Study explains the design logic for portfolio viewers.",
        ],
      },
      {
        id: "home-logic",
        title: "Home Page UX Logic",
        kicker: "A vertical narrative instead of a flat catalogue.",
        paragraphs: [
          "The first section creates curiosity before explaining everything. The next section gives context so the concept does not feel purely decorative.",
          "The collection is divided into ocean depth zones. This creates a natural progression and makes each group of products easier to understand.",
          "The final CTA appears at the deepest point of the page. After the user completes the descent, the contact action feels more meaningful.",
        ],
      },
      {
        id: "cards",
        title: "Product Card UX",
        kicker: "Cards should feel like discoveries.",
        paragraphs: [
          "Each card communicates the species name, depth, emotional value and price without overwhelming the user with scientific detail.",
          "This supports luxury positioning. Controlled information creates curiosity and gives each species more presence.",
        ],
      },
      {
        id: "storytelling",
        title: "Storytelling Strategy",
        kicker: "The story is built through movement, not only text.",
        paragraphs: [
          "Pelagea uses scroll depth, color, spacing, motion and product order as storytelling tools. Going down means going deeper, which makes the metaphor intuitive.",
          "The structure also supports hierarchy: brighter zones feel more accessible, while darker zones feel rarer and more exclusive.",
        ],
      },
      {
        id: "hierarchy",
        title: "Visual Hierarchy",
        kicker: "Large atmosphere, focused details.",
        paragraphs: [
          "Large headings introduce each stage of the journey. Short paragraphs explain the meaning of each depth zone. Product cards provide focused information.",
          "The interface avoids visual noise. It does not try to show everything at once, because premium digital experiences often feel stronger when elements have space to breathe.",
        ],
      },
      {
        id: "color",
        title: "Color UX",
        kicker: "Color communicates depth and progression.",
        paragraphs: [
          "Light blue represents the surface and first contact with the brand. Medium blue represents exploration. Dark blue represents mystery and focus. Almost black represents the abyss, rarity and exclusivity.",
          "As the user scrolls, the background becomes darker. This gives constant feedback about where the user is in the journey, even before reading section titles.",
        ],
      },
      {
        id: "motion",
        title: "Motion UX",
        kicker: "Motion should feel like underwater movement.",
        paragraphs: [
          "Animations are intentionally slow and subtle. Fast movement would break the mood and make the experience feel cheaper.",
          "Useful motion includes soft fade-ins, slow parallax, floating particles, gentle hover states, subtle image movement and smooth section transitions.",
          "Motion should never hide important information. It guides attention and reinforces descent, while reduced-motion users still receive a complete experience.",
        ],
      },
      {
        id: "accessibility",
        title: "Accessibility",
        kicker: "Accessibility belongs inside luxury.",
        paragraphs: [
          "Text needs to remain readable over light and dark backgrounds. Buttons and links need clear hover and focus states. The structure should use semantic HTML and keyboard-friendly navigation.",
          "Images need meaningful alt text. Animations should support the experience, but they should not be required to understand it.",
          "A premium interface should feel controlled, comfortable and easy to use.",
        ],
      },
      {
        id: "responsive",
        title: "Responsive UX",
        kicker: "The descent must work on every viewport.",
        paragraphs: [
          "Desktop can use wide layouts, large images and cinematic spacing. Tablet layouts remain atmospheric but become more compact.",
          "On mobile, clarity becomes the priority. The descent still appears through color progression, section order and vertical rhythm, while cards remain easy to read and tap.",
        ],
      },
      {
        id: "content",
        title: "Content Strategy",
        kicker: "Editorial language instead of shop language.",
        paragraphs: [
          "Pelagea should not sound like a regular store. It avoids loud phrases such as buy now, best deal or limited offer.",
          "The preferred tone is calm and premium: Explore the collection, Discover rare species, Request private access, Dive deeper.",
        ],
      },
      {
        id: "multilingual",
        title: "Multilingual Requirement",
        kicker: "Only the UX Case Study needs localization.",
        paragraphs: [
          "The UX Case Study page is available in English, Ukrainian, Polish and Russian. English is the default language.",
          "The switcher translates headings, paragraphs, labels, navigation items, section titles and small UI descriptions. The goal is to show localization thinking, not placeholder translation.",
        ],
      },
      {
        id: "localization",
        title: "Localization UX",
        kicker: "Localization affects layout, not only words.",
        paragraphs: [
          "Users can switch language at any point on the page. The current language is clearly visible, and changing language does not reset the user's reading position.",
          "The layout supports longer Ukrainian, Polish and Russian text without breaking. This matters because localization changes spacing, line length and component flexibility.",
        ],
      },
      {
        id: "challenges",
        title: "Challenges",
        kicker: "The main challenge was balancing immersion with usability.",
        paragraphs: [
          "If the website becomes too cinematic, users may enjoy the visuals but lose clarity. If it becomes too functional, the ocean descent concept becomes weak.",
          "The solution was to keep the structure simple while making the atmosphere strong. Product cards remain clear, motion stays subtle and luxury is expressed through restraint instead of decoration.",
        ],
      },
      {
        id: "solution",
        title: "Final Solution",
        kicker: "A slow descent from light into darkness.",
        paragraphs: [
          "The final solution is an immersive luxury website where the user discovers rare marine species through a slow descent into the ocean.",
          "The collection becomes more exclusive as the environment becomes deeper. The interaction supports the story, the visuals support hierarchy and the content supports brand positioning.",
        ],
      },
      {
        id: "decisions",
        title: "Key UX Decisions",
        kicker: "The project is built around a few clear choices.",
        paragraphs: [
          "Scrolling became the main interaction. Products were organized by depth instead of standard categories. Color progression became navigation feedback.",
          "Product information stays short at first, About and Journal deepen the brand world, and the UX Case Study is multilingual to make the process accessible to a wider audience.",
        ],
      },
      {
        id: "demonstrates",
        title: "What This Project Demonstrates",
        kicker: "Visual design, UX strategy and storytelling in one concept.",
        paragraphs: [
          "Pelagea demonstrates UX strategy, information architecture, interaction design, visual hierarchy, motion thinking, responsive design, accessibility awareness, content structure, localization planning and brand experience design.",
          "It shows how a simple interaction pattern can become meaningful when it supports the concept.",
        ],
      },
      {
        id: "conclusion",
        title: "Conclusion",
        kicker: "Strong UX can make an interaction meaningful.",
        paragraphs: [
          "Pelagea turns a basic user action into a narrative experience. Scrolling becomes diving, products become discoveries, depth becomes hierarchy and atmosphere becomes part of usability.",
          "The final result is a luxury digital experience that feels calm, memorable and conceptually complete.",
        ],
      },
    ],
  },
  uk: {
    htmlLang: "uk",
    languageName: "Українська",
    labels: {
      eyebrow: "UX-кейс",
      title: "Скрол стає зануренням.",
      subtitle:
        "Pelagea досліджує, як інтерфейс luxury e-commerce може стати емоційним спуском в океан, а не звичайним каталогом товарів.",
      switcher: "Мова",
      contents: "Зміст",
      summary: "Коротко про проєкт",
      viewWebsite: "Переглянути сайт",
      keyDecision: "Ключове UX-рішення",
      localizationNote:
        "Мова змінюється на місці, тому позиція читання не скидається.",
      navigation: "Навігація кейсом",
    },
    navItems: ["Головна", "Про бренд", "Журнал", "Контакти", "UX-кейс"],
    metrics: [
      { label: "Формат", value: "Портфоліо-концепт" },
      { label: "Аудиторія", value: "Колекціонери, музеї, рекрутери" },
      { label: "Взаємодія", value: "Скрол як занурення" },
      { label: "Мови", value: "EN / UA / PL / RU" },
    ],
    sections: [
      {
        id: "overview",
        title: "Огляд проєкту",
        kicker: "Luxury e-commerce як імерсивна розповідь.",
        paragraphs: [
          "Pelagea - це концептуальний сайт luxury e-commerce для рідкісних морських видів. Проєкт створено як портфоліо-кейс, щоб показати, як інтернет-магазин може бути більшим за каталог.",
          "Головна ідея - занурення. Користувач починає на поверхні океану, у світлі та просторі. Далі, під час скролу, атмосфера стає глибшою, темнішою і загадковішою.",
          "Pelagea не є зоомагазином. Це уявний преміальний бренд для колекціонерів, музеїв, приватних акваріумів і людей, які цінують рідкість, красу та ексклюзивність.",
        ],
      },
      {
        id: "core-idea",
        title: "Основна UX-ідея",
        kicker: "Головне правило просте: скрол дорівнює зануренню.",
        paragraphs: [
          "На більшості сайтів скрол - лише технічна дія. У Pelagea він стає частиною історії: кожен рух вниз відчувається як рух глибше під воду.",
          "Чим нижче користувач спускається, тим рідкіснішими і таємничішими стають види. Візуальна глибина підтримує ієрархію продуктів, а емоційна подорож - luxury-позиціонування.",
          "Досвід має бути повільним і спокійним. Преміальний інтерфейс не повинен поспішати; йому потрібні простір, тиша і очікування.",
        ],
      },
      {
        id: "problem",
        title: "Проблема",
        kicker: "Зрозуміла структура магазину часто виглядає надто передбачувано.",
        paragraphs: [
          "Більшість e-commerce сайтів мають однакову логіку: hero-секція, сітка товарів, фільтри, картки і кнопки покупки. Це ясно, але для luxury-концепту може бути недостатньо емоційно.",
          "Завданням було створити досвід покупки, який залишається зрозумілим, але не відчувається звичайним.",
        ],
        bullets: [
          "Як зробити каталог імерсивним, але не заплутаним?",
          "Як сторітелінг може підтримувати навігацію, а не замінювати її?",
          "Як надати скролу сенс?",
          "Як показати рідкісні види як відкриття, а не просто товари?",
        ],
      },
      {
        id: "goals",
        title: "Цілі",
        kicker: "Побудувати luxury-досвід навколо метафори спуску в океан.",
        paragraphs: [
          "Головна мета - поєднати взаємодію, ієрархію та емоцію. Сайт має бути преміальним, кінематографічним і спокійним, але водночас зрозумілим.",
        ],
        bullets: [
          "Зробити скрол осмисленим.",
          "Пов'язати глибину, рідкість і відкриття продуктів.",
          "Зберегти елегантність і читабельність.",
          "Не перевантажувати користувача кількістю товарів.",
          "Збалансувати сторітелінг і функціональний перегляд.",
          "Зробити проєкт сильним UX/UI-кейсом для портфоліо.",
        ],
      },
      {
        id: "audience",
        title: "Цільова аудиторія",
        kicker: "Один інтерфейс для колекціонерів, кураторів і глядачів портфоліо.",
        paragraphs: [
          "Колекціонери шукають рідкість, ексклюзивність і емоційну цінність. Для них важливе відчуття унікального вибору.",
          "Музеї та куратори приватних акваріумів потребують довіри, структури, інформації про походження, середовище і догляд.",
          "Рекрутери та дизайнери, які дивляться проєкт як портфоліо, мають побачити сильний візуальний напрям, UX-мислення, ієрархію та сторітелінг.",
        ],
      },
      {
        id: "journey",
        title: "Користувацька подорож",
        kicker: "Сторінка повторює природну логіку океанського спуску.",
        paragraphs: [
          "Подорож починається на поверхні: світло, простір і перше враження про преміальний незвичайний бренд.",
          "На мілководді та у відкритому океані користувач починає досліджувати колекцію. Продукти з'являються як відкриття всередині середовища.",
          "Глибокий океан і безодня стають емоційною кульмінацією. Найрідкісніші види з'являються в найтемніших і найтихіших секціях.",
        ],
      },
      {
        id: "architecture",
        title: "Інформаційна архітектура",
        kicker: "Прості сторінки з чіткими ролями.",
        paragraphs: [
          "Структура сайту навмисно проста: Головна, Про бренд, Журнал, Контакти та UX-кейс.",
          "Головна сторінка є основним імерсивним досвідом. About пояснює бренд, Journal додає редакційну довіру, Contact підтримує приватні запити, а UX Case Study показує логіку дизайну.",
        ],
      },
      {
        id: "home-logic",
        title: "UX-логіка головної сторінки",
        kicker: "Вертикальна розповідь замість плаского каталогу.",
        paragraphs: [
          "Перший екран створює цікавість, але не пояснює все одразу. Наступна секція дає контекст, щоб концепт не здавався лише декоративним.",
          "Колекція поділена на зони океанської глибини. Це створює природну прогресію і допомагає зрозуміти групи продуктів.",
          "Фінальний CTA розташовано в найглибшій точці сторінки, тому дія контакту відчувається більш значущою.",
        ],
      },
      {
        id: "cards",
        title: "UX карток продуктів",
        kicker: "Картки мають відчуватися як відкриття.",
        paragraphs: [
          "Кожна картка швидко показує назву виду, глибину, емоційну цінність і ціну, не перевантажуючи користувача деталями.",
          "Це підтримує luxury-позиціонування: контрольована кількість інформації створює цікавість і додає продукту присутності.",
        ],
      },
      {
        id: "storytelling",
        title: "Стратегія сторітелінгу",
        kicker: "Історія створюється рухом, а не тільки текстом.",
        paragraphs: [
          "Pelagea використовує глибину скролу, колір, відступи, motion і порядок продуктів як інструменти розповіді.",
          "Це також підтримує ієрархію: світліші зони здаються доступнішими, а темніші - рідкіснішими й ексклюзивнішими.",
        ],
      },
      {
        id: "hierarchy",
        title: "Візуальна ієрархія",
        kicker: "Велика атмосфера, сфокусовані деталі.",
        paragraphs: [
          "Великі заголовки вводять етапи подорожі, короткі тексти пояснюють зони, а картки дають зібрану інформацію.",
          "Інтерфейс уникає шуму і не намагається показати все одразу. Простір допомагає відчути преміальність.",
        ],
      },
      {
        id: "color",
        title: "Колір як UX",
        kicker: "Колір передає глибину і прогрес.",
        paragraphs: [
          "Світло-блакитний означає поверхню і перший контакт. Середній синій - дослідження. Темний синій - фокус і загадковість. Майже чорний - безодню, рідкість і ексклюзивність.",
          "Під час скролу фон темніє. Це дає постійний зворотний зв'язок про місце користувача в подорожі.",
        ],
      },
      {
        id: "motion",
        title: "Motion UX",
        kicker: "Рух має відчуватися як рух під водою.",
        paragraphs: [
          "Анімації навмисно повільні та делікатні. Швидкий рух зруйнував би настрій і зробив би досвід дешевшим.",
          "Корисні приклади: м'які появи, повільний паралакс, частинки, ніжні hover-стани, легке збільшення зображень і плавні переходи.",
          "Motion не повинен приховувати важливу інформацію. Для користувачів із reduced motion досвід залишається повним.",
        ],
      },
      {
        id: "accessibility",
        title: "Доступність",
        kicker: "Доступність є частиною premium-досвіду.",
        paragraphs: [
          "Текст має залишатися читабельним на світлому й темному фоні. Кнопки та посилання потребують зрозумілих hover і focus станів.",
          "Зображення мають змістовний alt-текст, структура використовує семантичний HTML, а анімації не є необхідними для розуміння контенту.",
          "Преміальний інтерфейс має бути контрольованим, комфортним і легким у використанні.",
        ],
      },
      {
        id: "responsive",
        title: "Адаптивний UX",
        kicker: "Занурення має працювати на будь-якому екрані.",
        paragraphs: [
          "На desktop можна використовувати широкі layouts, великі зображення і кінематографічні відступи. На tablet усе стає компактнішим.",
          "На mobile головне - ясність. Занурення зберігається через колір, порядок секцій і вертикальний ритм, а картки легко читати й натискати.",
        ],
      },
      {
        id: "content",
        title: "Контент-стратегія",
        kicker: "Редакційна мова замість магазинних гасел.",
        paragraphs: [
          "Pelagea не має звучати як звичайний магазин. Варто уникати фраз на кшталт buy now, best deal або limited offer.",
          "Кращий тон: Explore the collection, Discover rare species, Request private access, Dive deeper.",
        ],
      },
      {
        id: "multilingual",
        title: "Мультимовна вимога",
        kicker: "Локалізація потрібна лише для UX Case Study.",
        paragraphs: [
          "Сторінка UX Case Study доступна англійською, українською, польською та російською. Англійська є мовою за замовчуванням.",
          "Перемикач перекладає заголовки, абзаци, labels, навігаційні елементи, назви секцій і дрібні UI-описи.",
        ],
      },
      {
        id: "localization",
        title: "UX локалізації",
        kicker: "Локалізація змінює не тільки слова, а й layout.",
        paragraphs: [
          "Користувач може змінити мову в будь-який момент. Поточна мова видима, а перемикання не скидає позицію на сторінці.",
          "Layout підтримує довший український, польський і російський текст без поломок. Це важливо для реального international UX.",
        ],
      },
      {
        id: "challenges",
        title: "Виклики",
        kicker: "Найскладніше - баланс між імерсивністю та зручністю.",
        paragraphs: [
          "Якщо сайт стане надто кінематографічним, користувач може втратити ясність. Якщо стане надто функціональним, концепт занурення ослабне.",
          "Рішенням стала проста структура і сильна атмосфера. Картки залишаються зрозумілими, рух - делікатним, а luxury передається через стриманість.",
        ],
      },
      {
        id: "solution",
        title: "Фінальне рішення",
        kicker: "Повільний спуск від світла до темряви.",
        paragraphs: [
          "Фінальне рішення - імерсивний luxury-сайт, де користувач відкриває рідкісні морські види через спуск в океан.",
          "Колекція стає ексклюзивнішою разом із глибиною. Взаємодія підтримує історію, візуал - ієрархію, а контент - позиціонування бренду.",
        ],
      },
      {
        id: "decisions",
        title: "Ключові UX-рішення",
        kicker: "Проєкт тримається на кількох чітких рішеннях.",
        paragraphs: [
          "Скрол став головною взаємодією. Продукти організовані за глибиною, а не стандартними категоріями. Зміна кольору стала навігаційним фідбеком.",
          "Інформація в картках спочатку коротка, About і Journal поглиблюють світ бренду, а multilingual UX Case Study робить процес доступним ширшій аудиторії.",
        ],
      },
      {
        id: "demonstrates",
        title: "Що демонструє проєкт",
        kicker: "Візуальний дизайн, UX-стратегія і сторітелінг в одному концепті.",
        paragraphs: [
          "Pelagea демонструє UX-стратегію, інформаційну архітектуру, interaction design, візуальну ієрархію, motion thinking, responsive design, accessibility awareness, content structure, localization planning і brand experience design.",
          "Проєкт показує, як проста взаємодія стає значущою, якщо вона підтримує концепцію.",
        ],
      },
      {
        id: "conclusion",
        title: "Висновок",
        kicker: "Сильний UX робить взаємодію осмисленою.",
        paragraphs: [
          "Pelagea перетворює базову дію користувача на наративний досвід. Скрол стає зануренням, продукти - відкриттями, глибина - ієрархією, а атмосфера - частиною usability.",
          "Фінальний результат - спокійний, пам'ятний і концептуально цілісний luxury digital experience.",
        ],
      },
    ],
  },
  pl: {
    htmlLang: "pl",
    languageName: "Polski",
    labels: {
      eyebrow: "Studium UX",
      title: "Scrollowanie staje się nurkowaniem.",
      subtitle:
        "Pelagea pokazuje, jak luksusowy e-commerce może stać się emocjonalnym zejściem w ocean zamiast przewidywalnym katalogiem produktów.",
      switcher: "Język",
      contents: "Spis treści",
      summary: "Podsumowanie projektu",
      viewWebsite: "Zobacz stronę",
      keyDecision: "Kluczowa decyzja UX",
      localizationNote:
        "Zmiana języka odbywa się w miejscu, więc pozycja czytania zostaje zachowana.",
      navigation: "Nawigacja case study",
    },
    navItems: ["Home", "O marce", "Journal", "Kontakt", "Studium UX"],
    metrics: [
      { label: "Format", value: "Koncept portfolio" },
      { label: "Odbiorcy", value: "Kolekcjonerzy, muzea, rekruterzy" },
      { label: "Interakcja", value: "Scroll jako zejście" },
      { label: "Języki", value: "EN / UA / PL / RU" },
    ],
    sections: [
      {
        id: "overview",
        title: "Opis projektu",
        kicker: "Luksusowy e-commerce jako immersyjna narracja.",
        paragraphs: [
          "Pelagea to konceptualna strona luxury e-commerce dla rzadkich gatunków morskich. Projekt powstał jako case study do portfolio, aby pokazać, że sklep online może być czymś więcej niż katalogiem.",
          "Główna idea to immersja. Użytkownik zaczyna na powierzchni oceanu, w świetle i przestrzeni. Wraz ze scrollowaniem atmosfera staje się głębsza, ciemniejsza i bardziej tajemnicza.",
          "Pelagea nie jest sklepem zoologicznym. To fikcyjna marka premium dla kolekcjonerów, muzeów, prywatnych akwariów i osób ceniących rzadkość, piękno oraz ekskluzywność.",
        ],
      },
      {
        id: "core-idea",
        title: "Główna idea UX",
        kicker: "Prosta zasada: scrollowanie oznacza nurkowanie.",
        paragraphs: [
          "Na większości stron scrollowanie jest tylko techniczną czynnością. W Pelagea staje się częścią historii: każdy ruch w dół daje wrażenie zejścia głębiej pod wodę.",
          "Im niżej schodzi użytkownik, tym rzadsze i bardziej tajemnicze stają się gatunki. Głębia wizualna wspiera hierarchię produktów, a emocjonalna podróż wzmacnia pozycjonowanie luxury.",
          "Tempo jest celowo wolne i spokojne. Interfejs premium potrzebuje przestrzeni, ciszy i oczekiwania.",
        ],
      },
      {
        id: "problem",
        title: "Problem",
        kicker: "Czytelna struktura sklepu czesto bywa przewidywalna.",
        paragraphs: [
          "Typowy e-commerce sklada sie z hero, siatki produktow, filtrow, kart i przyciskow zakupu. To jest jasne, ale dla luksusowego konceptu moze byc zbyt zwyczajne.",
          "Wyzwanie polegalo na stworzeniu doswiadczenia zakupowego, ktore pozostaje zrozumiale, ale nie traci emocjonalnej sily.",
        ],
        bullets: [
          "Jak sprawic, aby katalog byl immersyjny, ale nie mylacy?",
          "Jak storytelling wizualny moze wspierac nawigacje?",
          "Jak nadac scrollowaniu znaczenie?",
          "Jak prezentowac rzadkie produkty jako odkrycia, a nie zwykle pozycje na sprzedaz?",
        ],
      },
      {
        id: "goals",
        title: "Cele",
        kicker: "Stworzyc luksusowe doswiadczenie wokol metafory zejscia w ocean.",
        paragraphs: [
          "Glownym celem bylo polaczenie interakcji, hierarchii i emocji. Strona miala byc premium, filmowa i spokojna, ale nadal zrozumiala.",
        ],
        bullets: [
          "Nadac scrollowaniu sens.",
          "Polaczyc glebokosc, rzadkosc i odkrywanie produktow.",
          "Zachowac elegancje i czytelnosc.",
          "Nie przeciazac uzytkownika liczba produktow.",
          "Zbalansowac storytelling i funkcjonalne przegladanie.",
          "Zbudowac mocny projekt do portfolio UX/UI.",
        ],
      },
      {
        id: "audience",
        title: "Grupa docelowa",
        kicker: "Jeden interfejs dla kolekcjonerow, kuratorow i widzow portfolio.",
        paragraphs: [
          "Kolekcjonerzy luksusowi szukaja rzadkosci, ekskluzywnosci i wartosci emocjonalnej. Nie interesuje ich najnizsza cena, ale unikalny, starannie wybrany obiekt.",
          "Muzea i kuratorzy prywatnych akwariow potrzebuja zaufania, struktury oraz informacji o pochodzeniu, srodowisku i wymaganiach opieki.",
          "Rekruterzy i projektanci oceniaja kierunek wizualny, myslenie o interakcji, hierarchie i storytelling.",
        ],
      },
      {
        id: "journey",
        title: "Sciezka uzytkownika",
        kicker: "Strona podaza za naturalna logika zejscia w ocean.",
        paragraphs: [
          "Podroz zaczyna sie na powierzchni: jasno, otwarcie i zapraszajaco. Uzytkownik otrzymuje pierwsze wrazenie marki premium.",
          "W plytszych i otwartych warstwach oceanu rozpoczyna sie eksploracja kolekcji. Produkty pojawiaja sie jako odkrycia w srodowisku.",
          "Gleboki ocean i abis staja sie kulminacja emocjonalna. Najrzadsze gatunki pojawiaja sie w najciemniejszych i najcichszych sekcjach.",
        ],
      },
      {
        id: "architecture",
        title: "Architektura informacji",
        kicker: "Proste strony, jasne role.",
        paragraphs: [
          "Struktura strony jest celowo prosta: Home, About, Journal, Contact i UX Case Study.",
          "Home jest glownym doswiadczeniem immersyjnym. About daje kontekst marki, Journal buduje wiarygodnosc redakcyjna, Contact wspiera prywatne zapytania, a UX Case Study wyjasnia logike projektowa.",
        ],
      },
      {
        id: "home-logic",
        title: "Logika UX strony glownej",
        kicker: "Pionowa narracja zamiast plaskiego katalogu.",
        paragraphs: [
          "Pierwsza sekcja buduje ciekawosc, zanim wyjasni wszystko. Kolejna daje kontekst, aby koncept nie byl tylko dekoracja.",
          "Kolekcja jest podzielona na strefy glebokosci oceanu. To tworzy naturalna progresje i ulatwia zrozumienie grup produktow.",
          "Finalne CTA znajduje sie w najglebszym punkcie strony, dlatego kontakt po zakonczeniu zejscia wydaje sie bardziej znaczący.",
        ],
      },
      {
        id: "cards",
        title: "UX kart produktu",
        kicker: "Karty powinny sprawiac wrazenie odkryc.",
        paragraphs: [
          "Kazda karta pokazuje nazwe gatunku, glebokosc, wartosc emocjonalna i cene bez nadmiaru naukowych detali.",
          "To wspiera pozycjonowanie luxury. Kontrolowana ilosc informacji tworzy ciekawosc i daje produktowi wiecej obecnosci.",
        ],
      },
      {
        id: "storytelling",
        title: "Strategia storytellingu",
        kicker: "Historia powstaje przez ruch, nie tylko przez tekst.",
        paragraphs: [
          "Pelagea uzywa glebokosci scrolla, koloru, przestrzeni, motion i kolejnosci produktow jako narzedzi narracji.",
          "Struktura wspiera tez hierarchie: jasniejsze strefy wydaja sie bardziej dostepne, a ciemniejsze rzadsze i bardziej ekskluzywne.",
        ],
      },
      {
        id: "hierarchy",
        title: "Hierarchia wizualna",
        kicker: "Duza atmosfera, skupione detale.",
        paragraphs: [
          "Duże naglowki wprowadzaja etapy podrozy, krotkie akapity tlumacza strefy, a karty produktu daja konkretne informacje.",
          "Interfejs unika szumu wizualnego. Premium czesto wynika z tego, ze elementy maja przestrzen do oddychania.",
        ],
      },
      {
        id: "color",
        title: "Kolor jako UX",
        kicker: "Kolor komunikuje glebokosc i progres.",
        paragraphs: [
          "Jasny blekit oznacza powierzchnie i pierwszy kontakt z marka. Sredni niebieski oznacza eksploracje. Ciemny niebieski oznacza skupienie i tajemnice. Prawie czarny oznacza abis, rzadkosc i ekskluzywnosc.",
          "Podczas scrollowania tlo ciemnieje. To daje stale poczucie miejsca w podrozy, nawet bez czytania tytulow sekcji.",
        ],
      },
      {
        id: "motion",
        title: "Motion UX",
        kicker: "Ruch powinien przypominac poruszanie sie pod woda.",
        paragraphs: [
          "Animacje sa wolne i subtelne. Szybki ruch zniszczylby nastroj i obnizyl poczucie premium.",
          "Dobrze dzialaja miekkie fade-iny, powolny parallax, unoszace sie czastki, delikatne hover states, subtelny ruch obrazow i plynne przejscia.",
          "Motion nie moze ukrywac informacji. Dla osob z reduced motion strona nadal pozostaje kompletna.",
        ],
      },
      {
        id: "accessibility",
        title: "Dostepnosc",
        kicker: "Dostepnosc jest czescia luksusu.",
        paragraphs: [
          "Tekst musi pozostac czytelny na jasnym i ciemnym tle. Linki oraz przyciski potrzebuja wyraznych stanow hover i focus.",
          "Obrazy maja sensowne alt texty, struktura uzywa semantycznego HTML, a animacje nie sa wymagane do zrozumienia tresci.",
          "Interfejs premium powinien byc kontrolowany, wygodny i latwy w uzyciu.",
        ],
      },
      {
        id: "responsive",
        title: "Responsive UX",
        kicker: "Zejscie musi dzialac na kazdym ekranie.",
        paragraphs: [
          "Desktop moze korzystac z szerokich ukladow, duzych obrazow i filmowej przestrzeni. Tablet zachowuje atmosfere, ale staje sie bardziej kompaktowy.",
          "Na mobile najwazniejsza jest czytelnosc. Efekt zejscia pozostaje dzieki progresji koloru, kolejnosci sekcji i rytmowi pionowemu.",
        ],
      },
      {
        id: "content",
        title: "Strategia tresci",
        kicker: "Jezyk redakcyjny zamiast jezyka sklepu.",
        paragraphs: [
          "Pelagea nie powinna brzmiec jak zwykly sklep. Nalezy unikac hasel typu buy now, best deal lub limited offer.",
          "Lepszy ton to: Explore the collection, Discover rare species, Request private access, Dive deeper.",
        ],
      },
      {
        id: "multilingual",
        title: "Wymog wielojezycznosci",
        kicker: "Lokalizacji wymaga tylko strona UX Case Study.",
        paragraphs: [
          "Strona UX Case Study jest dostepna po angielsku, ukrainsku, polsku i rosyjsku. Angielski jest jezykiem domyslnym.",
          "Switcher tlumaczy naglowki, akapity, etykiety, elementy nawigacji, tytuly sekcji i male opisy UI.",
        ],
      },
      {
        id: "localization",
        title: "UX lokalizacji",
        kicker: "Lokalizacja zmienia layout, nie tylko slowa.",
        paragraphs: [
          "Uzytkownik moze zmienic jezyk w dowolnym momencie. Aktualny jezyk jest widoczny, a zmiana nie resetuje pozycji na stronie.",
          "Layout wspiera dluzszy tekst ukrainski, polski i rosyjski bez psucia kompozycji.",
        ],
      },
      {
        id: "challenges",
        title: "Wyzwania",
        kicker: "Najwiekszym wyzwaniem byl balans miedzy immersja a uzytecznoscia.",
        paragraphs: [
          "Jesli strona stanie sie zbyt filmowa, uzytkownik moze stracic jasnosc. Jesli stanie sie zbyt funkcjonalna, metafora zejscia oslabnie.",
          "Rozwiazaniem byla prosta struktura i silna atmosfera. Karty sa czytelne, motion subtelny, a luksus wynika z powściągliwosci.",
        ],
      },
      {
        id: "solution",
        title: "Rozwiazanie finalne",
        kicker: "Powolne zejscie od swiatla do ciemnosci.",
        paragraphs: [
          "Finalne rozwiazanie to immersyjna strona luxury, na ktorej uzytkownik odkrywa rzadkie gatunki morskie przez zejscie w ocean.",
          "Kolekcja staje sie bardziej ekskluzywna wraz z glebokoscia. Interakcja wspiera historie, wizualia wspieraja hierarchie, a tresc wspiera pozycjonowanie marki.",
        ],
      },
      {
        id: "decisions",
        title: "Kluczowe decyzje UX",
        kicker: "Projekt opiera sie na kilku jasnych wyborach.",
        paragraphs: [
          "Scroll stal sie glowna interakcja. Produkty uporzadkowano wedlug glebokosci, a progresja koloru stala sie informacja nawigacyjna.",
          "Informacja na kartach jest najpierw krotka, About i Journal poglebiaja swiat marki, a wielojezyczne UX Case Study pokazuje myslenie o uzytkownikach miedzynarodowych.",
        ],
      },
      {
        id: "demonstrates",
        title: "Co pokazuje projekt",
        kicker: "Visual design, strategia UX i storytelling w jednym koncepcie.",
        paragraphs: [
          "Pelagea pokazuje strategie UX, architekture informacji, interaction design, hierarchie wizualna, motion thinking, responsive design, accessibility awareness, strukture tresci, planowanie lokalizacji i brand experience design.",
          "Projekt pokazuje, jak prosty wzorzec interakcji moze stac sie znaczący, gdy wspiera koncept.",
        ],
      },
      {
        id: "conclusion",
        title: "Wniosek",
        kicker: "Silny UX nadaje interakcji znaczenie.",
        paragraphs: [
          "Pelagea zmienia podstawowa akcje uzytkownika w doswiadczenie narracyjne. Scrollowanie staje sie nurkowaniem, produkty odkryciami, glebia hierarchia, a atmosfera czescia usability.",
          "Rezultat to spokojne, zapamietywalne i konceptualnie pelne doswiadczenie digital luxury.",
        ],
      },
    ],
  },
  ru: {
    htmlLang: "ru",
    languageName: "Русский",
    labels: {
      eyebrow: "UX-кейс",
      title: "Скролл становится погружением.",
      subtitle:
        "Pelagea показывает, как luxury e-commerce может превратиться в эмоциональный спуск в океан вместо предсказуемого каталога товаров.",
      switcher: "Язык",
      contents: "Содержание",
      summary: "Кратко о проекте",
      viewWebsite: "Открыть сайт",
      keyDecision: "Ключевое UX-решение",
      localizationNote:
        "Язык меняется на месте, поэтому позиция чтения не сбрасывается.",
      navigation: "Навигация по кейсу",
    },
    navItems: ["Главная", "О бренде", "Журнал", "Контакты", "UX-кейс"],
    metrics: [
      { label: "Формат", value: "Портфолио-концепт" },
      { label: "Аудитория", value: "Коллекционеры, музеи, рекрутеры" },
      { label: "Взаимодействие", value: "Скролл как спуск" },
      { label: "Языки", value: "EN / UA / PL / RU" },
    ],
    sections: [
      {
        id: "overview",
        title: "Обзор проекта",
        kicker: "Luxury e-commerce как иммерсивное повествование.",
        paragraphs: [
          "Pelagea - концептуальный luxury e-commerce сайт для редких морских видов. Проект создан как портфолио-кейс, чтобы показать, как онлайн-магазин может быть больше, чем каталог.",
          "Главная идея основана на погружении. Пользователь начинает у поверхности океана, в свете и открытом пространстве. При скролле атмосфера становится глубже, темнее и загадочнее.",
          "Pelagea - не зоомагазин. Это вымышленный премиальный бренд для коллекционеров, музеев, частных аквариумов и людей, которые ценят редкость, красоту и эксклюзивность.",
        ],
      },
      {
        id: "core-idea",
        title: "Основная UX-идея",
        kicker: "Главное правило простое: скролл равен погружению.",
        paragraphs: [
          "На большинстве сайтов скролл - техническое действие. В Pelagea он становится частью истории: каждое движение вниз ощущается как движение глубже под воду.",
          "Чем глубже пользователь скроллит, тем более редкими и таинственными становятся виды. Визуальная глубина поддерживает иерархию продуктов, а эмоциональный маршрут - luxury-позиционирование.",
          "Опыт намеренно медленный и спокойный. Премиальный интерфейс не должен спешить; ему нужны пространство, тишина и ожидание.",
        ],
      },
      {
        id: "problem",
        title: "Проблема",
        kicker: "Понятная структура магазина часто выглядит слишком привычно.",
        paragraphs: [
          "Большинство e-commerce сайтов используют одну и ту же структуру: hero, сетка товаров, фильтры, карточки и кнопки покупки. Это понятно, но для luxury-концепта может быть недостаточно выразительно.",
          "Задача состояла в том, чтобы создать покупательский опыт, который остается ясным, но не кажется обычным.",
        ],
        bullets: [
          "Как сделать каталог иммерсивным, но не запутанным?",
          "Как визуальный сторителлинг может поддерживать навигацию?",
          "Как сделать скролл осмысленным?",
          "Как представить редкие продукты как открытия, а не просто товары?",
        ],
      },
      {
        id: "goals",
        title: "Цели",
        kicker: "Создать luxury-опыт вокруг метафоры спуска в океан.",
        paragraphs: [
          "Главная цель - связать взаимодействие, иерархию и эмоцию. Сайт должен быть премиальным, кинематографичным и спокойным, но при этом понятным.",
        ],
        bullets: [
          "Сделать скролл значимым.",
          "Связать глубину, редкость и открытие продуктов.",
          "Сохранить элегантность и читаемость.",
          "Не перегружать пользователя количеством товаров.",
          "Сбалансировать эмоциональный сторителлинг и функциональный просмотр.",
          "Сделать проект сильным UX/UI-кейсом для портфолио.",
        ],
      },
      {
        id: "audience",
        title: "Целевая аудитория",
        kicker: "Один интерфейс для коллекционеров, кураторов и зрителей портфолио.",
        paragraphs: [
          "Коллекционеры ищут редкость, эксклюзивность и эмоциональную ценность. Им важен уникальный и тщательно выбранный объект.",
          "Музеи и кураторы частных аквариумов нуждаются в доверии, структуре и информации о происхождении, среде и уходе.",
          "Рекрутеры и дизайнеры оценивают визуальное направление, мышление об интеракции, иерархию и сторителлинг.",
        ],
      },
      {
        id: "journey",
        title: "Пользовательский путь",
        kicker: "Путь повторяет естественную логику океанского спуска.",
        paragraphs: [
          "Путешествие начинается на поверхности: светло, открыто и приглашает внутрь. Пользователь получает первое впечатление о необычном премиальном бренде.",
          "На мелководье и в открытом океане начинается исследование коллекции. Продукты появляются как открытия внутри среды.",
          "Глубокий океан и бездна становятся эмоциональной кульминацией. Самые редкие виды появляются в самых темных и тихих секциях.",
        ],
      },
      {
        id: "architecture",
        title: "Информационная архитектура",
        kicker: "Простые страницы с ясными ролями.",
        paragraphs: [
          "Структура сайта намеренно простая: Главная, О бренде, Журнал, Контакты и UX Case Study.",
          "Главная страница - основной иммерсивный опыт. About дает контекст бренда, Journal добавляет редакционную достоверность, Contact поддерживает приватные запросы, а UX Case Study объясняет дизайн-логику.",
        ],
      },
      {
        id: "home-logic",
        title: "UX-логика главной страницы",
        kicker: "Вертикальная история вместо плоского каталога.",
        paragraphs: [
          "Первый экран создает любопытство, не объясняя все сразу. Следующая секция дает контекст, чтобы концепция не казалась только декоративной.",
          "Коллекция разделена по зонам океанской глубины. Это создает естественную прогрессию и помогает понять группы продуктов.",
          "Финальный CTA расположен в самой глубокой точке страницы, поэтому контакт после завершения спуска ощущается более значимым.",
        ],
      },
      {
        id: "cards",
        title: "UX карточек продукта",
        kicker: "Карточки должны ощущаться как открытия.",
        paragraphs: [
          "Каждая карточка быстро сообщает название вида, глубину, эмоциональную ценность и цену без перегруза научными деталями.",
          "Это поддерживает luxury-позиционирование. Контролируемый объем информации создает интерес и дает продукту больше присутствия.",
        ],
      },
      {
        id: "storytelling",
        title: "Стратегия сторителлинга",
        kicker: "История создается движением, а не только текстом.",
        paragraphs: [
          "Pelagea использует глубину скролла, цвет, отступы, motion и порядок продуктов как инструменты повествования.",
          "Структура также поддерживает иерархию: светлые зоны кажутся доступнее, а темные - более редкими и эксклюзивными.",
        ],
      },
      {
        id: "hierarchy",
        title: "Визуальная иерархия",
        kicker: "Большая атмосфера, точные детали.",
        paragraphs: [
          "Крупные заголовки вводят этапы путешествия, короткие тексты объясняют зоны, а карточки дают сфокусированную информацию.",
          "Интерфейс избегает визуального шума. Премиальность часто возникает там, где элементам дают достаточно пространства.",
        ],
      },
      {
        id: "color",
        title: "Цвет как UX",
        kicker: "Цвет передает глубину и прогресс.",
        paragraphs: [
          "Светло-голубой означает поверхность и первый контакт с брендом. Средний синий - исследование. Темно-синий - фокус и тайну. Почти черный - бездну, редкость и эксклюзивность.",
          "По мере скролла фон темнеет. Это дает постоянную обратную связь о том, где пользователь находится в путешествии.",
        ],
      },
      {
        id: "motion",
        title: "Motion UX",
        kicker: "Движение должно ощущаться как движение под водой.",
        paragraphs: [
          "Анимации намеренно медленные и деликатные. Быстрое движение разрушило бы настроение и удешевило опыт.",
          "Подходят мягкие появления, медленный параллакс, плавающие частицы, нежные hover-состояния, легкое движение изображений и плавные переходы.",
          "Motion не должен скрывать важную информацию. Пользователи с reduced motion все равно получают полный опыт.",
        ],
      },
      {
        id: "accessibility",
        title: "Доступность",
        kicker: "Доступность является частью luxury.",
        paragraphs: [
          "Текст должен оставаться читаемым на светлом и темном фоне. Кнопки и ссылки нуждаются в понятных hover и focus состояниях.",
          "Изображения имеют осмысленный alt-текст, структура использует семантический HTML, а анимации не обязательны для понимания контента.",
          "Премиальный интерфейс должен быть контролируемым, комфортным и простым в использовании.",
        ],
      },
      {
        id: "responsive",
        title: "Адаптивный UX",
        kicker: "Погружение должно работать на всех экранах.",
        paragraphs: [
          "На desktop можно использовать широкие layouts, большие изображения и кинематографичные отступы. На tablet атмосфера сохраняется, но становится компактнее.",
          "На mobile главный приоритет - ясность. Погружение остается через цветовую прогрессию, порядок секций и вертикальный ритм.",
        ],
      },
      {
        id: "content",
        title: "Контент-стратегия",
        kicker: "Редакционный язык вместо магазинных фраз.",
        paragraphs: [
          "Pelagea не должна звучать как обычный магазин. Стоит избегать фраз вроде buy now, best deal или limited offer.",
          "Лучше звучат формулировки: Explore the collection, Discover rare species, Request private access, Dive deeper.",
        ],
      },
      {
        id: "multilingual",
        title: "Мультиязычное требование",
        kicker: "Локализация нужна только странице UX Case Study.",
        paragraphs: [
          "Страница UX Case Study доступна на английском, украинском, польском и русском языках. Английский является языком по умолчанию.",
          "Переключатель переводит заголовки, абзацы, labels, навигационные элементы, названия секций и небольшие UI-описания.",
        ],
      },
      {
        id: "localization",
        title: "UX локализации",
        kicker: "Локализация меняет не только слова, но и layout.",
        paragraphs: [
          "Пользователь может переключить язык в любой момент. Текущий язык виден, а смена языка не сбрасывает позицию чтения.",
          "Layout поддерживает более длинные украинские, польские и русские тексты без поломок.",
        ],
      },
      {
        id: "challenges",
        title: "Вызовы",
        kicker: "Главный вызов - баланс между иммерсивностью и удобством.",
        paragraphs: [
          "Если сайт становится слишком кинематографичным, пользователь может потерять ясность. Если слишком функциональным, метафора спуска ослабевает.",
          "Решение - простая структура и сильная атмосфера. Карточки остаются ясными, motion - деликатным, а luxury выражается через сдержанность.",
        ],
      },
      {
        id: "solution",
        title: "Финальное решение",
        kicker: "Медленный спуск от света к темноте.",
        paragraphs: [
          "Финальное решение - иммерсивный luxury-сайт, где пользователь открывает редкие морские виды через медленный спуск в океан.",
          "Коллекция становится более эксклюзивной вместе с глубиной. Взаимодействие поддерживает историю, визуал - иерархию, а контент - позиционирование бренда.",
        ],
      },
      {
        id: "decisions",
        title: "Ключевые UX-решения",
        kicker: "Проект держится на нескольких ясных решениях.",
        paragraphs: [
          "Скролл стал главным взаимодействием. Продукты организованы по глубине, а не по стандартным категориям. Цветовая прогрессия стала навигационной обратной связью.",
          "Информация в карточках сначала краткая, About и Journal углубляют мир бренда, а мультиязычный UX Case Study делает процесс понятным для международной аудитории.",
        ],
      },
      {
        id: "demonstrates",
        title: "Что демонстрирует проект",
        kicker: "Визуальный дизайн, UX-стратегия и storytelling в одном концепте.",
        paragraphs: [
          "Pelagea демонстрирует UX-стратегию, информационную архитектуру, interaction design, визуальную иерархию, motion thinking, responsive design, accessibility awareness, content structure, localization planning и brand experience design.",
          "Проект показывает, как простой паттерн взаимодействия становится значимым, если поддерживает концепцию.",
        ],
      },
      {
        id: "conclusion",
        title: "Заключение",
        kicker: "Сильный UX делает взаимодействие осмысленным.",
        paragraphs: [
          "Pelagea превращает базовое действие пользователя в повествовательный опыт. Скролл становится погружением, продукты - открытиями, глубина - иерархией, а атмосфера - частью usability.",
          "Итог - спокойный, запоминающийся и концептуально полный luxury digital experience.",
        ],
      },
    ],
  },
};

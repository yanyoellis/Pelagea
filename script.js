const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const collection = document.querySelector("[data-collection]");
const catalog = document.querySelector("[data-catalog]");
const catalogFilters = document.querySelectorAll("[data-filter]");
const catalogSort = document.querySelector("[data-sort]");
const catalogEmpty = document.querySelector("[data-empty]");
const journalCatalog = document.querySelector("[data-journal-catalog]");
const journalFilters = document.querySelectorAll("[data-journal-filter]");
const journalSort = document.querySelector("[data-journal-sort]");
const journalEmpty = document.querySelector("[data-journal-empty]");

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

if (header && nav && menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");

    header.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("nav-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      header.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
    });
  });
}

document.querySelectorAll("[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!collection) return;

    const direction = button.dataset.scroll === "next" ? 1 : -1;
    const card = collection.querySelector(".species-card");
    const amount = card ? card.getBoundingClientRect().width : collection.clientWidth / 2;

    collection.scrollBy({
      left: direction * amount,
      behavior: "smooth",
    });
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

if (catalog && catalogFilters.length) {
  const cards = [...catalog.querySelectorAll(".catalog-card")];
  let activeFilter = "all";

  const renderCatalog = () => {
    const sortBy = catalogSort?.value || "rarity";
    const visibleCards = cards.filter((card) => activeFilter === "all" || card.dataset.category === activeFilter);

    visibleCards.sort((a, b) => {
      if (sortBy === "name") return a.dataset.name.localeCompare(b.dataset.name);
      if (sortBy === "species") return Number(b.dataset.count) - Number(a.dataset.count);
      return Number(a.dataset.rarity) - Number(b.dataset.rarity);
    });

    cards.forEach((card) => {
      card.hidden = !visibleCards.includes(card);
    });
    visibleCards.forEach((card) => catalog.append(card));

    if (catalogEmpty) catalogEmpty.hidden = visibleCards.length > 0;
  };

  catalogFilters.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.classList.contains("is-active")));
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter || "all";
      catalogFilters.forEach((filterButton) => {
        const isActive = filterButton === button;
        filterButton.classList.toggle("is-active", isActive);
        filterButton.setAttribute("aria-pressed", String(isActive));
      });
      renderCatalog();
    });
  });

  catalogSort?.addEventListener("change", renderCatalog);
  renderCatalog();
}

if (journalCatalog && journalFilters.length) {
  const articles = [...journalCatalog.querySelectorAll(".journal-card")];
  let activeJournalFilter = "all";

  const renderJournal = () => {
    const sortBy = journalSort?.value || "latest";
    const visibleArticles = articles.filter((article) => activeJournalFilter === "all" || article.dataset.category === activeJournalFilter);

    visibleArticles.sort((a, b) => {
      if (sortBy === "oldest") return Number(a.dataset.date) - Number(b.dataset.date);
      if (sortBy === "read") return Number(b.dataset.read) - Number(a.dataset.read);
      return Number(b.dataset.date) - Number(a.dataset.date);
    });

    articles.forEach((article) => {
      article.hidden = !visibleArticles.includes(article);
    });
    visibleArticles.forEach((article) => journalCatalog.append(article));

    if (journalEmpty) journalEmpty.hidden = visibleArticles.length > 0;
  };

  journalFilters.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.classList.contains("is-active")));
    button.addEventListener("click", () => {
      activeJournalFilter = button.dataset.journalFilter || "all";
      journalFilters.forEach((filterButton) => {
        const isActive = filterButton === button;
        filterButton.classList.toggle("is-active", isActive);
        filterButton.setAttribute("aria-pressed", String(isActive));
      });
      renderJournal();
    });
  });

  journalSort?.addEventListener("change", renderJournal);
  renderJournal();
}

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) return;

    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    if (!button) return;

    button.textContent = "OK";
    button.setAttribute("aria-label", "Subscribed");
  });
});

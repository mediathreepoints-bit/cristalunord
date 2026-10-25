/**
 * Cristalu Nord — Interactions & Logiciel Site Web
 * Mobile nav · Lightbox tactile & clavier · Filtres portfolio · WhatsApp Builder
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. Navigation Mobile
     ========================================================================== */
  const menuToggle = document.getElementById('menu-toggle');
  const navigation = document.getElementById('navigation');

  if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close when clicking any nav link
    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navigation.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside header
    document.addEventListener('click', (e) => {
      if (!navigation.contains(e.target) && !menuToggle.contains(e.target) && navigation.classList.contains('open')) {
        navigation.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ==========================================================================
     2. Galerie / Portfolio & Filtres
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const galleryStatus = document.getElementById('gallery-status');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active state
      filterBtns.forEach((b) => {
        const isActive = b === btn;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-pressed', String(isActive));
      });

      // Filter project cards
      let visibleCount = 0;
      projectCards.forEach((card) => {
        const category = card.dataset.category;
        const matches = filter === 'Tous' || category === filter;
        card.hidden = !matches;
        if (matches) visibleCount++;
      });

      if (galleryStatus) {
        galleryStatus.textContent = `${visibleCount} réalisation${visibleCount > 1 ? 's' : ''} affichée${visibleCount > 1 ? 's' : ''}`;
      }
    });
  });

  /* ==========================================================================
     3. Lightbox Interactive (Touch swipe + Clavier)
     ========================================================================== */
  const lightbox = document.getElementById('lightbox');
  const largeImage = document.getElementById('large-image');
  const largeCaption = document.getElementById('large-caption');
  const largeDesc = document.getElementById('large-desc');
  const photoCategory = document.getElementById('photo-category');
  const photoCount = document.getElementById('photo-count');
  const quoteBtn = document.getElementById('lightbox-quote-btn');
  const prevBtn = document.getElementById('previous');
  const nextBtn = document.getElementById('next');
  const closeBtn = document.querySelector('.lightbox-close-btn');

  const projectButtons = [...document.querySelectorAll('.project-btn')];
  let activeIndex = 0;

  function getVisibleProjects() {
    return projectButtons.filter((btn) => !btn.closest('.project-card').hidden);
  }

  function displayProject(btn) {
    if (!btn) return;
    const visibleList = getVisibleProjects();
    activeIndex = visibleList.indexOf(btn);

    const imgSrc = btn.dataset.image;
    const title = btn.dataset.title;
    const desc = btn.dataset.desc || '';
    const cat = btn.dataset.categoryLabel || '';

    if (largeImage) {
      largeImage.src = imgSrc;
      largeImage.alt = title;
    }
    if (largeCaption) largeCaption.textContent = title;
    if (largeDesc) largeDesc.textContent = desc;
    if (photoCategory) photoCategory.textContent = cat;

    if (photoCount) {
      photoCount.textContent = `${activeIndex + 1} / ${visibleList.length}`;
    }

    if (quoteBtn) {
      const waText = encodeURIComponent(`Bonjour Cristalu Nord, je suis intéressé par votre réalisation : "${title}". Pouvez-vous me renseigner ?`);
      quoteBtn.href = `https://wa.me/212777077468?text=${waText}`;
      quoteBtn.target = '_blank';
      quoteBtn.rel = 'noopener noreferrer';
    }
  }

  function stepProject(delta) {
    const visibleList = getVisibleProjects();
    if (visibleList.length === 0) return;
    activeIndex = (activeIndex + delta + visibleList.length) % visibleList.length;
    displayProject(visibleList[activeIndex]);
  }

  projectButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      displayProject(btn);
      if (lightbox && typeof lightbox.showModal === 'function') {
        lightbox.showModal();
      }
    });
  });

  if (prevBtn) prevBtn.addEventListener('click', () => stepProject(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => stepProject(1));

  if (closeBtn && lightbox) {
    closeBtn.addEventListener('click', () => lightbox.close());
  }

  if (lightbox) {
    // Click on backdrop dismisses modal
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.close();
    });

    // Keyboard support
    lightbox.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') stepProject(1);
      if (e.key === 'ArrowLeft') stepProject(-1);
    });

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 45) {
        if (diff < 0) stepProject(1);  // Swipe left -> Next
        else stepProject(-1);          // Swipe right -> Prev
      }
    }
  }

  /* ==========================================================================
     4. Service Cards Pre-select Contact Dropdown
     ========================================================================== */
  const serviceLinks = document.querySelectorAll('.service-link[data-preset]');
  const typeSelect = document.getElementById('type');

  serviceLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const preset = link.dataset.preset;
      if (typeSelect && preset) {
        for (let i = 0; i < typeSelect.options.length; i++) {
          if (typeSelect.options[i].value === preset) {
            typeSelect.selectedIndex = i;
            break;
          }
        }
      }
    });
  });

  /* ==========================================================================
     5. Quick Tags Selector for Contact Form
     ========================================================================== */
  const tagButtons = document.querySelectorAll('.tag-btn');
  tagButtons.forEach((tagBtn) => {
    tagBtn.addEventListener('click', () => {
      tagBtn.classList.toggle('active');
    });
  });

  /* ==========================================================================
     6. Formulaire Contact WhatsApp Intelligent
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const messageInput = document.getElementById('message');
      const typeSelectEl = document.getElementById('type');
      const citySelectEl = document.getElementById('city');

      const name = nameInput ? nameInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';
      const type = typeSelectEl ? typeSelectEl.value : 'Menuiserie';
      const city = citySelectEl ? citySelectEl.value : 'Tanger';

      if (!name) {
        if (nameInput) nameInput.focus();
        return;
      }
      if (!message) {
        if (messageInput) messageInput.focus();
        return;
      }

      // Collect selected quick tags
      const activeTags = [...document.querySelectorAll('.tag-btn.active')].map((b) => b.dataset.tag);
      const tagsText = activeTags.length > 0 ? `\n• Nature : ${activeTags.join(', ')}` : '';

      const waMessage = 
`Bonjour Cristalu Nord,
Je souhaite vous consulter pour une étude / un devis :

• Client : ${name}
• Ville : ${city}
• Projet : ${type}${tagsText}

Détails de ma demande :
${message}

Merci pour votre retour.`;

      const waUrl = `https://wa.me/212777077468?text=${encodeURIComponent(waMessage)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }

  /* ==========================================================================
     7. Dynamic Year in Footer
     ========================================================================== */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

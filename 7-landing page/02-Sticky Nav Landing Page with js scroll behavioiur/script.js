  // Step 1: Select navigation bar and tab element
  const nav = document.querySelector('.nav-cont');
  const heroSection = document.querySelector('.nav-slider');

  // Step 2: Listen to scroll event
  window.addEventListener('scroll', () => {
    // Step 3: Get the position of hero section (VIRAT RAI section)
    const heroBottom = heroSection.getBoundingClientRect().bottom;

    // Step 4: If hero section is out of view (bottom < 0), stick navbar to top
    if (heroBottom < 0) {
      nav.classList.add('nav-cont--top'); // Add class to make navbar fixed at top
    } else {
      nav.classList.remove('nav-cont--top'); // Remove class when back at top
    }
  });
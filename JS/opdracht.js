const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const section = entry.target;
    if (entry.isIntersecting) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}, {
  threshold: 0.7,
});

const sectionsContainer = document.getElementById('sections-container');
let loading = false;
let sectionIndex = 4;

const imageSources = [
  'product1.webp',
  'product3(alarm).jpg',
  'product2.png',
  'product3.png'
];

//IMG SHUFFLE
function shuffleArray(array) {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

//RANDOMIZER
function getRandomSize() {
  const size = 12 + Math.random() * 6;
  return `${size}rem`;
}

function loadMoreSections() {
  if (loading) return;
  loading = true;
  document.getElementById('loading').style.display = 'block';

  setTimeout(() => {
    const shuffledImages = shuffleArray(imageSources);

    for (let i = 0; i < 3; i++) {
      const imageSrc = shuffledImages[i % shuffledImages.length];
      const width = getRandomSize();
      const height = getRandomSize();

      const newSection = document.createElement('section');
      newSection.classList.add('section', 'observe');
      newSection.setAttribute('data-content', `Sectie ${sectionIndex + 1} geladen`);
      newSection.innerHTML = `
        <img src="${imageSrc}" alt="Image ${sectionIndex + 1}"
          style="width: ${width}; height: ${height}; object-fit: cover; border-radius: 0.5rem;" />
      `;

      sectionsContainer.appendChild(newSection);
      observer.observe(newSection);
      sectionIndex++;
    }

    document.getElementById('loading').style.display = 'none';
    loading = false;
  }, 1000);
}

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    loadMoreSections();
  }
});


document.querySelectorAll('.observe').forEach(section => observer.observe(section));
// barberque bacon burger
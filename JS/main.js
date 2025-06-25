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
document.querySelectorAll('.observe').forEach(section => observer.observe(section));

let loading = false;
let sectionCount = 4;

function loadMoreSections() {
  if (loading) return;
  loading = true;
  document.getElementById('loading').style.display = 'block';

  setTimeout(() => {
    for (let i = 1; i <= 3; i++) {
      sectionCount++;
      const newSection = document.createElement('section');
      newSection.classList.add('section', 'observe');
      newSection.setAttribute('data-content', `Sectie ${sectionCount} geladen`);
      newSection.innerHTML = `<img src="product${(sectionCount % 4) + 1}.webp" alt="" />`;
      sectionsContainer.appendChild(newSection);
      observer.observe(newSection);
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






const counter = document.getElementById("counter")

let count = 0;

    function addProduct() {
      count++;
      console.log("Cart count:", count);
      counter.innerHTML = count;
    }

    function removeProduct() {
      count--;
      console.log("Cart count:", count);
        if(0 > count){
            count++;
        }
              counter.innerHTML = count;

    }

    document.getElementById("butty") = addProduct;
    document.getElementById("buttson") = removeProduct;
    

    console.log(count);









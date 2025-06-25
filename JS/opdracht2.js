    function handleScroll() {
      const vh = window.innerHeight;
      const image1 = document.getElementById('image1');
      const image2 = document.getElementById('image2');
      const image3 = document.getElementById('image3');

      const block1Top = image1.getBoundingClientRect().top;
      const block2Top = image2.getBoundingClientRect().top;
      const block3Top = image3.getBoundingClientRect().top;

      if (block1Top < vh / 2) {
        image1.classList.add('scrolled');
      } else {
        image1.classList.remove('scrolled');
      }

      if (block2Top < vh / 2) {
        image2.classList.add('scrolled');
      } else {
        image2.classList.remove('scrolled');
      }

      if (block3Top < vh / 2) {
        image3.classList.add('scrolled');
      } else {
        image3.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll);
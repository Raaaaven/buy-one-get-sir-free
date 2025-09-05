
  // Select the faces container and hero
  const faces = document.querySelector('.facess');
  const hero = document.querySelector('.hero');

  // Listen for the end of the first face's animation
  const face1 = document.querySelector('.face-1');
  face1.addEventListener('animationend', () => {
    // Hide .facess
    faces.style.display = 'none';
    // Show .hero
    hero.style.display = 'block';
  });


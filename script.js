const faces = document.querySelector('.facess');
const hero = document.querySelector('.hero');
const facess2 = document.querySelector('.facess2');
const face1 = document.querySelector('.face-1');

face1.addEventListener('animationend', () => {
  faces.style.display = 'none';
  hero.style.display = 'block';

  setTimeout(() => {
    hero.style.display = 'none';
    facess2.style.display = 'block';

    // Trigger animation by adding class
    facess2.querySelectorAll('img').forEach(img => {
      img.classList.add('popMove2'); // use a CSS animation class
    });
  }, 20000); // 20s
});

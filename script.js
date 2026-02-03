const toggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const expertCards = document.querySelectorAll('.expert-card[data-image]');

if (toggleButton && navLinks) {
  toggleButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

expertCards.forEach((card) => {
  const imageName = card.dataset.image;
  if (!imageName) {
    return;
  }

  const existingPhoto = card.querySelector('.expert-photo');
  if (existingPhoto) {
    return;
  }

  const expertName = card.querySelector('h3')?.textContent?.trim() || '专家';
  const photoWrapper = document.createElement('figure');
  photoWrapper.className = 'expert-photo';

  const photo = document.createElement('img');
  photo.src = `images/${imageName}`;
  photo.alt = `${expertName} 专家照片`;
  photo.loading = 'lazy';
  photo.decoding = 'async';

  photoWrapper.appendChild(photo);
  card.prepend(photoWrapper);
});

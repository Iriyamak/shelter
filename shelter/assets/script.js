
document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.querySelector('.friends-gallery');
  const prevButton = gallery.querySelector('.arrow-button:first-child');
  const nextButton = gallery.querySelector('.arrow-button:last-child');
  const cards = gallery.querySelectorAll('.friend-card');
  let currentIndex = 0;

  function showCards(startIndex) {
    cards.forEach((card, index) => {
      card.style.display = (index >= startIndex && index < startIndex + 3) ? 'flex' : 'none';
    });
  }

  function updateGallery(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = cards.length - 3;
    if (currentIndex > cards.length - 3) currentIndex = 0;
    showCards(currentIndex);
  }

  prevButton.addEventListener('click', () => updateGallery(-1));
  nextButton.addEventListener('click', () => updateGallery(1));

  showCards(currentIndex);
});

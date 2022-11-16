baguetteBox.run('.gallery', {
  captions: true,
  buttons: 'auto',
  animation: 'fadeIn',
  overlayBackgroundColor: 'rgba(0,0,0,0.7)'
});


// SEARCH FUNCTIONALITY

const searchBar = document.querySelector('input');
const images = document.querySelectorAll('a');

searchBar.addEventListener('keyup', e => {
  const searchText = e.target.value.toLowerCase();
  images.forEach(img => {
    const caption = img.getAttribute('data-caption');
    const lowCap = caption.toLowerCase();

    if (!lowCap.includes(searchText)) {
      img.style.display = 'none';
    } else {
      img.style.display = 'inherit';
    }
  })
})
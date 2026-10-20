(() => {
  'use strict';
  const buttons = [...document.querySelectorAll('[data-graphics]')];
  const images = [...document.querySelectorAll('[data-graphics-image]')];
  const label = document.getElementById('comparison-label');
  const caption = document.getElementById('comparison-caption');
  const descriptions = {
    hd: ['HD / FRESHLY REDRAWN', 'HD graphics. The same game state, freshly redrawn.'],
    classic: ['CLASSIC / ORIGINAL PIXELS', 'Classic graphics. The same game state, with the original pixel artwork.']
  };
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const mode = button.dataset.graphics;
      if (!Object.hasOwn(descriptions, mode)) return;
      buttons.forEach(item => {
        const selected = item.dataset.graphics === mode;
        item.classList.toggle('active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      images.forEach(image => { image.hidden = image.dataset.graphicsImage !== mode; });
      label.textContent = descriptions[mode][0];
      caption.textContent = descriptions[mode][1];
    });
  });
  const navigation = document.getElementById('navigation');
  navigation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navigation.classList.contains('show') && window.bootstrap?.Collapse) {
        window.bootstrap.Collapse.getOrCreateInstance(navigation).hide();
      }
    });
  });
})();

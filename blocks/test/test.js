import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

function createOutputBlock(id, title) {
  const div = document.createElement('div');
  div.id = id;
  div.classList.add(id); // solo la classe specifica
  const h2 = document.createElement('h2');
  h2.textContent = title;
  const p = document.createElement('p');
  div.append(h2, p);
  return div;
}

export default function decorate(block) {
  block.textContent = '';

  const mainTitle = document.createElement('h1');
  mainTitle.textContent = 'Demo chiamata API (mock)';
  block.append(mainTitle);

  block.append(
    createOutputBlock('output-jwt', 'output JWT:'),
    createOutputBlock('output-access-token', 'output Access Token:'),
    createOutputBlock('output-coupon', 'output Coupon:')
  );
}

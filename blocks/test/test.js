import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

function createOutputBlock(id, title, classes = []) {
  const div = document.createElement('div');
  div.id = id;
  // Aggiungi sempre 'output-block' e l'id come classi, più eventuali altre classi passate
  div.classList.add('output-block', id, ...classes);
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
    createOutputBlock('output-jwt', 'output JWT:', ['jwt-section']),
    createOutputBlock('output-access-token', 'output Access Token:', ['access-token-section']),
    createOutputBlock('output-coupon', 'output Coupon:', ['coupon-section'])
  );
}

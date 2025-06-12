import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  // Svuota il blocco
  block.textContent = '';

  // Titolo principale
  const title = document.createElement('h2');
  title.textContent = 'Test Block';
  block.append(title);

  // Crea 3 div con titolo e contenitore vuoto
  for (let i = 1; i <= 3; i++) {
    const wrapper = document.createElement('div');
    wrapper.className = `test-section test-section-${i}`;

    const sectionTitle = document.createElement('h3');
    sectionTitle.textContent = `Test ${i}`;
    wrapper.append(sectionTitle);

    const emptyDiv = document.createElement('div');
    emptyDiv.className = 'test-content';
    // Qui potrai iniettare contenuto in futuro
    wrapper.append(emptyDiv);

    block.append(wrapper);
  }
}

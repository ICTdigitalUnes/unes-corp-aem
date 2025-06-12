import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  // Svuota il blocco
  block.textContent = '';

  // Titolo principale
  const mainTitle = document.createElement('h1');
  mainTitle.textContent = 'Demo chiamata API (mock)';
  block.append(mainTitle);

  // Output JWT
  const jwtDiv = document.createElement('div');
  jwtDiv.id = 'output-jwt';
  const jwtTitle = document.createElement('h2');
  jwtTitle.textContent = 'output JWT:';
  const jwtP = document.createElement('p');
  jwtDiv.append(jwtTitle, jwtP);
  block.append(jwtDiv);

  // Output Access Token
  const accessDiv = document.createElement('div');
  accessDiv.id = 'output-access-token';
  const accessTitle = document.createElement('h2');
  accessTitle.textContent = 'output Access Token:';
  const accessP = document.createElement('p');
  accessDiv.append(accessTitle, accessP);
  block.append(accessDiv);

  // Output Coupon
  const couponDiv = document.createElement('div');
  couponDiv.id = 'output-coupon';
  const couponTitle = document.createElement('h2');
  couponTitle.textContent = 'output Coupon:';
  const couponP = document.createElement('p');
  couponDiv.append(couponTitle, couponP);
  block.append(couponDiv);
}

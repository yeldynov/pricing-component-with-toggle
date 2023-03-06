var toggleButton = document.querySelector('.toggle-button');
const basicPrice = document.querySelector('.price-1');
const profPrice = document.querySelector('.price-2');
const masterPrice = document.querySelector('.price-3');

toggleButton.addEventListener('click', function () {
  toggleButton.classList.toggle('active');
  if (toggleButton.classList.contains('active')) {
    basicPrice.innerHTML = ` <span>$</span>19.99 `;
    profPrice.innerHTML = ` <span>$</span>24.99 `;
    masterPrice.innerHTML = ` <span>$</span>39.99 `;
  } else {
    basicPrice.innerHTML = ` <span>$</span>199.99 `;
    profPrice.innerHTML = ` <span>$</span>249.99 `;
    masterPrice.innerHTML = ` <span>$</span>399.99 `;
  }
});

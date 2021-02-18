const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('.img');
const overlayClose = overlay.querySelector('.close');

function generateHTML([h ,v]) {
  return `
  <div class="item h${h} v${v}">
    <img src="images/${randomNumber(12)}.jpg">
    <div class="item__overlay">
      <button>View →</button>
    </div>
  </div>
  `;
}

function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

// creates an array of 50 arrays with random values for height and width
const digits = Array.from({ length: 50 }, () => [randomNumber(4), randomNumber(4)]);

const html = digits.map(generateHTML).join('');
gallery.innerHTML = html;

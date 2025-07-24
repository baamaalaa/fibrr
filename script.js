const patterns = [
  {
    type: "Wearables",
    name: "Chunky Hat",
    yarnColor: "Blue",
    yarnWeight: "Bulky",
    hookSize: "6mm",
    img: "https://via.placeholder.com/200x150?text=Chunky+Hat",
    patternLink: "https://example.com/chunky-hat",
    yarnLink: "https://amazon.com/bulky-blue-yarn",
    hookLink: "https://amazon.com/6mm-hook"
  },
  {
    type: "Amigurumi",
    name: "Frog Plush",
    yarnColor: "Green",
    yarnWeight: "Worsted",
    hookSize: "3.5mm",
    img: "https://via.placeholder.com/200x150?text=Frog+Plush",
    patternLink: "https://example.com/frog-plush",
    yarnLink: "https://lovecrafts.com/green-worsted",
    hookLink: "https://amazon.com/3.5mm-hook"
  }
];

const ideasContainer = document.getElementById('ideas');
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => displayIdeas(btn.dataset.type));
});

function displayIdeas(filterType) {
  ideasContainer.innerHTML = '';
  patterns
    .filter(p => !filterType || p.type === filterType)
    .forEach(p => {
      const card = document.createElement('div');
      card.className = 'idea-card';
      card.innerHTML = `
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p><strong>Yarn:</strong> ${p.yarnColor} (${p.yarnWeight})</p>
        <p><strong>Hook:</strong> ${p.hookSize}</p>
        <button onclick="window.open('${p.patternLink}')">View Pattern</button>
        <button onclick="window.open('${p.yarnLink}')">Get Yarn</button>
        <button onclick="window.open('${p.hookLink}')">Get Hook</button>
      `;
      ideasContainer.appendChild(card);
    });
}

displayIdeas();

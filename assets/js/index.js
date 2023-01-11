import './components/cardGame.js';

const API_KEY = ''; // API key of RAWG ==> https://rawg.io/apidocs
const container = document.querySelector('.container');

const fetchApi = async () => {
  const response = await fetch(`https://rawg.io/api/games?token&key=${API_KEY}&page=1`);
  const data = await response.json();

  return data;
};

const data = await fetchApi();

const cardCreator = (data, count) => {
  for (let i = 0; i <= count; i++ ) {
    const cardGameComponent = document.createElement('card-game');
    cardGameComponent.setAttribute('name', data?.results[i].name);
    cardGameComponent.setAttribute('background_image', data?.results[i].background_image);
    cardGameComponent.setAttribute('genres', data?.results[i].genres.map((genre) => ` ${genre.name}`));
    cardGameComponent.setAttribute('tags', data?.results[i].tags.map((tag) => ` ${tag.name}`).slice(0, 5));

    container.appendChild(cardGameComponent);
  }
}

cardCreator(data, 10);

console.log(await fetchApi());
class CardGame extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
        this.name = 'undefined';
        this.background_image = '';
        this.genres = '';
        this.metacritic = 0;
        this.tags = '';
    }

    connectedCallback() {
        this.shadow.appendChild(this.component());
        this.shadow.appendChild(this.styles());
    }

    static get observedAttributes(){
        return ['name', 'background_image', 'genres', 'metacritic', 'tags'];
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {
        this[nameAtr] = newValue;
    }

    component() {
        const card = document.createElement('div');
        card.classList.add('card-game');

        const img = document.createElement('img');
        img.classList.add('card-game__image')
        img.src = this.background_image;

        const containerTitle = document.createElement('div');
        containerTitle.classList.add('card-game__div-title')

        const title = document.createElement('h2');
        title.textContent = this.name;
        const genres = document.createElement('span');
        genres.classList.add('div-title__genres');

        const tagsArray = this.tags.split(',');
        const tagContainer = document.createElement('div');
        tagContainer.classList.add('tag-container');

        tagsArray.forEach((tag) => {


            const tagSpan = document.createElement('span');
            tagSpan.classList.add('tag-container__tag-span')
            tagSpan.textContent = tag;

            tagContainer.appendChild(tagSpan)
        });

        genres.textContent = this.genres;

        containerTitle.appendChild(title)
        containerTitle.appendChild(genres)
        card.appendChild(img);
        card.appendChild(containerTitle);
        card.appendChild(tagContainer);

        return card;
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = `
        .card-game {
          width: 300px;
          height:400px;
          margin: 20px 0px 20px 0px;
          display: flex;
          flex-direction: column;
          border-radius: 18px;
          background-color: #2f3037;
          overflow: hidden;
          outline: 2px solid transparent;
          transition: all 300ms ease-in-out;
        }
        
        .card-game:hover {
          margin: 0px 0px 0px 0px;
          width: 320px;
          height:420px;
          outline: 2px solid #6a6b70;
          box-shadow: rgba(255, 255, 255, 0.1) 0px 4px 12px;
        }
        
        .card-game__div-title {
          color: whitesmoke;
          padding: 0px 10px;
          display: flex;
          flex-direction: column;
        }
        .card-game__image {
          height: 170px;
          object-fit: cover;
        }
        
        .div-title__genres {
          margin-top: -15px;
          font-size: 13px;
          color: #B0B0B4FF;
        }
        .tag-container {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          width: 90%;
          padding: 10px;
        }
        .tag-container__tag-span {
          font-size: 13px;
          padding: 5px 10px;
          border-radius: 12px;
          background: #464646;
          color: white;
          transition: all 300ms ease-in-out
        }
        .tag-container__tag-span:hover {
          background: #575757;
          cursor: pointer;
        }
        `;

        return style;
    }
}

customElements.define('card-game', CardGame);
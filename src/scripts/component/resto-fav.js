class RestoFavorite extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <h1> 
                <span class= "title-content"> Favorite Restaurant </span>
            </h1>
            <div id= "resto-fav" class= "row"> </diiv>
            `;
  }
}

customElements.define('resto-fav', RestoFavorite);

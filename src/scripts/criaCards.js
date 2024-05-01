export function criaCards(album) {
  /* Desestrutura o objeto album  */
  const { title, genre, band, price, img } = album;

  /* Cria os elementos */
  const card = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardAlbum = document.createElement("h3");
  const cardDetails1 = document.createElement("div");
  const cardArtist = document.createElement("p");
  const cardGenre = document.createElement("p");
  const cardDetails2 = document.createElement("div");
  const cardPrice = document.createElement("p");
  const cardButton = document.createElement("button");

  /* Estrutura os elementos */
  card.append(cardImg, cardAlbum, cardDetails1, cardDetails2);
  cardDetails1.append(cardArtist, cardGenre);
  cardDetails2.append(cardPrice, cardButton);

  /* Configura classes e atributos */
  card.classList.add("card");
  cardImg.setAttribute("src", img);
  cardImg.setAttribute("alt", title);
  cardAlbum.classList.add("card__album");
  cardDetails1.classList.add("card__details1");
  cardArtist.classList.add("card__artist");
  cardGenre.classList.add("card__genre");
  cardDetails2.classList.add("card__details2");
  cardPrice.classList.add("card__price");
  cardButton.classList.add("card__button");

  /* Adiciona conteúdo */
  cardAlbum.innerText = title;
  cardArtist.innerText = band;
  cardGenre.innerText = genre;
  cardPrice.innerText = ('R$ ' + price).replace('.',',');
  cardButton.innerText = 'Comprar'

  return card;
}

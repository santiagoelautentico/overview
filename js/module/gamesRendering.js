export class Game {
  constructor(
    id,
    title,
    thumbnail,
    description,
    genre,
    platform,
    publisher,
    date,
    developer,
    minimum_system_requirements,
    screenshots
  ) {
    this.id = id;
    this.title = title;
    this.thumbnail = thumbnail;
    this.description = description;
    this.genre = genre;
    this.platform = platform;
    this.publisher = publisher;
    this.date = date;
    this.developer = developer;
    this.minimum_system_requirements = minimum_system_requirements;
    this.screenshots = screenshots;
  }

  renderMiniCard() {
    const miniCard = `
        <a>
            <div class="card" data-id="${this.id}">
                <img src="${this.thumbnail}" alt="${this.title}" class="img_listCard">
                <div class="card_description">
                    <h2 class="title_listCard">${this.title}</h2>
                    <div class="${this.plataform} plataform">${this.platform}</div>
                    <h3 class="gender ${this.genre}">${this.genre}</h3>
                </div>
            </div>
        </a>
                `;
    return miniCard;
  }

  renderGamePage() {
    const gamePage = `
      <article class='pictures_container'>
        <div class='centerPictures'>
          <img class='background-image_gameDetail' src='${this.screenshots[0].image}' alt='${this.title}'>
          <img class='picture_gameDetail' src='${this.thumbnail}' alt='${this.title}'>
          <div class="screenPictures_container">
            <img class='screenPictures' src='${this.screenshots[0].image}' alt='${this.title}'>
            <img class='screenPictures' src='${this.screenshots[1].image}' alt='${this.title}'>
            <img class='screenPictures' src='${this.screenshots[2].image}' alt='${this.title}'>
            <img class='screenPictures' src='${this.thumbnail}' alt='${this.title}'>
          </div>
        </div>
      </article>
      <article class='game_description'>
        <h2 class='title title_gameDetail'>${this.title}</h2>
        <h3 class='subtitle'>Resume</h3>
        <p class='text_description'>${this.description}</h2>
        <div class='gameData_container'>
          <div class='gameData_container_left'>
            <div class='gameData'>
              <h2 class='title'>Game Data</h2>
              <p class='titleSpanDate'>Publisher:<span class='spanDate'>${this.publisher}</span></p>
              <p class='titleSpanDate'>Release Date:<span class='spanDate'>${this.date}</span></p>
              <p class='titleSpanDate lastSpan'>Developer:<span class='spanDate'>${this.developer}</span></p>
              <h3 class="gender ${this.genre} genderSpan">${this.genre}</h3>
            </div>
          </div>
          <div class='gameData_container_rigth'>
            <div class='gameData'>
              <h2 class='title'>Requirements</h2>
              <p class='titleSpanDate'>Operative System:<span class='spanDate'>${this.minimum_system_requirements.os}</span></p>
              <p class='titleSpanDate'>Processor:<span class='spanDate'>${this.minimum_system_requirements.processor}</span></p>
              <p class='titleSpanDate'>Memory:<span class='spanDate'>${this.minimum_system_requirements.memory}</span></p>
              <p class='titleSpanDate'>Graphics:<span class='spanDate'>${this.minimum_system_requirements.graphics}</span></p>
              <p class='titleSpanDate'>Storage::<span class='spanDate'>${this.minimum_system_requirements.storage}</span></p>
              </div>
          </div>
        </div>
      </article>
    `;
    return gamePage;
  }
}

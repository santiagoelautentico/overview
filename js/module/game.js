export class Game {
  constructor(id, cover_picture, title, gender, date, platform, developer) {
    this.id = id;
    this.cover_picture = cover_picture;
    this.title = title;
    this.gender = gender;
    this.date = date;
    this.plataform = platform;
    this.developer = developer;
  }

  renderMiniCard() {
    const miniCard = `
            <div class="card" data-id="${this.id}">
                <img src="${this.cover_picture}" alt="${this.title}" class="img_listCard">
                <div class="card_description">
                    <h2 class="title_listCard">${this.title}</h2>
                    <div class="${this.plataform} plataform">${this.plataform}</div>
                    <h3 class="gender ${this.gender}">${this.gender}</h3>
                </div>
            </div>
        `;
    return miniCard;
  }

  renderGamePage() {
    const gamePage = `<h2 id="${this.id}">${this.title}</h2>`;
    return gamePage;
  }
  renderScreenshoots() {
    const screenPage = `<h2>ScreenShoots</h2>`;
    return screenPage;
  }
}

export class ListOfGames {
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
            <article class="card" id="${this.id}">
                <img src="${this.cover_picture}" alt="${this.title}" class="img_listCard">
                <div class="card_description">
                    <h2 class="title_listCard">${this.title}</h2>
                    <div class="card_info">
                      <div class="date_plataform">
                        <p>${this.date}</p>
                        <p>${this.plataform}</p>
                      </div>
                      <p>${this.developer}</p>
                    </div>
                    <h3 class="gender ${this.gender}">${this.gender}</h3>
                </div>
            </article>
        `;
    return miniCard;
  }
}

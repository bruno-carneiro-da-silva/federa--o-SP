import { playersInsights } from "../mock/players-mock.js";
function playerDetails() {
  const container = document.getElementById("player-details-container");

  playersInsights.forEach((player) => {
    const playerDiv = document.createElement("div");
    playerDiv.className = "swiper-slide";
    playerDiv.innerHTML = `
          <div class="player-details-single">
            <div class="player-picture"><img src="${player.imgSrc}" alt="playerspic"></div>
            <div class="contents">
              <span class="player-position-number">#${player.id}</span>
              <h2 class="player-name">${player.name}</h2>
              <h3 class="player-role">${player.role}</h3>
              <p>${player.description}</p>
              <a href="players.html" class="more-details-btn">MAIS DETALHES <i class="fa fa-arrow-right ml--5"></i></a>
            </div>
            <div class="player-status-area">
              <div class="status-box">
                <span class="box-title">2024-22 STATUS</span>
                <div class="status-item">
                  <span class="status-name">Técnica</span>
                  <span class="status-number">${player.status.gamesPlayed}</span>
                </div>
                <div class="status-item">
                  <span class="status-name">Vocabulário</span>
                  <span class="status-number">${player.status.minutesPlayed}</span>
                </div>
                <div class="status-item">
                  <span class="status-name">Originalidade</span>
                  <span class="status-number">${player.status.goals}</span>
                </div>
                <div class="status-item">
                  <span class="status-name">Execução</span>
                  <span class="status-number">${player.status.assists}</span>
                </div>
                <div class="status-item">
                  <span class="status-name">Musicalidade</span>
                  <span class="status-number">${player.status.jerseyNumber}</span>
                </div>
              </div>
              <div class="status-percentage">
                <div class="sp-item">
                  <span class="per">${player.percentages.possing}<span>%</span></span>
                  <span class="title">POSSING</span>
                </div>
                <div class="sp-item">
                  <span class="per">${player.percentages.tackles}<span>%</span></span>
                  <span class="title">TACKLES</span>
                </div>
                <div class="sp-item">
                  <span class="per">${player.percentages.dribbling}<span>%</span></span>
                  <span class="title">DRIBBLING</span>
                </div>
              </div>
            </div>
          </div>
        `;
    container.appendChild(playerDiv);
  });
}
playerDetails();

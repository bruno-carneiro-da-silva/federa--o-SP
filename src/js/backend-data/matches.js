// Mock de dados dos eventos
const events = [
  {
    team1: { logo: "images/logo_1.png", name: "Organização" },
    team2: { logo: "images/logo_2.png", name: "Organização" },
    title: "Campeonato Paulista de breaking",
    date: "Março 20th, 2020",
    time: "9:30 AM GMT+0",
    location: "Teatro Castro Mendes",
  },
  {
    team1: { logo: "images/logo_3.png", name: "Organização" },
    team2: { logo: "images/logo_4.png", name: "Organização" },
    title: "Campeonato Paulista de breaking",
    date: "Março 21st, 2020",
    time: "10:00 AM GMT+0",
    location: "Teatro Castro Mendes",
  },
  {
    team1: { logo: "images/logo_3.png", name: "Organização" },
    team2: { logo: "images/logo_4.png", name: "Organização" },
    title: "Campeonato Paulista de breaking",
    date: "Março 21st, 2020",
    time: "10:00 AM GMT+0",
    location: "Teatro Castro Mendes",
  },
  {
    team1: { logo: "images/logo_3.png", name: "Organização" },
    team2: { logo: "images/logo_4.png", name: "Organização" },
    title: "Campeonato Paulista de breaking",
    date: "Março 21st, 2020",
    time: "10:00 AM GMT+0",
    location: "Teatro Castro Mendes",
  },
  // Adicione mais eventos conforme necessário
];

// Função para gerar o conteúdo dos cards
function generateEventCards() {
  const container = document.getElementById("events-container");
  events.forEach((event) => {
    const card = document.createElement("div");
    card.className = "col-lg-6 mb-4";
    card.innerHTML = `
        <div class="bg-light p-4 rounded position-relative">
          <div class="overlay-text">
            <h2>Informações serão divulgadas em breve!</h2>
          </div>
          <div class="widget-body">
            <div class="widget-vs">
              <div class="d-flex align-items-center justify-content-around justify-content-between w-100">
                <div class="team-1 text-center">
                  <img src="${event.team1.logo}" alt="Image" />
                  <h3>${event.team1.name}</h3>
                </div>
                <div>
                  <span class="vs"><span>-</span></span>
                </div>
                <div class="team-2 text-center">
                  <img src="${event.team2.logo}" alt="Image" />
                  <h3>${event.team2.name}</h3>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center widget-vs-contents mb-4">
            <h4>${event.title}</h4>
            <p class="mb-5">
              <span class="d-block">${event.date}</span>
              <span class="d-block">${event.time}</span>
              <strong class="text-primary">${event.location}</strong>
            </p>

            <div id="date-countdown2" class="pb-1"></div>
          </div>
        </div>
      `;
    container.appendChild(card);
  });
}

// Chama a função para gerar os cards dos eventos
generateEventCards();

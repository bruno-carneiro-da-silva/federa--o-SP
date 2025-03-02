import { players, playersInsights } from "../mock/players-mock.js";

function playersData() {
  const container = document.getElementById("players-container");

  players.forEach((player) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.innerHTML = `
              <div class="">
                <div class="video-media">
                  <img
                    src="${player.imgSrc}"
                    alt="Image"
                    class="img-fluid"
                  />
                  <a
                    href="#"
                    class="d-flex play-button align-items-center"
                    data-toggle="modal"
                    data-target="#videoModal"
                    data-id="${player.id}"
                    data-video-url="${player.videoUrl}"
                  >
                    <span class="icon mr-3">
                      <span class="icon-play"></span>
                    </span>
                    <div class="caption">
                      <span class="meta">${player.meta}</span>
                      <h3 class="m-0">${player.name}</h3>
                    </div>
                  </a>
                </div>
              </div>
            `;

    container.appendChild(itemDiv);
  });
  $("#videoModal").on("show.bs.modal", function (event) {
    const button = $(event.relatedTarget);
    const videoUrl = button.data("video-url");
    const playerId = button.data("id");
    const player = players.find((p) => p.id == playerId);

    if (player) {
      const modal = $(this);
      modal.find(".content__title h1").text(player.name);
      modal
        .find(".content__avatar")
        .css("background-image", `url(${player.imgSrc})`);

      modal.find(".content__title span").text(player.city);
      modal.find(".content__description").html(`
        <p>Categoria: ${player.category || "Sem categoria"}</p>
        <p>NI: ${player.NI || "NI não informado"}</p>
        <p>Ranking: ${player.position || "Posição não informada"}</p>
      `);
      modal.find("#videoFrame").attr("src", videoUrl);
    }
  });

  $("#videoModal").on("hide.bs.modal", function () {
    $("#videoFrame").attr("src", "");
  });
}

function initCarousel() {
  $(".owl-4-slider").owlCarousel({
    loop: false,
    margin: 10,
    nav: false, // Desativa os botões padrão prev/next
    dots: false, // Mantém os dots ativados para controle da paginação
    items: 4,
    onInitialized: createPagination,
    onTranslated: updatePagination,
  });
}
playersData();
initCarousel();


// (() => {
//   "use-strict";

//   const themeSwiter = {
//     init: function () {
//       this.wrapper = document.getElementById("theme-switcher-wrapper");
//       this.button = document.getElementById("theme-switcher-button");
//       this.theme = this.wrapper.querySelectorAll("[data-theme]");
//       this.themes = [
//         "theme-orange",
//         "theme-purple",
//         "theme-green",
//         "theme-blue",
//       ];
//       this.events();
//       this.start();
//     },

//     events: function () {
//       this.button.addEventListener("click", this.displayed.bind(this), false);
//       this.theme.forEach((theme) =>
//         theme.addEventListener("click", this.themed.bind(this), false)
//       );
//     },

//     start: function () {
//       let theme = this.themes[Math.floor(Math.random() * this.themes.length)];
//       document.body.classList.add(theme);
//     },

//     displayed: function () {
//       this.wrapper.classList.contains("is-open")
//         ? this.wrapper.classList.remove("is-open")
//         : this.wrapper.classList.add("is-open");
//     },

//     themed: function (e) {
//       this.themes.forEach((theme) => {
//         if (document.body.classList.contains(theme))
//           document.body.classList.remove(theme);
//       });
//       return document.body.classList.add(
//         `theme-${e.currentTarget.dataset.theme}`
//       );
//     },
//   };

//   themeSwiter.init();
// })();




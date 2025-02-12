const athletes = [
  {
    position: 1,
    name: "Bboy fulano",
    wins: 22,
    draws: 3,
    losses: 2,
    points: 140,
  },
  {
    position: 2,
    name: "Bgirl Beltrano",
    wins: 22,
    draws: 3,
    losses: 2,
    points: 140,
  },
  {
    position: 3,
    name: "Bgirl Ciclaninha",
    wins: 22,
    draws: 3,
    losses: 2,
    points: 140,
  },
  {
    position: 4,
    name: "Bgirl Canvasin",
    wins: 22,
    draws: 3,
    losses: 2,
    points: 140,
  },
  {
    position: 5,
    name: "Bboy legs",
    wins: 22,
    draws: 3,
    losses: 2,
    points: 140,
  },
  {
    position: 6,
    name: "Bgirl Gliwice",
    wins: 22,
    draws: 3,
    losses: 2,
    points: 140,
  },
  {
    position: 7,
    name: "Bboy Cornika",
    wins: 22,
    draws: 3,
    losses: 2,
    points: 140,
  },
  {
    position: 8,
    name: "Bboy Gravity",
    wins: 22,
    draws: 3,
    losses: 2,
    points: 140,
  },
];

// Função para gerar o conteúdo da tabela
function generateTableContent() {
  const tableBody = document.getElementById("athletes-table");
  athletes.forEach((athlete) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${athlete.position}</td>
        <td><strong class="text-white">${athlete.name}</strong></td>
        <td>${athlete.wins}</td>
        <td>${athlete.draws}</td>
        <td>${athlete.losses}</td>
        <td>${athlete.points}</td>
      `;
    tableBody.appendChild(row);
  });
}

// Chama a função para gerar o conteúdo da tabela
generateTableContent();

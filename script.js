const projects = [
  {
    title: "Numero secreto-ALURA",
    description: "Projeto que fez parte do curso ONE, uma parceira Alura e Oracle. É um jogo bem simples que o usuario tenta acertar um numero",
    link: "https://github.com/andreondev/jogo-do-numero-secreto"
  },
  {
    title: "Linktree Creative Store",
    description: "Este projeto funciona como uma arvore de links, utilizando um designer simples e limpo que desenvolve para minha loja de roupas",
    link: "https://github.com/andreondev/creative-store-links"
  },
  {
    title: "Bot Imprimer V1",
    description: "Um projeto realizado para automatizar processos de alguns sistemas da Secretia Municipal de Saúde",
    link: "#"
  }
];

const container = document.getElementById("lista-projetos");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}">Ver projeto →</a>
  `;

  container.appendChild(card);
});
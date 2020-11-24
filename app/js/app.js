const negociacao = new NegociacaoController();
document.querySelector('.form')
    .addEventListener('submit', negociacao.adicionar.bind(negociacao));

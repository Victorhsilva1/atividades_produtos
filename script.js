'use strict'


import produtos from "./produtos_atualizados.json" with {type: "json"}
 
const container = document.querySelector('.items')
 
const criarCard = (produto) => {
    const card = document.createElement('div')
    card.classList.add('card')
 
    const imagem = document.createElement('img')
    imagem.classList.add('cardImg')
    imagem.src = `./img/${produto.imagem}`
    imagem.alt = produto.nome
 
    const titulo = document.createElement('h4')
    titulo.classList.add('card-title')
    titulo.textContent = produto.nome
 
    const descricao = document.createElement('p')
    descricao.classList.add('card-description')
    descricao.textContent = produto.descricao
 
    const ratingContainer = document.createElement('div')
    ratingContainer.classList.add('card-rating')

    const ratingSpan = document.createElement('span')
  
    ratingSpan.textContent = `Classificação: ${produto.classificacao} `
    ratingContainer.appendChild(ratingSpan)

    const preco = document.createElement('p')
    preco.classList.add('card-price')


    card.append(imagem, titulo, descricao, ratingContainer, preco)
 
    return card
}
 
const carregarProdutos = () => {

    const cards = produtos.map(criarCard)
    cards.forEach(card => container.appendChild(card))
}
 
carregarProdutos()
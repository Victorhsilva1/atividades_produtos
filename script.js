'use strict'


import produtos from "./produtos_atualizados.json" with {type: "json"}
 
//Selecionando o elemento items será o container para todos os cards.
const container = document.querySelector('.items')
 
const criarCard = (produto) => {

    //Criando as constantes como cada elemento do html
    const card = document.createElement('div')
    card.classList.add('card')
    
    //Ou seja criando a constante imagem e definindo que 
    const imagem = document.createElement('img')
    //Haverá um cardImg que será a class desse elemento
    imagem.classList.add('cardImg')
    //Pegando a imagem do json
    imagem.src = `./img/${produto.imagem}`
    // E pegando o nome do produto no json também e assim sucessivamente para cada 
    // um dos elementos presentes no json, e transferindo ele como html
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

    //Adicionando os elementos em cada div
    card.append(imagem, titulo, descricao, ratingContainer, preco)
 
    //Retornando a função card
    return card
}
 
const carregarProdutos = () => {

    //Utilizando o map para chamar a função de CallBack que "varre os arrays"
    const cards = produtos.map(criarCard)
    //forEach ou seja, até que exista produtos irá repitir o mesmo processo
    cards.forEach(card => container.appendChild(card))
}
 
carregarProdutos()
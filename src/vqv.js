/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/
const checkNameValid = (name) => {
  if (!name || !name.trim()) {
    return undefined
  }

  return name
};

const checkAgeValid = (age) => {
  if (!age || age < 0) {
    return undefined;
  }

  return age;
};

const vqv = (nome, idade) => {
  if (checkNameValid(nome) === undefined || checkAgeValid(idade)  === undefined) {
    return undefined;
  }
  
  return `Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
};

module.exports = vqv;

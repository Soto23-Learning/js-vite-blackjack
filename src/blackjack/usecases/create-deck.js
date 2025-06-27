import _ from "underscore";
// Esta función crea un nuevo deck
/**
 * Esta función crea un nuevo deck
 * @param {array<String>} tiposDeCartas Ejemplo: ['C', 'D', 'H', 'S']
 * @param {array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns  {array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {
  if (!tiposDeCartas || tiposDeCartas.length === 0)
    throw new Error("Tipos de cartas es obligatorio como un arreglo de string");

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCartas) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCartas) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  deck = _.shuffle(deck);
  return deck;
};

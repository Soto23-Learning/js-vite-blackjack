/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} deck
 * @returns {String} regresa la carta tomada
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};

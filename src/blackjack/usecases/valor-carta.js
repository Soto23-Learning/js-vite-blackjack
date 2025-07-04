/**
 * Esta funcion me permite tomar el valor de la carta
 * @param {String} carta
 * @returns {Number} regresa el valor de la carta
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};

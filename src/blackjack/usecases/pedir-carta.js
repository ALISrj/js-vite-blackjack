/**
 *
 * @param {Array<String>} deck
 * @returns {String} retorna una Carta
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) {
        throw new Error("No hay cartas en el deck");
    }
    return deck.pop();
}
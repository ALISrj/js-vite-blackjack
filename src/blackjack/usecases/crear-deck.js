import _ from 'underscore';
// export const miNombre = "Alex";


/**
 *
 * @param {Array<String>} tiposDeCarta Example: ["C", "D", "H", "S"]
 * @param {Array<String>} tiposEspeciales Example: ["A", "J", "Q", "K"]
 * @returns {Array<String>} returns a new deck
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error('Tipos de carta debe ser obligatorio como un arreglo de strings')

    if (!tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error('Tipos especiales debe ser obligatorio como un arreglo de strings')

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (const tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (const tipo of tiposDeCarta) {
        for (const especial of tiposEspeciales) {
            deck.push(especial + tipo);
        }
    }

    return _.shuffle(deck);
}

// export default crearDeck;
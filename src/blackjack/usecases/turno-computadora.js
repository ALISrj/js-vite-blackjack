import {pedirCarta,  acumularPuntos, crearCarta, determinarGanador} from "./index.js";

/**
 *
 * @param {Array<String>} deck
 * @param {NodeListOf<HTMLElement>} puntosHTML
 * @param {Array<Number>} puntosJugadores
 * @param {NodeListOf<Element>}  divCartasJugadores
 * @param puntosMinimos
 */
export const turnoComputadora = (deck, puntosHTML, puntosJugadores, divCartasJugadores, puntosMinimos) => {

    let puntosComputadora = 0;

    do {

        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(puntosHTML, puntosJugadores, carta, puntosJugadores.length - 1);
        crearCarta(divCartasJugadores, carta, puntosJugadores.length - 1);

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores);
}
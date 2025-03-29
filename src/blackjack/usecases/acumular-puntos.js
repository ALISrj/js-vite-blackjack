import {valorCarta} from "./valor-carta.js";

// Turno : 0 jugador, ultimo: computadora
/**
 *
 * @param {NodeListOf<HTMLElement>} puntosHTML
 * @param {Array<Number>} puntosJugadores
 * @param {String} carta
 * @param {Number} turno
 * @returns {Number} Retorna los puntos del jugador que tiene el turno
 */
export const acumularPuntos = (puntosHTML, puntosJugadores, carta, turno) => {

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}
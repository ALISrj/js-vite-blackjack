/**
 *
 * @param {NodeListOf<Element>} divCartasJugadores
 * @param {String} carta
 * @param {Number} turno 
 */
export const crearCarta = (divCartasJugadores, carta, turno) => {

    const imgCarta = document.createElement('img')
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.alt = "carta";
    imgCarta.classList.add("carta");
    divCartasJugadores[turno].append(imgCarta);

}
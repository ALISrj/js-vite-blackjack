/**
 *
 * @param {Array<Number>} puntosJugadores
 */
export const determinarGanador = (puntosJugadores) => {

    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert("Empatee!!!!");
        } else if (puntosMinimos > 21) {
            alert("Perdiste :c");
        } else if (puntosComputadora > 21) {
            alert("Ganastee!!!");
        } else {
            alert("Perdiste :C")
        }
    }, 100)

}
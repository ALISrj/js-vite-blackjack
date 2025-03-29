import _ from 'underscore'
// import { crearDeck as crearNuevoDeck } from './usecases/crear-deck.js';
// import crearDeck, {miNombre} from './usecases/crear-deck.js';
// import { crearDeck } from './usecases/crear-deck.js';
// import {pedirCarta} from "./usecases/pedir-carta.js";
// import {valorCarta} from "./usecases/valor-carta.js";

import {crearDeck, pedirCarta, acumularPuntos, crearCarta, turnoComputadora} from "./usecases/index.js";

// 2C 2 de clubs
// 2D 2 de diamonds
// 2H 2 de hearts
// 2S 2 de spades

const miModulo = (() => {
    'use strict';

    let deck = [];
    const tipos = ["C", "D", "H", "S"],
        especiales = ["A", "J", "Q", "K"];

    let puntosJugadores = [0];

    // Referencias HTML
    const btnPedir = document.querySelector("#btnPedir"),
        btnDetener = document.querySelector("#btnDetener"),
        btnNuevo = document.querySelector("#btnNuevo");

    const puntosHTML = document.querySelectorAll('small'),
        divCartasJugadores = document.querySelectorAll('.divCartas');


    const inicializarJuego = (numJugadores = 2) => {

        deck = crearDeck(tipos,especiales);
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach( element => element.innerText = 0 );
        divCartasJugadores.forEach( element => element.innerHTML= '' );

        btnDetener.disabled = false;
        btnPedir.disabled = false;
    }

// Eventos
    btnPedir.addEventListener("click", () => {

        const carta = pedirCarta(deck);
        const puntosJugador = acumularPuntos(puntosHTML, puntosJugadores, carta, 0);

        crearCarta(divCartasJugadores, carta , 0 );

        if (puntosJugador > 21) {
            console.warn("Perdisteee!!!");
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(deck, puntosHTML, puntosJugadores, divCartasJugadores, puntosJugador);

        } else if (puntosJugador === 21) {
            console.warn("21, Genial!!!")
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(deck, puntosHTML, puntosJugadores, divCartasJugadores, puntosJugador);
        }

    });

    btnDetener.addEventListener("click", () => {

        btnDetener.disabled = true;
        btnPedir.disabled = true;

        turnoComputadora(deck, puntosHTML, puntosJugadores, divCartasJugadores, puntosJugadores[0])
    });

    btnNuevo.addEventListener("click", () => {

        inicializarJuego();

    })

    return {
        nuevoJuego: inicializarJuego,
    };

})();

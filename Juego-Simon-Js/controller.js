const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
debugger;
const btnEmpezar = document.getElementById('btnEmpezar');

class Juego {
    constructor() {
        this.inicializar();
        this.generarSecuencia();
        this.siguienteNivel();
    }

    inicializar() {
        btnEmpezar.classList.add('hide');
        this.nivel = 1;
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }

    generarSecuencia() {
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    siguienteNivel() {
        this.iluminarSecuencia();
    }

    transformarNumeroAColor(numero) {
        return {
            0: 'celeste',
            1: 'violeta',
            2: 'naranja',
            3: 'verde'
        }[numero] || '';
    }
    apagarColor(color) {
        this.colores[color].classList.remove('light');
    }

    iluminarColor(color) {
        this.colores[color].classList.add('light');
        setTimeout(() => this.apagarColor(), 350);
    }

    iluminarSecuencia() {
        for (var i = 0; i < this.nivel; i++) {
            var color = this.transformarNumeroAColor(this.secuencia[i]);
            setTimeout(() => this.iluminarColor(color), 1000 * i);

        }
    }
}

function empezarJuego() {
    var juego = new Juego();
}
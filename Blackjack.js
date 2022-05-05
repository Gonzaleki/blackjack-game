


const J = 10
const Q = 10
const K = 10
const A = 1



let elMazo = [2, 2, 2, 2, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1, 1, 1, 1]
let miMano = []
let suMano = []
let suma = 0
let suSuma = 0
console.log(elMazo)

const nuevoJuego = document.getElementById('nuevo-juego')
const manoCasa = document.getElementById('mano-casa');
const manoUsuario = document.getElementById('mano-usuario')
const aumentar = document.getElementById('aumentar-btn')
const disminuir = document.getElementById('disminuir-btn')
const creditosUsuario = document.getElementById('creditos-usuario')
const apuestaUsuario = document.getElementById('apuesta-usuario')
const apostar = document.getElementById('apostar')
const pedirCarta = document.getElementById("pedir-carta")
pedirCarta.disabled = true
const nuevaManoUsuario = document.getElementById('nueva-mano')
const sumaMiMano = document.getElementById('suma-mano')
const cerrarMiMano = document.getElementById('cerrar-mano')
cerrarMiMano.disabled = true

let creditos = 100
creditosUsuario.innerHTML = creditos;

let apuesta = 10
apuestaUsuario.innerHTML = apuesta;


apostar.addEventListener('click', function () {
    if (creditos > 1) {
        miMano = []
        suMano = []
        manoCasa.innerHTML = suMano
        manoInicial(miMano);
        sumaMano(miMano);
        pedirCarta.disabled = false
        cerrarMiMano.disabled = false
        aumentar.disabled = true
        disminuir.disabled = true
        apostar.disabled = true
        creditos = creditos - apuesta
        creditosUsuario.innerHTML = creditos
    } else {
        alert("Perdiste!")
        apostar.disabled = true
        aumentar.disabled = true
        disminuir.disabled = true
    }
})



aumentar.addEventListener('click', function () {
    if (apuesta < creditos) {
        apuesta += 10;
        document.getElementById('apuesta-usuario').innerHTML = apuesta;
    } else if (creditos === 0) {
        alert("Perdiste!")
        apostar.disabled = true
        aumentar.disabled = true
        disminuir.disabled = true
    }
})



disminuir.addEventListener('click', function () {
    if (apuesta > 0) {
        apuesta -= 10;
        document.getElementById('apuesta-usuario').innerHTML = apuesta;
    } else { }
})


pedirCarta.addEventListener('click', function () {
    tomarCarta(miMano)
    sumaMano(miMano);
})


cerrarMiMano.addEventListener('click', function () {

    manoMaquina(suMano)
    let suma = 0
    for (let i = 0; i < miMano.length; i++) {
        suma += miMano[i];
    } if (suSuma > suma && suSuma > 21) {
        sumaMiMano.innerHTML = "Ganaste!"
        creditos = creditos + (apuesta * 2)
        creditosUsuario.innerHTML = creditos
        suma = 0
        apuesta = 10
        apuestaUsuario.innerHTML = apuesta;
        pedirCarta.disabled = true
        cerrarMiMano.disabled = true
        aumentar.disabled = false
        disminuir.disabled = false
        apostar.disabled = false
    } else {
        sumaMiMano.innerHTML = "Perdiste!"
        suma = 0
        apuesta = 10
        apuestaUsuario.innerHTML = apuesta;
        pedirCarta.disabled = true
        cerrarMiMano.disabled = true
        aumentar.disabled = false
        disminuir.disabled = false
        apostar.disabled = false
    }
}
)



nuevoJuego.addEventListener('dblclick', function () {
    creditos = 100
    document.getElementById('creditos-usuario').innerHTML = creditos;
    apuesta = 10
    document.getElementById('apuesta-usuario').innerHTML = apuesta;
    miMano = []
    nuevaMano = []
    suma = 0
    sumaMiMano.innerHTML = "A jugar!"
    manoUsuario.innerHTML = miMano
    pedirCarta.disabled = true
    cerrarMiMano.disabled = true
    aumentar.disabled = false
    disminuir.disabled = false
    apostar.disabled = false
    alert('Suerte!')
    console.log(elMazo);
})





// DEBAJO ESTAN LAS FUNCIONES 



function manoInicial(mano) {

    mano.push(elMazo[Math.floor(Math.random() * elMazo.length)]);
    mano.push(elMazo[Math.floor(Math.random() * elMazo.length)]);

    manoUsuario.innerHTML = mano
}



function manoMaquina(mano) {
    let suma = 0
    for (let i = 0; i < miMano.length; i++) {
        suma += miMano[i];
    }
    suSuma = 0

    for (let i = 0; i < 2; i++) {
        mano.push(elMazo[Math.floor(Math.random() * elMazo.length)]);
    }
    for (let i = 0; i < mano.length; i++) {
        suSuma += mano[i];

    }

    if (suSuma < suma) {
        for (let i = 0; i < 1; i++) {
            mano.push(elMazo[Math.floor(Math.random() * elMazo.length)]);
            suSuma = 0
            for (let i = 0; i < mano.length; i++) {
                suSuma += mano[i];

            }

        }
    } else { }
    if (suSuma < suma) {
        for (let i = 0; i < 1; i++) {
            mano.push(elMazo[Math.floor(Math.random() * elMazo.length)]);
            suSuma = 0
            for (let i = 0; i < mano.length; i++) {
                suSuma += mano[i];

            }

        }
    } else { }
    if (suSuma < suma) {
        for (let i = 0; i < 1; i++) {
            mano.push(elMazo[Math.floor(Math.random() * elMazo.length)]);
            suSuma = 0
            for (let i = 0; i < mano.length; i++) {
                suSuma += mano[i];

            }

        }
    } else { }
    if (suSuma < suma) {
        for (let i = 0; i < 1; i++) {
            mano.push(elMazo[Math.floor(Math.random() * elMazo.length)]);
            suSuma = 0
            for (let i = 0; i < mano.length; i++) {
                suSuma += mano[i];

            }

        }
    } else { }
    if (suSuma < suma) {
        for (let i = 0; i < 1; i++) {
            mano.push(elMazo[Math.floor(Math.random() * elMazo.length)]);
            suSuma = 0
            for (let i = 0; i < mano.length; i++) {
                suSuma += mano[i];

            }

        }
    } else { }
    manoCasa.innerHTML = suMano
}


function sumaMano(arr) {
    let suma = 0
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];

    } sumaMiMano.innerHTML = suma

    if (suma < 21) {
        sumaMiMano.innerHTML += " Pedis carta?"
    } else if (suma === 21) {
        sumaMiMano.innerHTML += " Blackjack!"
        creditos = creditos + (apuesta * 2)
        creditosUsuario.innerHTML = creditos
        suma = 0
        apuesta = 10
        apuestaUsuario.innerHTML = apuesta;
        pedirCarta.disabled = true
        cerrarMiMano.disabled = true
        aumentar.disabled = false
        disminuir.disabled = false
        apostar.disabled = false
    } else {
        sumaMiMano.innerHTML += " Te pasaste!"
        suma = 0
        apuesta = 10
        apuestaUsuario.innerHTML = apuesta;
        pedirCarta.disabled = true
        cerrarMiMano.disabled = true
        aumentar.disabled = false
        disminuir.disabled = false
        apostar.disabled = false
    }

}



function tomarCarta(mano) {
    mano.push(elMazo[Math.floor(Math.random() * elMazo.length)]);
    manoUsuario.innerHTML = mano
}



//AVERIGUAR VALORES J Q K A 10
//SE DEBE QUITAR LOS VALORES DEL ARRAY, NO SOLO TOMARLOS.

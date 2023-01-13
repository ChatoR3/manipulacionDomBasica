// Declaramos constantes para los selectores JS
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const form = document.querySelector('#formEnviar');
const pResult = document.querySelector('#result');
const pResult2 = document.querySelector('#result2');
const input3 = document.querySelector('#calculo3');
const input4 = document.querySelector('#calculo4');
// Agrega escuchar eventeo
/*
btn.addEventListener('click', btnOnClick);

// Se crea función del evento
function btnOnClick() {
    const sumaInputs = +input1.value + +input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}

*/


form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    event.preventDefault();
    const sumaInputs2 = +input3.value + +input4.value;
    pResult2.innerText = "Resultado: " + sumaInputs2;
}


/*
Otra forma para que no se refresque la página

btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
    event.preventDefault();
    const sumaInputs2 = +input3.value + +input4.value;
    pResult2.innerText = "Resultado: " + sumaInputs2;
}
Pero para que este evento funcione se debe de poner en el HTML al botón que sea tipo button
*/
/*dsf*/
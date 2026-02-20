// Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

// metodo hyur
// function createMultipler(numero1) {
//     return function (numero2) {
//         return numero1 ** numero2;
//     }
// }

// const multiplo2 = createMultipler(3)

// console.log(multiplo2(2));

// alternativa
function createMultipler(numero1) {

    return numero1 ** 2;

}
console.log(createMultipler(3));


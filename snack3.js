// Definisci una funzione eseguiOperazione che accetta tre parametri: 
// due numeri e una funzione operatore (callback). 
// La funzione deve eseguire l'operazione fornita sui due numeri.


const somma = (a, b) => a + b;
const moltiplicazione = (a, b) => a * b;

function eseguiOperazione(a, b, operazioni) {
    return operazioni(a, b)
}

console.log(eseguiOperazione(4, 4, somma));
console.log(eseguiOperazione(4, 4, moltiplicazione));
console.log(eseguiOperazione(8, 8, somma));

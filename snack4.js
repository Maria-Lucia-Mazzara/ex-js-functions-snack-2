// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(tempo) {
    return () => {
        setTimeout(() => {
            console.log('Tempo scaduto!')
        }, tempo);
    }
}
const timer1s = creaTimer(1000)
timer1s()

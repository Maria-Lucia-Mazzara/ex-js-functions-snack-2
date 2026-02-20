// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. 
// Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEferma(messaggio, intervallo, stop) {
    return () => {

        let timerId = setInterval(() => {
            console.log(messaggio);

        }, intervallo)

        setTimeout(() => {
            clearInterval(timerId)
        }, stop)
    }
}

const text = eseguiEferma('miao', 1000, 3000)
text()
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

function stampaOgniSecondo(messaggio) {
    return () => {
        setInterval(() => {
            console.log(messaggio.toString());
        }, 1000)
    }
}

const intervallo = stampaOgniSecondo('Ho finito il tempo')
intervallo()
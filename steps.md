# Carosello Mono Array

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato. Potete anche usare immagini diverse e variare leggermente lo stile, l'importante è la logica!

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparre l'ultima e viceversa!

BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails in basso o sulla destra dell’immagine grande attiva, (usate lo screen in allegato come ispirazione). Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

Consigli del giorno:

<br>
<br>

**0.0** Creo l'array delle immagini.

**0.1** Prepraro il layout l'HTML

**0.2** Prepraro il layout CSS

**0.3** Nascondo tutte le immagini tranne la prima tramite con una classe display:none.

**1.0** Recupero tutti gli elemento dal DOM.

**2.0** Richiamo l'elemento event click su i bottoni Prev e Next

**3.0** All'interno dell'event listener genero il ciclo for sulle immagini e tramite un currentNumber [i] aggiungo o rimuovo la classe display:none alle immagini.

**3.1** Genero un ciclo for sull'array delle immagini.

**3.2** Tramite un currentNumber [i] aggiungo o rimuovo la classe display:none alle immagini.

**4.0** Provo tramite delle condizion [if], a rendere infinito il carosello.

**5.0** Preparo l'HTML e il CSS per le thumbnails.

**6.0** Assegno ai thumbnails la stessa logica presente alle immagini nell'event listener dei bottoni Pre e Next [ì].

**7.0 ** Provo a rendere i thumbnails cliccabili.
**FINE**

**PS:** Eseguirò l'esercizio prima con layout literar e poi con le DOM API (commentanto le seconde per non mandare in conflitto lo script)

console.log('JS OK')

/* 
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
Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
Consigli del giorno:
1. Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
Buon lavoro e buon ponte!
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
*/ 

/*---------------------------------------
        FUNZIONI
---------------------------------------*/


/*---------------------------------------
        OPERAZIONI PRELIMINARI
---------------------------------------*/
// # Recupero dal DOM i [BOTTONI]
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// # Recupero dal DOM [GALLERY] e [THUMBNAILS]
const gallery = document.querySelector('.gallery');
const thumbnailsGallery = document.getElementById('thumbnails');

// # Preparo l'array delle immagini
const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp']

// ? versione template literal (innerHTML)
// # Per ogni sources preparo un tag img
  
  let imagesElements = '';

  for(let i = 0; i < sources.length; i++){
  imagesElements += `<img src="${sources[i]}" alt="Comics ${sources[i]}">`
}

// # Inserisco le immagini nel DOM
gallery.innerHTML = imagesElements;
thumbnailsGallery.innerHTML = imagesElements;

// # Recupero dal DOM tutte le [IMAGES] della gallery e i [THUMBNAILS]
const images = document.querySelectorAll('#carousel img');
const thumbnails = document.querySelectorAll('#thumbnails img');

// #Preparo la gestione dell'Index
let currentIndex = 0;

// #Impostiamo  la prima immagine come attiva
images[currentIndex].classList.add('active');
thumbnails[currentIndex].classList.add('active');

/*---------------------------------------
        PROGRAMMA
---------------------------------------*/

// # btn AVANTI -------------------------

nextBtn.addEventListener('click', function() {

  // Rimuovo la classe active [class='active'] dall'immagine corrispondente al [currentIndex]
  images[currentIndex].classList.remove('active');
  thumbnails[currentIndex].classList.remove('active');

  // Incremento il [currentIndex]
  currentIndex++;
  console.log('il CurrentIndex corrente è ' + currentIndex);


  //! Controllo se il currentIndex è uguale alla [images.lenght] nel caso di controllo positivo setto il currentIndex a 0 per far partire il carosello alla prima immagine.
  if (currentIndex === sources.length) currentIndex = 0;


  // Aggiungo la classe active [class='active'] all'immagine corrispondente al mio [currentIndex] 
  images[currentIndex].classList.add('active');
  thumbnails[currentIndex].classList.add('active');
});


//  # btn INDIETRO -------------------------

prevBtn.addEventListener('click', function(){

  // Aggiungo la classe active [class='active'] all'immagine corrispondente al mio [currentIndex] 
  images[currentIndex].classList.remove('active');
  thumbnails[currentIndex].classList.remove('active');

  // Decremento il [currentIndex]
  currentIndex--;

  //! Controllo se il currentIndex è 0 nel caso setto il currentIndex a images.lenght -1 per far partire il carosello all'ultima immagine
  if (currentIndex < 0) currentIndex = sources.length - 1 ;

      console.log('il CurrentIndex dopo if  ' + currentIndex);

  // Aggiungo la classe active [class='active'] all'immagine corrispondente al mio [currentIndex] 
  images[currentIndex].classList.add('active');
  thumbnails[currentIndex].classList.add('active');
  });

  // Rendiamo i thumbnail cliccabili
  for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('click', function(){
    images[currentIndex].classList.remove('active')
    thumbnails[currentIndex].classList.remove('active')

    // Setto il currentIndex all'indice dell'immagine corrispondente
    currentIndex = i;
    console.log('il CurrentIndex corrente è ' + currentIndex);

    images[currentIndex].classList.add('active');
    thumbnails[currentIndex].classList.add('active');

  });
}



/*---------------------------------------
        Versione co DOM API
---------------------------------------*/
/*---------------------------------------
// Per ogni source, creo un tag img

for (let i=0; i < sources.length; i++) {
  const imagesElements = document.createElement('img');
  imagesElements.src = sources[i];
  imagesElements.alt = 'Comics ${i + 1}';
  imagesElements.title = 'Comics ${i + 1}';
  gallery.appendChild(imagesElements);

  // Creare anche il thumbanail
  const thumbanail = imageElement.cloneNode();
  thumbnailsGallery.appendChild(thumbanail);

}
---------------------------------------*/
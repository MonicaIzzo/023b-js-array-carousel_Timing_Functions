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

/*---------------------------------------
        FUNZIONI
---------------------------------------*/
// # FUNZIONE PER IMPOSTRE IL [currentIndex]
function setCurrentIndex (index){
    // Rimuovo la classe [active] dall'immagine corrispondente al currentIndex  
    images[currentIndex].classList.remove('active')
    thumbnails[currentIndex].classList.remove('active')

      currentIndex = index;
      console.log('il CurrentIndex corrente è ' + currentIndex);

    // Aggiungo la classe [active] dall'immagine corrispondente al currentIndex      
    images[currentIndex].classList.add('active');
    thumbnails[currentIndex].classList.add('active');
}

// # FUNZIONE FAR ANDARE AVANTI IL CARROSEL DA SOLO OGNI 3 SECONDO
const autoplay = setInterval (setNextIndex, 3000);

function setNextIndex() {
  const nextIndex = currentIndex + 1;
  const index = nextIndex === sources.length ? 0 : nextIndex;
  setCurrentIndex(index);
}

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
  imagesElements += `<img src="${sources[i]}" alt="Comics ${sources[i]}" data-index="${i}">`
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
nextBtn.addEventListener('click', function(){
  clearInterval(autoplay);
  setNextIndex();
});


//  # btn INDIETRO -------------------------
prevBtn.addEventListener('click', function(){
  clearInterval(autoplay);

  const prevIndex = currentIndex - 1;
  const index = prevIndex < 0 ? sources.length - 1 : prevIndex; 
  setCurrentIndex(index);
  });

  // # RENDIAMO I THUMBNAIL CLICCABILI
  // # Per ogniugno dei thumbnails....
  for (let i = 0; i < thumbnails.length; i++) {

    const currentThumbnail = thumbnails[i];

  // ... e metto in ascolto un event listener 
    currentThumbnail.addEventListener('click', function(){
      clearInterval(autoplay);
      const index = parseInt(currentThumbnail.dataset.index);
      setCurrentIndex(index);
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
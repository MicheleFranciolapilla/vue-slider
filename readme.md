# REALIZZAZIONE DI UNO SLIDER (CAROSELLO) CON VUE #
---

### Consegne: ###
*   *Utilizzare un array di oggetti (immagine + testo) come elementi dello slider (testo in sovrapposizione all'immagine attiva)*
*   *Attivazione e visualizzazione dell'immagine (nello slider) a seguito di click sulla corrispondente miniatura (thumbnail)*
*   *Presenza della funzionalità "autoplay"*
*   *Disattivazione dell'autoplay durante il passaggio del cursore (mouse) sull'immagine nello slider e conseguente riattivazione a seguito di allontanamento (del mouse) dall'immagine*
---
---

### Funzionalità extra realizzate: ###
**In aggiunta alle funzionalità richieste ne sono state implementate di ulteriori...**
*   *Possibilità di "scrollare" lo slider mediante pressione dei tasti freccia (sinistra/destra) sulla tastiera.*
*   *Possibilità di selezionare l'immagine da attivare (tra le miniature) mediante pressione dei tasti numerici corrispondenti alle singole miniature, oltrechè mediante click sulle stesse.*
*   *Presenza di overlay sulle singole miniature, in cui spicca il numero corrispondente alla miniatura stessa (indice numerico per attivazione diretta)*
*   *Effetti di transizione all'`hover` su miniature e aree di scorrimento laterale dell'immagine attiva*
---

### Struttura del progetto e strumenti utilizzati: ###
**Il progetto si compone dei seguenti files:**
*   ***index.html*** *in cui sono presenti gli elementi HTML, gestiti da direttive **Vue** quali `v-bind`, `@`event, `v-for`, `v-if`*
*   ***reset_and_utilities.css*** *dentro il quale sono presenti una serie di classi **CSS** che vanno dall'ambito dei posizionamenti (relative, absolute,...) a quello relativo a tutta la gestione dei flexbox*
*   ***style.css*** *foglio di stile specificamente dedicato all'esercizio, in cui sono sviluppate, in particolare, le classi di stile relative ad immagini, miniature, elementi attivi, elementi in hover e la definizione di alcune variabili.*
*   ***main.js*** *dentro cui, all'interno dell'oggetto "Vue", sono esplicitati tutti i dati (variabili, oggetti, array) ed i metodi contenenti la logica di funzionamento del progetto.*

**Oltre al framework "Vue", nel progetto si utilizzano anche alcune icone di "Font Awesome 6.3**

---

### Metodi Javascript/Vue: ###
**Metodi invocati in `created()`:**
*   **`init_css_var()`:** *Metodo che assegna il valore corrispondente alla dimensione dell'array di oggetti ad una specifica variabile presente nel foglio di stile; variabile che verrà poi utilizzata ai fini del dimensionamento delle miniature del thumbnail box*
*   **`random_start()`:** *Metodo utilizzato per assegnare ad una immagine a caso (randomicamente) la classe "active" in fase di avviamento*
*   **`autoplay_go()`:** *Metodo che inizializza (e riavvia, al'occorrenza) la funzionalità autoplay.*
*   **`check_keyboard()`:** *Metodo utilizzato per monitorare gli eventi da tastiera e, nel caso di tasti specifici, attivare le relative funzioni.*

**Metodi non invocati in `created()`:**
*   **`autoplay_stop()`:** *Metodo simmetrico ad `autoplay_go()`, richiamato al passaggio del mouse sullo slider (immagine attiva) per disattivare l'autoplay.*
*   **`get_img_path(img_index)`:** *Metodo che restituisce il percorso completo all'immagine indicizzata dal parametro "img_index".*
*   **`movie_back()`:** *Metodo invocato ad ogni pressione del tasto freccia sinistra o click su apposita area (scorrimento su immagine precedente).*
*   **`movie_forward()`:** *Metodo invocato ad ogni pressione del tasto freccia destra o click su apposita area (scorrimento su immagine successiva) nonchè utilizzato dalla funzionalità di autoplay.*
*   **`movie_jump(movie_index)`:** *Metodo che consente il passaggio diretto (attivazione nello slider) all'immagine selezionata mediante click (su miniatura) o pressione del tasto numerico associato.*

---
---
---


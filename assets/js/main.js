// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
// Consigli del giorno:
// - regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
// - il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
// Buon lavoro e buon divertimento!
// ********************************
// Script Vue 3
const {createApp} = Vue 

createApp({
    data(){
        return{
            page_title:     "STAR WARS SAGA",
            current_movie:  0,
            img_folder:     "./assets/img/",
            all_movies:     [
                {
                    img_name:       "StarWars_1.webp",
                    movie_title:    "La minaccia fantasma",
                    movie_duration: 133,
                    release_year:   1999
                },
                {
                    img_name:       "StarWars_2.webp",
                    movie_title:    "L'attacco dei cloni",
                    movie_duration: 142,
                    release_year:   2002
                },
                {
                    img_name:       "StarWars_3.webp",
                    movie_title:    "La vendetta dei Sith",
                    movie_duration: 140,
                    release_year:   2005
                },
                {
                    img_name:       "StarWars_4.webp",
                    movie_title:    "Guerre Stellari",
                    movie_duration: 121,
                    release_year:   1977
                },
                {
                    img_name:       "StarWars_5.webp",
                    movie_title:    "L'impero colpisce ancora",
                    movie_duration: 124,
                    release_year:   1980
                },
                {
                    img_name:       "StarWars_6.webp",
                    movie_title:    "Il ritorno dello Jedi",
                    movie_duration: 133,
                    release_year:   1983
                },
                {
                    img_name:       "StarWars_7.webp",
                    movie_title:    "Il risveglio della Forza",
                    movie_duration: 136,
                    release_year:   2015
                },
                {
                    img_name:       "StarWars_8.webp",
                    movie_title:    "Gli ultimi Jedi",
                    movie_duration: 152,
                    release_year:   2017
                },
                {
                    img_name:       "StarWars_9.webp",
                    movie_title:    "L'ascesa di Skywalker",
                    movie_duration: 142,
                    release_year:   2019
                }
            ]
        }
    },
    created(){
        // this.init_css_var()
    },
    methods: 
    {
        // init_css_var()
        // {

        // }

        get_img_path(img_index)
        {
            console.log(img_index,this.img_folder + this.all_movies[img_index].img_name)
            return this.img_folder + this.all_movies[img_index].img_name;
        }
    }
}).mount('#app')
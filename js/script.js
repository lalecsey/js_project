"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посматрели?', '');
    
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посматрели?', '');
        }
    },
    
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренних фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },

    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function() {
        for (let i=0; i<3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`).toLowerCase();
            if (genre == '' || genre == null) {
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                personalMovieDB.genres[i] = genre;
            }
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
        }
    },

    toggleVisibleMyDB: function() {
        return this.privat = !this.privat;
    },
};

// for (let i = 0; i < 2; i++) {
//     let a, b;
//     do {
//         a = prompt('Один из последних просмотренних фильмов?', '');
//     } while (!a && !(a.length <= 50));
//     do {
//         b = prompt('На сколько оцените его?', '');
//     } while (!b);
//     personalMovieDB.movies[a] = b;
// }

// start();
// rememberMyFilms();
// detectPersonalLevel();
// showMyDB();
// writeYourGenres();

console.log(personalMovieDB);
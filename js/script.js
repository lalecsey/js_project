"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посматрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false,
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

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}
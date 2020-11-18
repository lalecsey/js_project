let numberOfFilms = +prompt('Сколько фильмов вы уже посматрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false,
};

let a = prompt('Один из последних просмотренних фильмов?', '');
let b = prompt('На сколько оцените его?', '');
let c = prompt('Один из последних просмотренних фильмов?', '');
let d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
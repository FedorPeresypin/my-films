/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let personalMovieDB = {
        count: start(),
        movies: {
        },
        actors: {

        },
        genres: [],
        privat: false
    }, 
    film,
    filmScore;

    function start() {
        let numberOfFilms = Number(prompt("Сколько фильмов вы уже посмотрели?",''));

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = Number(prompt("Сколько фильмов вы уже посмотрели?",''));
        }
        return numberOfFilms;
    }

    function rememberMyfilms() {
        for (let index = 0; index < 2; index++){
            film = prompt('Один из последних просмотренных фильмов?');
            if ((film == null) || (film.length > 20) || (film == "")){
                alert('Введите название фильма!');
                index--;
                continue;
            }
            while (true) {
                filmScore = Number(prompt('На сколько оцените его?'));
                console.log(filmScore);
                if ((filmScore == 0) || (Number.isNaN(filmScore)) || (filmScore > 5) || (filmScore < 0)){
                    alert('Введите цифру от 1 до 5!');
                    continue;
                }
                break;
            }
            personalMovieDB.movies[film] = filmScore;
        }
    }
      
    function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            alert("Просмотренно мало фильмов");
        } else if (personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы классический зритель');
        }else{
            alert("Ошибка!");
        }
    }    
    
    function showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
    
    function writeYouGenres() {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i+1}?`,'');
            if ((genre == null) || (genre.length > 20) || (genre == "")){
                alert('Введите название жанра!');
                i--;
                continue;
            }
            personalMovieDB.genres[i] = genre;
        }
    }

console.log(personalMovieDB);
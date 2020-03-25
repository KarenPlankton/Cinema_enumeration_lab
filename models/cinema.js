const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function () {
  return this.films.map( (film) => {
    return film.title;
  })
};

Cinema.prototype.findFilm = function (filmTitle) {
  let foundFilm = this.films.filter( 
    (film) => (film.title === filmTitle) );
  return foundFilm[0];
};

Cinema.prototype.findByGenre = function (filmGenre) {
  let foundGenre = this.films.filter( 
    (film) => (film.genre === filmGenre) );
  return foundGenre;
};

Cinema.prototype.filmsByYear = function (filmYear) {
  let foundYear = this.films.filter(
    (film) => (film.year === filmYear ) );
  if (foundYear.length > 0) {
    return true
  } else {
    return false
  };
};

Cinema.prototype.filmsOverLength = function (filmLength) {
  return this.films.filter(
    (film) => (film.length > filmLength));
};

Cinema.prototype.totalLengthFilms = function () {
  return this.films.reduce((total, film) => {
    return total += film.length;
  }, 0);
}; 
// Here you go! :) brackets were missing :)
// Hooray!!!!
// It thought it was a variable, lol
// It is confusing, because we sometines use them, sometimes not
// Consistency is key, in Javascript

module.exports = Cinema;
 

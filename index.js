/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  // create empty movie Arr
  let movieListArr = []
  //if  movie Arr is empty returns []
  if(movies.length === 0){
    return movieListArr
  }
 //iterate over movie Arr 
 for(i in movies){
 //add movie titles to movieList Arr
 movieListArr.push(movies[i].title)
}
// return movie list
return movieListArr

}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
//if movie Arr is empty returns 0 
if(movies.length === 0){
  return (0)
}
// create empty Arr to tally up metacores
let strScoreArr = []
let numScoreArr = []
// iterate throughh movies to check each index
for( i in movies){
  //add metascore to scores Arr as numbers
  strScoreArr.push((movies[i].metascore))
  } 
for(i in strScoreArr){
  numScoreArr.push(parseInt(strScoreArr[i]))
}

function orderedNumbers(a,b){
  return a - b
}

numScoreArr.sort(orderedNumbers)

return numScoreArr[numScoreArr.length-1]
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  // if movie Arr is empty return 0
  if(movies.length === 0){
    return (0)
  }
  // creat new Arr to capture Ratings
  let ratingsArr = []
  let sum = 0
  // interate over the movies Arr
  for (i=0; i< movies.length; i++){
    //capture imdbRating to ratingsArr
    ratingsArr.push(Number(movies[i].imdbRating))
  }
  //find average rating
  for(j=0; j<ratingsArr.length; j++){
    sum += ratingsArr[j]
  }
  return (sum/ratingsArr.length)
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
// if movie Arr is empty return {}
if(movies.length === 0){
  return {}
}
newObj = {}
ratingSame = []
ratingDiff = []
//create loop through movies Arr
for(i in movies){
  // if(movies[i].rated == movies[i].rated)
  for(j = 0; j< movies.length; j++){
    if(movies[i].rated === movies[j].rated){
ratingSame.push(movies[j].rated)
    }
    else ratingDiff.push(movies[j].rated)
  }

newObj[movies[i].rated] = ratingSame.length
}
return (newObj)
//

}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies,id) {
// if movie Arr is empty return {}
if((movies.length === 0) || (id != movies.imdbID)){
    result = (null)
for(i in movies){
if (movies[i].imdbID == id){
  result = movies[i]
}
}
}
return result
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  // if movie Arr is empty return []
  movieByGenre = []
  for(i in movies)
if((movies.length === 0) || !((movies[i].genre).includes(genre))){
  result = movieByGenre
}else if ((movies[i].genre).includes(genre)){
  movieByGenre.push(movies[i])
  result = movieByGenre
}
return result
// console.log(movies)
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  releasedInSpecifiedYear = []
  for(i in movies){
    if((movies[i].released.split(" ")) <= year){
      releasedInSpecifiedYear.push(movies[i])
  }
}
return releasedInSpecifiedYear
  // console.log(typeof(movies[0].released.split(" ")))
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie() {}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};

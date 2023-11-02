// Here solution with 15/15 passed

class Movies {
    constructor() {
      this.movies = []
    }
  
    getAllMovies() {
      return this.movies
    }
  
    addMovie(title, director, year, genre) {
      if(title === undefined || director === undefined || year === undefined || genre === undefined) {
        return undefined
      }

      const isDuplicate = this.movies.some((movie) =>
      movie.title.toLowerCase() === title.toLowerCase() &&
      movie.director.toLowerCase() === director.toLowerCase()
      )
      
      if (isDuplicate) {
        return undefined;
      } else {
        const newMovie = { title: title, director: director, year: year, genre: genre }
        this.movies.push(newMovie)
        return newMovie
      }
    }
  
    updateMovie(title, updatedDetails) {
      const findIndexByTitle = this.movies.findIndex(mv => mv.title.toLowerCase() === title.toLowerCase())
      if(findIndexByTitle !== -1) {
        this.movies[findIndexByTitle].director = updatedDetails.director || this.movies[findIndexByTitle].director
        this.movies[findIndexByTitle].year = updatedDetails.year || this.movies[findIndexByTitle].year
        this.movies[findIndexByTitle].genre = updatedDetails.genre || this.movies[findIndexByTitle].genre
        return this.movies[findIndexByTitle]
      } else {
        return undefined
      }
    }
  
    deleteMovieByTitle(title) {
      const indexByTitle = this.movies.findIndex(mv => mv.title.toLowerCase() === title.toLowerCase())
      if(indexByTitle !== -1) {
        this.movies.splice(indexByTitle, 1)
      } else {
        return 'no movie deleted'
      }
  }
  }
  
  
  const a = new Movies()
  a.addMovie('Lalaland', 'x', 2016, 'romance')
  a.addMovie('Lalaland', 'x', 2016, 'romance')
  console.log(a.getAllMovies())
  
  module.exports = Movies
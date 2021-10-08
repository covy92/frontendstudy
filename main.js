import axios from 'axios'

function fetchMovies() {
  axios.get('https://www.omdbapi.com/?apikey=7035c60&s=%27frozen%27')
    .then((response) => {
      console.log(response)
    })
}

fetchMovies()

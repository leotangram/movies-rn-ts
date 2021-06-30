import axios from 'axios'

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'a07cffb089524e88c4a466b71e83eab2',
    language: 'es-ES'
  }
})

export default movieDB

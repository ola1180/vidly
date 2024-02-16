import http from './httpService'
import config from '../config.json'

const apiEndPoint = `${config.apiUrl}/movies`

export function getMovies() {
    return http.get(apiEndPoint);
}

export function deleteMovie(id) {
    return http.delete(`${apiEndPoint}/${id}`)
}

export function getMovie(movieId) {
    return http.get(`${apiEndPoint}/${movieId}`)
}

export function saveMovie(movie) {
    console.log(movie)

    if (movie._id) {
        const body = { ...movie }
        delete body._id
        return http.put(`${apiEndPoint}/${movie._id}`, body)
    }

    return http.post(apiEndPoint, movie)
}


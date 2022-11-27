import axios from "axios";

const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '8df693412f5ab2e8f7549ff88221852b',
        language: 'es-ES'
    }
})


export default apiMovie
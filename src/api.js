
// let apiUrl = 'http://localhost:8000/'
let apiUrl = import.meta.env.VITE_API_URL


if (process.env.NODE_ENV === 'production') {
    apiUrl = import.meta.env.VITE_API_URL
}

export default apiUrl
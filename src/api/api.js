const apiKey = "ActOaOqPGflOkxwSdRPt6r2x9s1ohfCA"

const movieURL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query="

export const fetchData = async (query) => {
    try {
        const res = await fetch(movieURL + query + "&api-key=" + apiKey)
        const data = await res.json()

        return data
    } catch (error) {
        console.log(error)
    }
}
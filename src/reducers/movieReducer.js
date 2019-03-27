export default (state = {}, { type , data }) => {
    switch (type) {
        case "MOVIE_RES_ASYNC":
            return {
                ...state,
                data
            }
        default:
            return state;
    }
}
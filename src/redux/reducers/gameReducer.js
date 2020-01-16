// Reducer that stores games from server

const games = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
            default:
                return state;
    }
}

export default games;
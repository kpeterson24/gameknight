// Reducer that stores events from server

const events = (state = [], action) => {
    switch (action.type) {
        case 'SET_SCHEDULE':
            return action.payload;
            default:
                return state;
    }
}


export default events;
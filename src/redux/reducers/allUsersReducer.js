// Reducer that stores all users from server

const allUsers = (state = [], action) => {
    switch (action.type) {
        case 'SET_USERS':
            return action.payload;
            default:
                return state;
    }
}


export default allUsers;
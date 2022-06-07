const SET_USER = "SET_USER";
const SET_USERS = "SET_USERS";

const initialState = {
    currentUser: {},
    isAuth: false,
    users: [],
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case SET_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return {...state}
    }
}

export default userReducer;
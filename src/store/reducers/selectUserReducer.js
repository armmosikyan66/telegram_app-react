const SELECT_USER = "SELECT_USER";

const initialState = {
    selectedUser: {}
}

function selectUserReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_USER:
            return {
                ...state,
                selectedUser: action.payload,
            }
        default:
            return {...state}
    }
}

export default selectUserReducer;
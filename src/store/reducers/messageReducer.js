const SET_MESSAGES = "SET_MESSAGES";
const ADD_MESSAGES = "ADD_MESSAGES";

const initialState = {
    messages: []
}

function messageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MESSAGES:
            return {
                ...state,
                messages: action.payload,
            }
        case ADD_MESSAGES:
            return {
                ...state,
                messages: [...state.messages, action.payload],
            }
        default:
            return {...state}
    }
}

export default messageReducer;
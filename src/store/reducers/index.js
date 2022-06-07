import {combineReducers} from "redux";

import userReducer from "./userReducer";
import selectUserReducer from "./selectUserReducer";
import messageReducer from "./messageReducer";

const rootReducer = combineReducers({
    user: userReducer,
    selectedUser: selectUserReducer,
    messages: messageReducer
});

export default rootReducer;
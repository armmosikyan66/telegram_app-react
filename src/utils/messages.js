import axios from "axios";
import {setMessages} from "../store/actions/messageAction";

export const getMessages = (dialog) => {
    return async (dispatch) => {
        try {
            await dispatch(setMessages([]));
            const {data} = await axios.get(`http://localhost:5000/message/${dialog._id}-${dialog.myId}`);

            await dispatch(setMessages(data));
        } catch (e) {
            console.log(e);
        }
    }
}
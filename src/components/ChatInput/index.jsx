import React, {useEffect, useState} from 'react';
import {MdOutlineAttachFile} from "react-icons/md";
import {BsEmojiSmile} from "react-icons/bs";
import {IoSend} from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";

import classes from './ChatInput.module.scss';
import {addMessage} from "../../store/actions/messageAction";
import socket from "../../io/socket";

const ChatInput = () => {

    const [message, setMessage] = useState("");
    const receiver = useSelector((state) => state?.selectedUser?.selectedUser);
    const me = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (!message.length) {
            alert("Message is Empty");

            return;
        }

        socket.emit("addMessage", {senderId: me._id, receiverId: receiver._id, message});
        setMessage("");
    }


    useEffect(() => {
        socket.on('newMessage', ({createdMessage}) => {
            dispatch(addMessage(createdMessage));
        });
    }, []);

    return (
        <div className={classes.chatInput}>
            <div className={classes.textarea}>
                <MdOutlineAttachFile/>
                <div
                    className={classes.parent}
                >
                        <textarea
                            value={message}
                            placeholder="Введите текст сообщения…"
                            rows={1}
                            onChange={(event => setMessage(event.target.value))}
                        />
                </div>
                <BsEmojiSmile/>
                <IoSend style={{cursor: "pointer"}} onClick={handleSubmit}/>
            </div>
        </div>
    );
};

export default ChatInput;

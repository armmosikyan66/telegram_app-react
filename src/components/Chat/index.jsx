import React from 'react';

import classes from './Chat.module.scss';
import {Message, Empty, ChatInput} from "../index";
import {useSelector} from "react-redux";

const Chat = () => {

    const selectedUser = useSelector((state) => state.selectedUser.selectedUser);
    const messages = useSelector(state => state?.messages?.messages);

    return (
        <div className={classes.chat}>
            <div className={classes.content}>
                {Object.keys(selectedUser).length === 0 ? (
                    <Empty text={"Dialog not selected"}/>
                ) : (
                    messages && Array.isArray(messages) && messages.length ? messages.map((message, index) => (
                        <React.Fragment key={message._id || index}>
                            <Message {...message} />
                        </React.Fragment>
                    )) : (
                        <Empty text={"Ничего не найдено"}/>
                    )
                )}
            </div>
            <ChatInput/>
        </div>
    );
};

export default Chat;

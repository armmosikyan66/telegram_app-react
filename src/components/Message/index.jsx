import React from 'react';
import {formatDistanceToNow} from "date-fns";
import {ru} from "date-fns/locale";

import Avatar from '../../utils/generateAvatar';
import classes from "./Message.module.scss";
import {useSelector} from "react-redux";

const Message = ({_id, createdAt, senderId, message}) => {

    const receiver = useSelector((state) => state?.selectedUser?.selectedUser);
    const me = useSelector((state) => state.user.currentUser);

    return (
        <div  className={`${classes.messageItem} ${me._id === senderId ? classes.mine : classes.your}`}>
            <div className={classes.left}>
                <div
                    style={me._id === senderId ? {backgroundColor: Avatar(senderId)} : {backgroundColor: Avatar(senderId)}}
                    className={classes.avatar}
                >
                    {(senderId === me._id ? me.username : receiver.username)?.substring(0, 1).toUpperCase()}
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.message}>
                    <p>{message}</p>
                </div>
                <div className={classes.time}>
                    {formatDistanceToNow(new Date(createdAt), {
                        addSuffix: true,
                        locale: ru
                    })}
                </div>
            </div>
        </div>
    );
};

export default Message;

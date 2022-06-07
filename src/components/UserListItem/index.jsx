import React from 'react';
import {BiCheckDouble} from "react-icons/bi";
import {useDispatch, useSelector} from "react-redux";

import classes from './UserListItem.module.scss';
import Avatar from '../../utils/generateAvatar';
import {getMessages} from "../../utils/messages";
import {selectUser} from "../../store/actions/selectUserAction";

const UserListItem = ({email, username, _id}) => {

    const dispatch = useDispatch();
    const myId = useSelector(state => state?.user?.currentUser?._id);

    const onSelectDialog = async (dialog) => {
        await dispatch(selectUser(dialog));

        await dispatch(getMessages(dialog));
    }

    return (
        <li className={classes.listItem}  onClick={() => onSelectDialog({username, email, _id, myId})}>
            <div className={classes.avatar} style={{backgroundColor: Avatar(_id)}}>
                {username.substring(0, 1).toUpperCase()}
            </div>
            <div className={classes.listContent}>
                <div className={classes.name}>{username}</div>
                <div className={classes.lastMessage}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cumque cupiditate dolores earum eligendi, error laudantium minima optio pariatur quasi quisquam recusandae reprehenderit velit veritatis voluptate! Impedit iste nam vel!</div>
            </div>
            <div className={classes.listEnd}>
                <div className={classes.time}>Сейчас</div>
                <div><BiCheckDouble size={20} color={"#4CA5FF"}/></div>
            </div>
        </li>
    );
};

export default UserListItem;

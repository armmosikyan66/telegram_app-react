import React, {useEffect, useState} from 'react';
import {FiUsers} from "react-icons/fi";
import {IoMdSettings} from "react-icons/io";

import classes from './Header.module.scss'
import {useSelector} from "react-redux";
import socket from "../../io/socket";

const Header = () => {

    const selectedUser = useSelector((state) => state.selectedUser.selectedUser);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        socket.emit("status", selectedUser._id);

        socket.on('status', ({status}) => {
            if (status === "online") {
                setStatus(true)
            } else {
                setStatus(false);
            }
        });
    }, [selectedUser, status]);


    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <ul className={classes.left}>
                    <li>
                        <FiUsers color={"#202020"}/>
                        <p>Список диалогов</p>
                    </li>
                    <li>
                        <IoMdSettings color={"#202020"}/>
                    </li>
                </ul>
                <div className={classes.right}>
                    {Object.keys(selectedUser).length !== 0 ? (
                        <>
                            <div className={classes.username}>{selectedUser.username}</div>
                            <div className={`${classes.status} ${status ? classes.online : classes.offline}`}>
                                <span>{status ? "Online" : "Offline"}</span>
                            </div>
                        </>
                    ) : <>Dialog not selected</>}
                </div>
            </div>
        </header>
    );
};

export default Header;

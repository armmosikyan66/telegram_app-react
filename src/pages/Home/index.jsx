import React, {useEffect} from 'react';

import classes from './Home.module.scss';
import {Chat, Header, Sidebar} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../utils/user";
import socket from "../../io/socket";

const Home = () => {

    const dispatch = useDispatch();
    const me = useSelector(state => state?.user?.currentUser);

    useEffect(() => {
        dispatch(getUsers());
        socket.emit('setSocketId', me._id);
    }, []);

    return (
        <div className="container">
            <div className={classes.home}>
                <Header/>
                <div className={classes.inner}>
                    <>
                        <Sidebar/>
                        <Chat/>
                    </>
                </div>
            </div>
        </div>
    );
};

export default Home;

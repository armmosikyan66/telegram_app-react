import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";
import {useSelector} from "react-redux";

import classes from "./Sidebar.module.scss";
import {UserListItem} from "../index";
import {Link} from "react-router-dom";

const Sidebar = () => {

    const [filteredUsers, setFilteredUsers] = useState([]);
    const [text, setText] = useState("");
    const users = useSelector(state => state?.user?.users);
    const myId = useSelector(state => state?.user?.currentUser?._id);

    function filterUser(e) {
        setText(e);

        if (text.length) {
            let arr = users.filter((user) => user.username.indexOf(text) !== -1);

            setFilteredUsers(arr);
        }
    }
    

    return (
        <div className={classes.sidebar}>
            <div className={classes.inner}>
                <div className={classes.searchBar}>
                    <div className={classes.search}>
                        <FaSearch color={"#CBCBCB"}/>
                        <input
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Поиск среди контактов"
                            type="text"
                        />
                    </div>
                </div>

                <ul className={classes.list}>
                    {users && Array.isArray(users) &&  (text.length ? filteredUsers : users).filter((user) => user._id !== myId).map((user) => (
                        <React.Fragment key={user._id}>
                            <Link to={`/im/dialog/${user._id}-${myId}`}>
                                <UserListItem
                                    {...user}
                                />
                            </Link>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;

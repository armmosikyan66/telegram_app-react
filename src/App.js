import React, {useEffect} from 'react';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Home, Login, Register} from "./pages";
import {auth} from "./utils/user";

function App() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.user.isAuth);
    const me = useSelector(state => state.user.currentUser)

    useEffect(() => {
        (async () => {
            try {
                await dispatch(auth());
            } catch (e) {
                console.log(e.message);
            }
        })();
    }, []);

    useEffect(() => {
        if (isAuth) {
            navigate("/");
        }
    }, [isAuth]);

    return (
        <>
            {!isAuth ? (
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/registration" element={<Register/>}/>
                    <Route path="*" element={<Navigate to="/registration"/>}/>
                </Routes>
            ) : (
                <Routes>
                    <Route path="/im" element={<Home/>}/>
                    <Route path="/im/dialog/:id" element={<Home/>}/>
                    <Route path="*" element={<Navigate to="/im"/>}/>
                </Routes>
            )}
        </>
    );
}

export default App;

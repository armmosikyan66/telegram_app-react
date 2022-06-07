import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import classes from './Login.module.scss';
import {CenterBlock} from "../../../components";
import {login} from "../../../utils/user";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector((state) => state.user.isAuth);
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = async () => {
        try {
            if (user.password.length && user.email.length) {
                await dispatch(login(user));
            }
        } catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        (async () => {
            if (isAuth) {
                navigate('/');
            }
        })();
    }, [isAuth]);

    return (
        <div className={classes.login}>
            <div className="container">
                <div className={classes.inner}>
                    <>
                        <div className={classes.title}>
                            Войти в аккаунт
                        </div>
                        <div className={classes.subtitle}>
                            Пожалуйста, войдите в свой аккаунт
                        </div>
                        <CenterBlock>
                            <div className={classes.form}>
                                <form>
                                    <div className={classes.item}>
                                        <input
                                            type="email"
                                            placeholder="Введите ваш E-Mail"
                                            id="email"
                                            autoComplete="off"
                                            name="email"
                                            onChange={(e) => handleChange(e)}
                                        />
                                        <label htmlFor="email">Ваш E-Mail</label>
                                    </div>
                                    <div className={classes.item}>
                                        <input
                                            type="password"
                                            placeholder="Введите ваш Пароль"
                                            id="password"
                                            autoComplete="off"
                                            name="password"
                                            onChange={(e) => handleChange(e)}
                                        />
                                        <label htmlFor="password">Ваш Пароль</label>
                                    </div>
                                    <div onClick={handleSubmit} className={classes.button}>
                                        <button type="button">ВОЙТИ В АККАУНТ</button>
                                    </div>
                                </form>
                                <div className={classes.link}>
                                    <Link to="/registration">Зарегистрироваться</Link>
                                </div>
                            </div>
                        </CenterBlock>
                    </>
                </div>
            </div>
        </div>
    );
};

export default Login;

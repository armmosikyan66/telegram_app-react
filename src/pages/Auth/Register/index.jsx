import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import classes from './Register.module.scss';
import {CenterBlock} from "../../../components";
import {registration} from "../../../utils/user";

const Register = () => {

    const dispatch = useDispatch();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        repaetPassword: ""
    });

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = async () => {
        try {
            if (user.password.length && user.repaetPassword.length && user.email.length && user.username.length && user.password === user.repaetPassword) {
                await dispatch(registration(user));
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={classes.register}>
            <div className="container">
                <div className={classes.inner}>
                    <>
                        <div className={classes.title}>
                            Регистрация
                        </div>
                        <div className={classes.subtitle}>
                            Для входа в чат, вам нужно зарегистрироваться
                        </div>
                        <CenterBlock>
                            <div className={classes.form}>
                                <form>
                                    <div className={classes.item}>
                                        <input
                                            type="text"
                                            placeholder="Введите ваше имя"
                                            id="username"
                                            autoComplete="off"
                                            name="username"
                                            onChange={(e) => handleChange(e)}
                                        />
                                        <label htmlFor="username">Ваше имя</label>
                                    </div>
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
                                    <div className={classes.item}>
                                        <input
                                            type="password"
                                            placeholder="Повторитье ваш Пароль"
                                            id="repaetPassword"
                                            autoComplete="off"
                                            name="repaetPassword"
                                            onChange={(e) => handleChange(e)}
                                        />
                                        <label htmlFor="repaetPassword">Повторить пароль</label>
                                    </div>
                                    <div className={classes.button}>
                                        <button onClick={handleSubmit} type="button">ЗАРЕГИСТРИРОВАТЬСЯ</button>
                                    </div>
                                </form>
                                <div className={classes.link}>
                                    <Link to="/login">Войти в аккаунт</Link>
                                </div>
                            </div>
                        </CenterBlock>
                    </>
                </div>
            </div>
        </div>
    );
};

export default Register;

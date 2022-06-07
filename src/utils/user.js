import axios from "axios";
import {setUser, setUsers} from '../store/actions/userAction.js';

export const registration = async (user) => {
    try {
        await axios.post("http://localhost:5000/registration", user);
    } catch (e) {
        alert(e.response.data.message);
    }
}

export const login = (user) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post(`http://localhost:5000/login`, user);

            dispatch(setUser(data.user))
            await dispatch(setUser(data.user));
            await localStorage.setItem('token', data.token);
        } catch (e) {
            alert(e.response.data.message);
        }
    }
}

export const auth = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:5000/isAuth`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});

            await dispatch(setUser(data.user));
            await localStorage.setItem('token', data.token);
        } catch (e) {
            console.log(e.response.data.message);
        }
    }
}



export const getUsers = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:5000/getUsers`);

            await dispatch(setUsers(data));
        } catch (e) {
            console.log(e);
        }
    }
}
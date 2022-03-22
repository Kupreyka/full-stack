import React, {useContext, useState} from 'react'
import axios from "axios";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";

export const AuthPage = () => {
    const message = useMessage()
    const [form, setForm] = useState({
        email: '', password: ''
    })
    const auth = useContext(AuthContext)
    const [dis, setDis] = useState(false)

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const loginHandler = async () => {
        try {
            setDis(true)
            let data = await axios.post('/api/auth/login', {...form})
            setDis(false)
            auth.login(data.data.token, data.data.userId)
        } catch (e) {
            message(e.response.data.message)
            setDis(false)
        }
    }

    const registerHandler = async () => {
        try {
            setDis(true)
            let data = await axios.post('/api/auth/register', {...form})
            setDis(false)
            message(data.data.message)
        } catch (e) {
            message(e.response.data.message)
            setDis(false)
        }

    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Pet finder service</h1>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Authorization</span>
                        <div>

                            <div className="input-field">
                                <input
                                    id="email"
                                    type="text"
                                    className="validate"
                                    name="email"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">email</label>
                            </div>
                            <div className="input-field">
                                <input
                                    id="password"
                                    type="password"
                                    className="validate"
                                    name="password"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">password</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-4" onClick={loginHandler} style={{marginRight: 10}}
                                disabled={dis}>Войти
                        </button>
                        <button className="btn gary darken-1" onClick={registerHandler} disabled={dis}>Регистрация
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import {Link} from 'react-router-dom';

import './register.css';

const Register = () => {
    return (
        <div className=" intro__register">
            <div className="login__form-wrap">
                <label className="login__form-text" htmlFor="register__email">Фамилия</label>
                <input className="login__form-input" type="email" required placeholder="Иванов" id="register__email" />
            </div>
            <div className="login__form-wrap">
                <label className="login__form-text" htmlFor="register__password">Имя</label>
                <input className="login__form-input" type="password" required placeholder="Иван" id="register__password" />
            </div>
            <div className="login__form-wrap">
                <label className="login__form-text" htmlFor="register__password-repeated">Отчество</label>
                <input className="login__form-input" type="password" required placeholder="Иванович" id="register__password-repeated" />
            </div>
            <div className="gender__wrap">
                <label className="gender__wrap-content">
                    <input type="radio" className="login__radio" name="gender" id="gender__mail"></input>
                    <span className="gender__btn"></span>
                    Женский
                </label>
                <label className="gender__wrap-content">
                    <input type="radio" className="login__radio" name="gender" id="gender__femail"></input>
                    <span className="gender__btn"></span>
                    Мужской
                </label>
            </div>
            
            <Link to="/priem" className="register__link">Продолжить</Link>
        </div>
    )
}

export default Register;
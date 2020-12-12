import React from 'react';
import {Link} from 'react-router-dom';

import './register.css';
import './priem.css'

const Priem = () => {
    return (
        <div className=" intro__register">
            <div className="login__form-wrap">
                <label className="login__form-text" htmlFor="register__email">Почта</label>
                <input className="login__form-input" type="email" required placeholder="example@mail.com" id="register__email" />
            </div>
            <div className="login__form-wrap">
                <label className="login__form-text" htmlFor="register__password">Пароль</label>
                <input className="login__form-input" type="password" required placeholder="********" id="register__password" />
            </div>
            <div className="login__form-wrap">
                <label className="login__form-text" htmlFor="register__password-repeated">Повторите пароль</label>
                <input className="login__form-input" type="password" required placeholder="********" id="register__password-repeated" />
            </div>
            <Link to="/priem" className="register__link">Зарегистрироваться</Link>
        </div>
    )
}

export default Priem;
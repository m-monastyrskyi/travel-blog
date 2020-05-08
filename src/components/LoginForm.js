import React, {useState} from 'react';
import {checkLogin} from "../api/api";

const LoginForm = ({closeModal, setUserLogIn}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (typeof setUserLogIn === "function") {
            if (checkLogin(login, password)) {
                setUserLogIn(true);
                closeModal();
            }
        }
         setLogin('');
         setPassword('');
         setLoginError(true);
    }

    const closeIt = (e) => {
        if (typeof closeModal === 'function' && e.target.className === "login-container") {
            closeModal();
        }
    }

    return (
        <div className="login-container" onClick={closeIt}>
            <div className="login-modal">
                <span className="close" onClick={closeModal}/>
                <h1 className="login-modal__title">LOGIN</h1>
                <p className="login-modal__hint">Default: admin/admin</p>
                {
                    loginError && <p className="login-modal__hint" style={{color: "red"}} >Incorrect email or password</p>
                }
                <form onSubmit={e => handleSubmit(e)}>
                    <input
                        className="subscribe__email"
                        type="text"
                        placeholder="Login"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                        onFocus={()=> loginError && setLoginError(false) }
                    />
                    <input
                        className="subscribe__email"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        onFocus={()=> loginError && setLoginError(false) }
                    />
                    <input type="submit" className="btn__submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
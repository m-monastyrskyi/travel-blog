import React, {useState, useEffect} from 'react';

const LoginForm = ({closeModal}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setLogin('');
        setPassword('');
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
                <form onSubmit={e => handleSubmit(e)}>
                    <input
                        className="subscribe__email"
                        type="text"
                        placeholder="Login"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <input
                        className="subscribe__email"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input type="submit" className="btn__submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
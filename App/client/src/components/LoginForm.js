import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../auth';
import styled from 'styled-components';

const LoginFormWrapper = styled.div`
    width: 100vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #064b88;

    h1 {
        margin: auto auto 10px auto;
        border-bottom: 5px solid #fecc3d;
        color: #fc6701;
    }

    h2 {
        margin: 15px auto 10px auto;
        font-size: 15px;
        color: #fc6701;
    }

    .form{
        margin: 20px auto 20px auto;
        width: 35%;
        margin-bottom: 0;
        display: flex;
        flex-direction: column;
    }

    .buttons {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    }

    .formButton {
        width: 50%;
        padding: 5px;
        margin: 5px auto 20px auto;
        border: 1px solid rgba(0,0,0,0.5);
        border-radius: 10px;
        background-color: #fc6701;
        color: #064b88;
        font-weight: bold;
    }

    .input {
        width: 50%;
        margin: 0 auto 10px auto;
        height: 30px;
    }

    .error {
        width: 50%;
        margin: 0 auto 10px auto;
        color: #fc6701;
        text-align: center;
    }
`;

function LoginForm(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    const [errors, setErrors] = useState([]);
    const { fetchWithCSRF, setCurrentUserId } = useContext(AuthContext);

    async function loginUser(username, password) {
        const response = await fetchWithCSRF(`/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify({
                username,
                password
            })
        });

        const responseData = await response.json();
        if (!response.ok) {
            setErrors(responseData.errors);
        } else {
            setCurrentUserId(responseData.current_user_id)
            history.push('/digimon')
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        e.stopPropagation();
        loginUser(username, password);
    }

    const handleDemoLogin = (e) => {
        e.preventDefault();
        e.stopPropagation();
        loginUser("Ian", "password");
    }

    return (
        <LoginFormWrapper>
            <h1>Login</h1>
            <h2>Welcome back! Log in to Digicyclopedia to access your account.</h2>
            <form onSubmit={submitForm} className="form">
                {errors.length ? errors.map((err) => <div className="error" key={err} >{err}</div>) : ''}
                <input
                    className="input"
                    type="text"
                    value={username}
                    onChange={
                        (e) => setUsername(e.target.value)
                    }
                    name="username"
                    placeholder="Username"
                />
                <input
                    className="input"
                    type="password"
                    value={password}
                    onChange={
                        (e) => setPassword(e.target.value)
                    }
                    name="password"
                    placeholder="Password"
                />
                <div className="buttons">
                    <button className="formButton">Login</button>
                    <button onClick={() => history.push('/signup')} className="formButton">Signup</button>
                    <button
                        className="formButton"
                        onClick={handleDemoLogin}
                    >Demo Login</button>
                </div>
            </form>
        </LoginFormWrapper>
    );
}
export default LoginForm;

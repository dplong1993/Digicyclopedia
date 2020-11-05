import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../auth';
import styled from 'styled-components';

const SignupFormWrapper = styled.div`
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
`;

function SignupForm(){
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const [errors, setErrors] = useState([]);
  const { fetchWithCSRF, setCurrentUserId } = useContext(AuthContext);

  async function signupUser() {
    const response = await fetchWithCSRF('/api/users/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify({
        username,
        email,
        password,
      })
    });

    const responseData = await response.json();
    if (!response.ok) {
      setErrors(responseData.errors);
      console.log(errors);
    } else {
      setCurrentUserId(responseData.current_user_id)
      history.push('/')
    }
  }

  const submitForm = (e) => {
    e.preventDefault();
    signupUser();
  }

  return (
    <SignupFormWrapper>
      <h1>Signup</h1>
      <h2>Welcome to Digicyclopedia! Create an account to access the site and explore the world of digimon.</h2>
      <form onSubmit={submitForm} className="form">
        <input
          className="input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          placeholder="Username"
        />
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="Email"
        />
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="Password"
        />
        <div className="buttons">
          <button className="formButton">Signup</button>
          <button
            className="formButton"
            onClick={() => history.push('/login')}
          >Login</button>
        </div>
      </form>
    </SignupFormWrapper>
  )
}

export default SignupForm;

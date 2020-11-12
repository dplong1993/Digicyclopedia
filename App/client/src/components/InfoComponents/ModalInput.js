import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import AuthContext from '../../auth';

const ModalInputWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

  .main{
    position: fixed;
    background: white;
    width: 25%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
  }

  .error {
    width: 93%;
    margin: 10px auto 5px auto;
    font-weight: bold;
    font-size: 17px;
    color: red;
  }

  label {
    width: 93%;
    margin: 10px auto 5px auto;
    font-weight: bold;
    font-size: 17px;
  }

  input {
    width: 90%;
    margin: 0 auto 10px auto;
  }

  .buttons {
    width: 90%;
    margin: 10px auto 5px auto;
    height: 40px;
    display: flex;
    justify-content: space-between;
  }

  button {
    width: 45%;
    height: 40px;
    border: 1px solid black;
    border-radius: 20px;
    background: #064b88;
    color: #fecc3d;
  }
`;

const ModalInput = (props) => {
  const {type, text, close} = props
  const [input, setInput] = useState(null);
  const [errors, setErrors] = useState([]);
  const { fetchWithCSRF, currentUserId } = useContext(AuthContext);

  const handleExit = e => {
    e.preventDefault();
    close();
  }

  const handleSubmit = e => {
    e.preventDefault();
    async function updateUser(){
      const response = await fetchWithCSRF(`/api/users/${currentUserId}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({
            type,
            input
        })
      });

      const responseData = await response.json();
      if (response.ok) close();
      else setErrors(responseData.errors);
    }
    updateUser()
  }

  return (
    <ModalInputWrapper>
      <div className="main">
        {errors.length ? errors.map((err) => <div className="error" key={err} >{err}</div>) : ''}
        <label htmlFor="input">Enter new {text}</label>
        <input id="input" type={type} onChange={e => setInput(e.target.value)} placeholder="Email" />
        <div className="buttons">
          <button onClick={handleExit}>Exit</button>
          <button onClick={handleSubmit}>Done</button>
        </div>
      </div>
    </ModalInputWrapper>
  )
}

export default ModalInput;

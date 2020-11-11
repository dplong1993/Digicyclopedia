import React, {useState} from 'react';

const ModalInput = (props) => {
  const [input, setInput] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div>
      <input type={props.type} onChange={e => setInput(e.target.value)}>Enter new {props.type}</input>
      <button onClick={handleSubmit}>Done</button>
    </div>
  )
}

export default ModalInput;

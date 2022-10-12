import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const navigate = useNavigate();

  let [name, setName] = useState("");

  const logTown = (e) => {
    e.preventDefault();
    console.log(name);
    navigate('/confirmation');
  }

  return (
    <form>
      <ul>
        <li>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="user_name"  onChange={(e) => setName(e.target.value)} />
        </li>
        <li>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="mail" name="user_email" />
        </li>
        <li>
          <label htmlFor="msg">Message:</label>
          <textarea id="msg" name="user_message"></textarea>
        </li>
        <li>
          <button type="submit" onClick={logTown}>Submit</button>
        </li>
      </ul>
    </form>
  )
}
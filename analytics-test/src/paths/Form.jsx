import React from "react";

export default function Form() {
  return (
    <form>
      <ul>
        <li>
          <label for="name">Name:</label>
          <input type="text" id="name" name="user_name" />
        </li>
        <li>
          <label for="mail">E-mail:</label>
          <input type="email" id="mail" name="user_email" />
        </li>
        <li>
          <label for="msg">Message:</label>
          <textarea id="msg" name="user_message"></textarea>
        </li>
      </ul>
    </form>
  )
}
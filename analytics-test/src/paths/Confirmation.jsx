import { React, useState } from "react";
import Promo from "./Promo";
import { useNavigate } from "react-router";

export default function Confirmation() {
  const navigate = useNavigate();

  function home() {
    navigate('/');
  }

  function about() {
    navigate('/about');
  }

  return (
    <div>
      <h1>CONFIRMED</h1>
      <Promo />
      <h2 onClick={home}>Home</h2>
      <h3 onClick={about}>About</h3>
    </div>
  )
}
import React from 'react';
import { NavLink } from 'react-router-dom';
import Promo from './Promo';

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <NavLink className="link" to="/">Home</NavLink>
      <Promo />
    </div>
  )
}
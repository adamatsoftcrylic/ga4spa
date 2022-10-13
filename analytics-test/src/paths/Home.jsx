import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

export default function Home() {
  return (
    <div>
      <div className='flexbox'>
        <h1>Home</h1>
        <Link className="link" to="/about">About</Link>
        <Form />
      </div>
    </div>
  )
}
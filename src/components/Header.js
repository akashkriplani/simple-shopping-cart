import React from 'react';

export default function Header({ countCartItems }) {
  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>Simple Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">Cart {countCartItems ? <button className="badge">{countCartItems}</button> : ''}</a>{' '}
        <a href="#/signin">Sign In</a>
      </div>
    </header>
  );
}

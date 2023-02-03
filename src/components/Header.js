import React from 'react';

export default function Header() {
  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>Simple Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">Cart</a>&nbsp;
        <a href="#/signin">Sign In</a>
      </div>
    </header>
  );
}

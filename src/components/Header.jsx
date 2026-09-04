function Header({ cartCount }) {
  return (
    <header className="header">
      <h1>Butiken</h1>
      <div className="cart-badge">🛒 Varukorg: {cartCount}</div>
    </header>
  );
}

export default Header;

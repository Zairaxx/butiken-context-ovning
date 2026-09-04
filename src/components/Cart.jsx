function Cart({ cartItems, onRemove }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <aside className="cart">
      <h2>Din varukorg</h2>
      {cartItems.length === 0 && <p>Varukorgen är tom.</p>}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <span>
              {item.name} – {item.price} kr
            </span>
            <button onClick={() => onRemove(index)}>Ta bort</button>
          </li>
        ))}
      </ul>
      {cartItems.length > 0 && <p className="total">Totalt: {total} kr</p>}
    </aside>
  );
}

export default Cart;

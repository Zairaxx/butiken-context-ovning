import Header from "./Header";
import Shop from "./Shop";
import Cart from "./Cart";


function Page({ products, cartItems, onAddToCart, onRemove }) {
  return (
    <div className="page">
      <Header cartCount={cartItems.length} />
      <main>
        <Shop products={products} onAddToCart={onAddToCart} />
        <Cart cartItems={cartItems} onRemove={onRemove} />
      </main>
    </div>
  );
}

export default Page;

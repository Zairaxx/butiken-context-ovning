import ProductList from "./ProductList";

function Shop({ products, onAddToCart }) {
  return (
    <section className="shop">
      <h2>Produkter</h2>
      <ProductList products={products} onAddToCart={onAddToCart} />
    </section>
  );
}

export default Shop;

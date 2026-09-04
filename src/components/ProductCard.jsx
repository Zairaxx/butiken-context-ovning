function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.price} kr</p>
      <button onClick={() => onAddToCart(product)}>Lägg i varukorg</button>
    </div>
  );
}

export default ProductCard;

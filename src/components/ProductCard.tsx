import { Product } from "../App";

interface ProductCardProps {
  name: string;
  product: Product;
  price: number;
  quantity: number;
  imgUrl: string;
  handleAddToCart: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, product: Product) => void;
  handleRemoveFromCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  product,
  price,
  quantity,
  imgUrl,
  handleAddToCart,
  handleChange,
  handleRemoveFromCart,
}) => {
  return (
    <div className="product-card">
      <img src={imgUrl} alt={name} />
      <div className="product-card-info">
        <div>
          <p>{name}</p>
          <p>
            <em>${price}/kg</em>
          </p>
        </div>
        {!quantity ? (
          <button className="add-to-card-btn" onClick={handleAddToCart}>
            Add to cart
          </button>
        ) : (
          <div className="adjust-quantity">
            <button onClick={handleRemoveFromCart}>-</button>
            <input
              type="text"
              name="quantity"
              id="quantity"
              value={quantity}
              onChange={(e) => handleChange(e, product)}
            />
            <button onClick={handleAddToCart}>+</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

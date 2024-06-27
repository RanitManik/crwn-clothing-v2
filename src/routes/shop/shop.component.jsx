import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context.jsx";
import ProductCardComponent from "../../components/product-card/product-card.component.jsx";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCardComponent key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Shop;

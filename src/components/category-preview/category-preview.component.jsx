import "./category-preview.styles.scss";
import ProductCardComponent from "../product-card/product-card.component.jsx";

const CategoryPreviewComponent = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {
          products.filter((_, index) => index < 4).map((product) => (
            <ProductCardComponent key={product.id} product={product} />))
        }
      </div>
    </div>
  );
};


export default CategoryPreviewComponent;

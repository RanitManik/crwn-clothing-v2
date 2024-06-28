import { useParams } from "react-router-dom";
import "./category.styles.scss";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context.jsx";
import ProductCardComponent from "../../components/product-card/product-card.component.jsx";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>

      <div className="category-route-container">
        {
          products &&
          products.map((product) => (
            <ProductCardComponent key={product.id} product={product} />
          ))
        }
      </div>
    </>
  );

};

export default Category;

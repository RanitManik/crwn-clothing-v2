import "./categories.styles.scss";
import CategoryItemComponent from "../category-item/category-item.component";

const categoriesComponent = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItemComponent key={category.id} category={category} />
      ))}
    </div>
  );
};

export default categoriesComponent;

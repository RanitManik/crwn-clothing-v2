import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context.jsx";
import CategoryPreviewComponent from "../../components/category-preview/category-preview.component.jsx";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreviewComponent
            key={title}
            title={title}
            products={products}
          />
        );
      })}
    </>
  );
};
export default CategoriesPreview;

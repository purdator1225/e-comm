import "./category-preview.styles.scss";

import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>{title.toUpperCase()}</Link>
      </h2>

      <div className="preview">
        {products.filter((x, index) => index < 4)
                .map((product) => <ProductCard key={product.id} product={product} />
        )}
      </div>
    </div>
  );
}

export default CategoryPreview;

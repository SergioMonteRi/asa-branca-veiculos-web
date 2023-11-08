import './styles.css';

import ProductPrice from 'components/ProductPrice';
import CategoryBadge from 'pages/Admin/Products/CategoryBadge';
import { PlpProductCard } from 'types/product';

type Props = {
  product: PlpProductCard;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={product.imgUrl} alt={product.name} />
      </div>

      <div className="card-bottom-container">
        <div className="card-bottom-category-container">
          {product.categories.map((category) => (
            <CategoryBadge name={category.name} key={category.id} />
          ))}
        </div>
        <div>
          <h6 className="mb-2">
            {product.name} - {product.year}
          </h6>
          <ProductPrice price={product.price} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

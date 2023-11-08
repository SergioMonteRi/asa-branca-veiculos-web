import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import axios from 'axios';
import ProductPrice from 'components/ProductPrice';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Product } from 'types/product';
import { BASE_URL } from 'util/requests';
import ProductInfoLoader from './ProductInfoLoader';
import ProductDetailsLoader from './ProductDetailsLoader';

import './styles.css';

import { CarDetailsMock, MotoDetailsMock } from 'util/mocks';
import CarDetails from './CarDetails';

type UrlParams = {
  productId: string;
};

const ProductDetails = () => {
  const { productId } = useParams<UrlParams>();

  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState<Product>(CarDetailsMock);

  // useEffect(() => {
  //   setIsLoading(true);
  //   axios
  //     .get(`${BASE_URL}/products/${productId}`)
  //     .then((response) => {
  //       setProduct(response.data);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, [productId]);

  return (
    <div className="product-details-container">
      <div className="base-card product-details-card">
        <Link to="/products">
          <div className="goback-container">
            <ArrowIcon />
            <h2>VOLTAR</h2>
          </div>
        </Link>

        {isLoading ? <ProductInfoLoader /> : <CarDetails product={product} />}
      </div>
    </div>
  );
};

export default ProductDetails;

import ProductCard from 'components/ProductCard';
import { PlpProductCard } from 'types/product';
import { Link } from 'react-router-dom';
import Pagination from 'components/Pagination';
import { useState, useEffect } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';
import CardLoader from './CardLoader';

import './styles.css';
import ProductFilter from 'components/ProductFilter';
import { PlpPageMock } from 'util/mocks';

const Catalog = () => {
  const [page, setPage] = useState<SpringPage<PlpProductCard>>(PlpPageMock);
  const [isLoading, setIsLoading] = useState(false);

  // const getProducts = (pageNumber: number) => {
  //   const params: AxiosRequestConfig = {
  //     method: 'GET',
  //     url: '/products',
  //     params: {
  //       page: pageNumber,
  //       size: 12,
  //     },
  //   };

  //   setIsLoading(true);
  //   requestBackend(params)
  //     .then((response) => {
  //       setPage(response.data);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  // useEffect(() => {
  //   getProducts(0);
  // }, []);

  return (
    <div className="container my-4 catalog-container">
      <div className="mb-5">
        <ProductFilter />
      </div>

      <div className="row">
        {isLoading ? (
          <CardLoader />
        ) : (
          page?.content.map((product) => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            </div>
          ))
        )}
      </div>

      <div className="row">
        <Pagination
          pageCount={page ? page.totalPages : 0}
          range={3}
          // onChange={getProducts}
        />
      </div>
    </div>
  );
};

export default Catalog;

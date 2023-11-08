import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { AxiosRequestConfig } from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Pagination from 'components/Pagination';
import ProductCrudCard from 'pages/Admin/Products/ProductCrudCard';
import RegisterProductOptionsModal from './RegisterProductOptionsModal';
import ProductFilter, { ProductFilterData } from 'components/ProductFilter';

import { PlpPageMock } from 'util/mocks';
import { requestBackend } from 'util/requests';

import { SpringPage } from 'types/vendor/spring';
import { PlpProductCard } from 'types/product';

import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: ProductFilterData;
};

const List = () => {
  const MySwal = withReactContent(Swal);

  const [page, setPage] = useState<SpringPage<PlpProductCard>>(PlpPageMock);

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { name: '', category: null },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: ProductFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  };

  const getProducts = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/products',
      params: {
        page: controlComponentsData.activePage,
        size: 3,
        name: controlComponentsData.filterData.name,
        categoryId: controlComponentsData.filterData.category?.id,
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  const onClickRegisterProduct = () => {
    MySwal.fire({
      title: 'O que deseja cadastrar?',
      html: <RegisterProductOptionsModal />,
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonText: 'Cancelar',
    });
  };

  // useEffect(() => {
  //   getProducts();
  // }, [getProducts]);

  return (
    <div className="product-crud-container">
      <div className="product-crud-bar-container">
        <button
          className="btn btn-primary text-white btn-crud-add me-3"
          onClick={() => onClickRegisterProduct()}
        >
          ADICIONAR
        </button>
        <ProductFilter onSubmitFilter={handleSubmitFilter} />
      </div>
      <div className="row">
        {page?.content.map((product) => (
          <div key={product.id} className="col-sm-6 col-md-12">
            <ProductCrudCard product={product} onDelete={getProducts} />
          </div>
        ))}
      </div>
      <Pagination
        forcePage={page?.number}
        pageCount={page ? page.totalPages : 0}
        range={3}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default List;

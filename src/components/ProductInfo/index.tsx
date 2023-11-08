import './styles.css';

type Props = {
  type: string;
  data?: number | string;
  icon: React.ReactNode;
};

const ProductInfo = (props: Props) => {
  return (
    <div className="product-info-container mt-1">
      {props.icon}
      <h3 className="ms-2 product-info-type">{props?.type}</h3>
      {props?.data && (
        <>
          <h3 className="product-info-type">: </h3>
          <h3 className="ms-2 product-info-data">{props.data}</h3>
        </>
      )}
    </div>
  );
};

export default ProductInfo;

import './styles.css';

type Props = {
  name: string;
  year: number;
  color: string;
};

const ProductName = (props: Props) => {
  return (
    <div className="product-name-container">
      <h2>{props.name}</h2>
      <h2 className="ms-2">{props.color} </h2>
      <h2 className="ms-2">- {props.year}</h2>
    </div>
  );
};

export default ProductName;

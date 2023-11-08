import Swal from 'sweetalert2';

import history from 'util/history';

import { BsCarFrontFill } from 'react-icons/bs';
import { FaMotorcycle } from 'react-icons/fa6';

import './styles.css';

const RegisterProductOptionsModal = () => {
  const onRegisterCarOptionClick = () => {
    history.push('/admin/products/car/create');
    Swal.close();
  };

  const onRegisterMotorcyclieOptionClick = () => {
    history.push('/admin/products/motorcycle/create');
    Swal.close();
  };
  return (
    <div className="register-option-container">
      <div
        className="register-product-container"
        onClick={onRegisterCarOptionClick}
      >
        <BsCarFrontFill />
        <h2 className="register-procut-option">Carro</h2>
      </div>
      <div
        className="register-product-container"
        onClick={onRegisterMotorcyclieOptionClick}
      >
        <FaMotorcycle />
        <h2 className="register-procut-option">Moto</h2>
      </div>
    </div>
  );
};

export default RegisterProductOptionsModal;

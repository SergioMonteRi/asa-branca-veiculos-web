import ProductInfo from 'components/ProductInfo';
import ProductName from 'components/ProductName';
import ProductPrice from 'components/ProductPrice';

import { IoDiamondOutline as BrandIcon } from 'react-icons/io5';
import { LuCalendarDays as CarYearIcon } from 'react-icons/lu';

import { ReactComponent as CarPlateIcon } from 'assets/icons/car-plate.svg';
import { ReactComponent as CarDoorIcon } from 'assets/icons/car-door.svg';
import { ReactComponent as CarGearIcon } from 'assets/icons/car-gear.svg';
import { ReactComponent as CarPowerIcon } from 'assets/icons/car-power.svg';
import { ReactComponent as CarFuelIcon } from 'assets/icons/car-fuel.svg';
import { ReactComponent as CarKmIcon } from 'assets/icons/car-km.svg';
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg';

import { Product, VehicleType } from 'types/product';

type Props = {
  product: Product;
};

const CarDetails = ({ product }: Props) => {
  return (
    <div className="row">
      <div className="col-xl-6">
        <>
          <div className="img-container">
            <img src={product?.imgUrl} alt={product?.name} />
          </div>
          <div className="name-price-container">
            <h1>{product?.name}</h1>
            {product && <ProductPrice price={product?.price} />}
          </div>
        </>
      </div>

      <div className="col-xl-6">
        <div className="description-container">
          <ProductName
            name={product.name}
            color={product.color}
            year={product.year}
          />
          <p>{product?.description}</p>
          <div className="description-data-container">
            <ProductInfo
              type="Marca"
              data={product.brand}
              icon={<BrandIcon />}
            />
            <ProductInfo
              type="Ano"
              data={product.year}
              icon={<CarYearIcon />}
            />
            {product.vehicleTypeId === VehicleType.CARTYPEID && (
              <ProductInfo
                type="Final da Placa"
                data={product?.finalPlate}
                icon={<CarPlateIcon />}
              />
            )}
            <ProductInfo
              type="Quilometragem"
              data={product.km}
              icon={<CarKmIcon />}
            />
            <ProductInfo
              type="Combustível"
              data={product?.fuelType?.name}
              icon={<CarFuelIcon />}
            />
            <ProductInfo
              type="Potência do motor"
              data={product.motorPower}
              icon={<CarPowerIcon />}
            />
            <ProductInfo
              type="Câmbio"
              data={product.gearType?.name}
              icon={<CarGearIcon />}
            />
            <ProductInfo
              type="Portas"
              data={product.doorNumber}
              icon={<CarDoorIcon />}
            />
          </div>

          <div className="description-data-container mt-4">
            {product.hasAirBag && (
              <ProductInfo type="Air bag" icon={<CheckIcon />} />
            )}
            {product.hasAirConditioning && (
              <ProductInfo type="Ar condicionado" icon={<CheckIcon />} />
            )}

            {product.hasSound && (
              <ProductInfo type="Som" icon={<CheckIcon />} />
            )}
            {product.hasEletricLock && (
              <ProductInfo type="Trava elétrica" icon={<CheckIcon />} />
            )}

            {product.hasEletricWindow && (
              <ProductInfo type="Vidro elétrico" icon={<CheckIcon />} />
            )}
            {product.hasAlarm && (
              <ProductInfo type="Alarme" icon={<CheckIcon />} />
            )}

            {product.hasReverseCamera && (
              <ProductInfo type="Câmera de ré" icon={<CheckIcon />} />
            )}
            {product.hasArmored && (
              <ProductInfo type="Blindado" icon={<CheckIcon />} />
            )}
          </div>

          <div className="description-data-container">
            {product.hasReverseSensor && (
              <ProductInfo type="Sensor de ré" icon={<CheckIcon />} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;

import { SpringPage } from 'types/vendor/spring';
import { Product, PlpProductCard } from 'types/product';
import { SelectOption } from 'types/category';

export const CategoryMock: SelectOption[] = [
  { id: '1', name: 'Hatch' },
  { id: '2', name: 'Sedan' },
  { id: '3', name: 'Automático' },
];

export const CarDetailsMock: Product = {
  id: 1,
  name: 'Peugeot 308',
  color: 'Branco',
  year: 2022,
  description:
    'Não perca a oportunidade de possuir um carro elegante e confiável. Entre em contato conosco hoje mesmo para saber mais sobre este Peugeot 208 - 2022 e agendar uma visita. Não deixe escapar a chance de possuir um veículo de qualidade que proporcionará muita satisfação na estrada.',
  brand: 'HYUNDAI',
  finalPlate: '6',
  fuelType: { id: '1', name: 'Flex' },
  gearType: { id: '1', name: 'Automático' },
  km: 129000,
  motorPower: '1.0',
  doorNumber: 4,
  hasAirBag: true,
  hasSound: true,
  hasEletricWindow: true,
  hasAirConditioning: true,
  hasReverseSensor: true,
  hasAlarm: true,
  hasArmored: true,
  hasReverseCamera: true,
  hasEletricLock: true,
  hasPayedIPVA: true,
  hasUnicOwner: true,
  hasManual: true,
  hasReplacementKey: true,
  price: 66476.0,
  imgUrl:
    'https://assinatura.rentcars.com/wp-content/uploads/2023/04/peugeot-208-aluguel-de-carro-por-assinatura-anual-rentcars.webp',
  vehicleTypeId: 1,
  categories: CategoryMock,
};

export const MotoDetailsMock: Product = {
  id: 1,
  name: 'Peugeot 308',
  color: 'Branco',
  year: 2022,
  description:
    'Não perca a oportunidade de possuir um carro elegante e confiável. Entre em contato conosco hoje mesmo para saber mais sobre este Peugeot 208 - 2022 e agendar uma visita. Não deixe escapar a chance de possuir um veículo de qualidade que proporcionará muita satisfação na estrada.',
  brand: 'HYUNDAI',
  km: 129000,
  motorPower: '1.0',
  hasSound: true,
  hasAlarm: true,
  hasPayedIPVA: true,
  hasUnicOwner: true,
  hasManual: true,
  hasReplacementKey: true,
  price: 66476.0,
  imgUrl:
    'https://assinatura.rentcars.com/wp-content/uploads/2023/04/peugeot-208-aluguel-de-carro-por-assinatura-anual-rentcars.webp',
  vehicleTypeId: 2,
  hasAbs: true,
  hasBackpack: true,
  hasExhaustSport: true,
  hasGps: true,
  hasOnBoardComputer: true,
  hasSteeringDamper: true,
  categories: CategoryMock,
};

const PlpMotoMock: PlpProductCard = {
  id: 3,
  imgUrl:
    'https://www.cycleworld.com/resizer/Xp-LC5SIHOqJ7WUJsxrUuoQuROE=/1200x900/filters:focal(575x458:585x468)/cloudfront-us-east-1.images.arcpublishing.com/octane/DWHXKCSTYVGATGRLGDILKLUX7E.jpg',
  name: 'Honda CB750 Hornet',
  year: '2023',
  price: 36476.0,
  vehicleTypeId: 2,
  categories: CategoryMock,
};

const PlpMock: PlpProductCard = {
  id: 1,
  imgUrl:
    'https://www.karvi.com.br/blog/wp-content/uploads/2020/09/Peugeot-208-850x601.jpg',
  name: 'Peugeot 308',
  year: '2022',
  price: 66476.0,
  vehicleTypeId: 1,
  categories: CategoryMock,
};

const PlpMock2: PlpProductCard = {
  id: 2,
  imgUrl:
    'https://quatrorodas.abril.com.br/wp-content/uploads/2022/02/VW-VIRTUS-2023-frente-Copia-Copia.jpg?resize=1280,720',
  name: 'Virtus',
  year: '2023',
  price: 98490.0,
  vehicleTypeId: 1,
  categories: CategoryMock,
};

export const PlpPageMock: SpringPage<PlpProductCard> = {
  content: [
    PlpMock,
    PlpMock2,
    PlpMotoMock,
    PlpMock2,
    PlpMock,
    PlpMotoMock,
    PlpMock,
    PlpMock2,
    PlpMotoMock,
    PlpMock2,
    PlpMock,
    PlpMotoMock,
    PlpMock,
  ],
  last: false,
  totalElements: 10,
  totalPages: 3,
  size: 3,
  number: 1,
  first: false,
  empty: false,
};

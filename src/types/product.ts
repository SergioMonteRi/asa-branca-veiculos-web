import { Category, SelectOption } from './category';

export enum VehicleType {
  CARTYPEID = 1,
  MOTOTYPEID = 2,
}

export type Product = {
  id: number;
  name: string;
  brand: string;
  motorPower: string;
  km: number;
  color: string;
  year: number;
  price: number;
  description: string;

  hasSound: boolean;
  hasAlarm: boolean;

  hasPayedIPVA: boolean;
  hasUnicOwner: boolean;
  hasManual: boolean;
  hasReplacementKey: boolean;

  vehicleTypeId: VehicleType;
  imgUrl: string;

  // Properties specific to cars
  finalPlate?: string;
  doorNumber?: number;

  fuelType?: SelectOption;
  gearType?: SelectOption;

  hasAirBag?: boolean;
  hasAirConditioning?: boolean;
  hasEletricWindow?: boolean;
  hasArmored?: boolean;
  hasReverseCamera?: boolean;
  hasReverseSensor?: boolean;
  hasEletricLock?: boolean;

  // Properties specific to motorcycles
  hasAbs?: boolean;
  hasOnBoardComputer?: boolean;
  hasExhaustSport?: boolean;
  hasBackpack?: boolean;
  hasGps?: boolean;
  hasSteeringDamper?: boolean;

  // category
  categories: SelectOption[];
};

export type PlpProductCard = {
  id: number;
  imgUrl: string;
  name: string;
  year: string;
  price: number;
  categories: SelectOption[];
  vehicleTypeId: VehicleType;
};

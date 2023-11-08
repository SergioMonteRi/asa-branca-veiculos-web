import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Select from 'react-select';
import { toast } from 'react-toastify';
import { FaMotorcycle } from 'react-icons/fa6';
import { useForm, Controller } from 'react-hook-form';
import CurrencyInput from 'react-currency-input-field';

import { AxiosRequestConfig } from 'axios';

import { requestBackend } from 'util/requests';
import { GearOptions, FuelOptions } from 'util/constants';

import { Product } from 'types/product';
import { Category, SelectOption } from 'types/category';
import { CategoryMock } from 'util/mocks';

// import './styles.css';

type UrlParams = {
  productId: string;
};

const MotorcycleForm = () => {
  const { productId } = useParams<UrlParams>();

  const isEditing = productId !== 'create';

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<Product>();

  useEffect(() => {
    if (isEditing) {
      requestBackend({ url: `/products/${productId}` }).then((response) => {
        const product = response.data as Product;

        setValue('name', product.name);
        setValue('price', product.price);
        setValue('description', product.description);
        // setValue('imgUrl', product.imgUrl);
        // setValue('categories', product.categories);
      });
    }
  }, [isEditing, productId, setValue]);

  const onSubmit = (formData: Product) => {
    console.log(formData);
    // const data = {
    //   ...formData,
    //   price: String(formData.price).replace(',', '.'),
    // };

    // const config: AxiosRequestConfig = {
    //   method: isEditing ? 'PUT' : 'POST',
    //   url: isEditing ? `/products/${productId}` : '/products',
    //   data,
    //   withCredentials: true,
    // };

    // requestBackend(config)
    //   .then(() => {
    //     toast.info('Produto cadastrado com sucesso');
    //     history.push('/admin/products');
    //   })
    //   .catch(() => {
    //     toast.error('Erro ao cadastrar produto');
    //   });
  };

  const handleCancel = () => {
    history.push('/admin/products');
  };

  return (
    <div className="product-crud-container">
      <div className="base-card product-crud-form-card">
        <div className="product-crud-form-title-container">
          <FaMotorcycle />
          <h1 className="product-crud-form-title">
            {isEditing ? 'Editar moto' : 'Cadastrar moto'}
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} data-testid="form">
          <div className="row product-crud-inputs-container">
            <div className="col-lg-6 product-crud-inputs-left-container">
              <div className="margin-bottom-30">
                <input
                  {...register('name', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.name ? 'is-invalid' : ''
                  }`}
                  placeholder="Nome"
                  name="name"
                  data-testid="name"
                />
                <div className="invalid-feedback d-block">
                  {errors.name?.message}
                </div>
              </div>

              <div className="margin-bottom-30">
                <input
                  {...register('year', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.year ? 'is-invalid' : ''
                  }`}
                  placeholder="Ano"
                  name="year"
                  data-testid="year"
                />
                <div className="invalid-feedback d-block">
                  {errors.year?.message}
                </div>
              </div>

              <div className="margin-bottom-30">
                <input
                  {...register('brand', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.brand ? 'is-invalid' : ''
                  }`}
                  placeholder="Marca"
                  name="brand"
                  data-testid="brand"
                />
                <div className="invalid-feedback d-block">
                  {errors.brand?.message}
                </div>
              </div>

              <div className="margin-bottom-30">
                <input
                  {...register('km', {
                    required: 'Campo obrigatório',
                  })}
                  type="number"
                  className={`form-control base-input ${
                    errors.km ? 'is-invalid' : ''
                  }`}
                  placeholder="Quilometragem"
                  name="km"
                  data-testid="km"
                />
                <div className="invalid-feedback d-block">
                  {errors.km?.message}
                </div>
              </div>

              <div className="margin-bottom-30">
                <input
                  {...register('motorPower', {
                    required: 'Campo obrigatório',
                  })}
                  type="string"
                  className={`form-control base-input ${
                    errors.motorPower ? 'is-invalid' : ''
                  }`}
                  placeholder="Potência do motor"
                  name="motorPower"
                  data-testid="motorPower"
                />
                <div className="invalid-feedback d-block">
                  {errors.motorPower?.message}
                </div>
              </div>

              <div className="margin-bottom-30">
                <input
                  {...register('color', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.color ? 'is-invalid' : ''
                  }`}
                  placeholder="Cor"
                  name="color"
                  data-testid="color"
                />
                <div className="invalid-feedback d-block">
                  {errors.color?.message}
                </div>
              </div>

              {/* <div className="margin-bottom-30 ">
                <label htmlFor="categories" className="d-none">
                  Categorias
                </label>
                <Controller
                  name="categories"
                  rules={{ required: true }}
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={selectCategories}
                      classNamePrefix="product-crud-select"
                      isMulti
                      getOptionLabel={(category: Category) => category.name}
                      getOptionValue={(category: Category) =>
                        String(category.id)
                      }
                      inputId="categories"
                    />
                  )}
                />
                {errors.categories && (
                  <div className="invalid-feedback d-block">
                    Campo obrigatório
                  </div>
                )}
              </div> */}

              <div className="margin-bottom-30">
                <Controller
                  name="price"
                  rules={{ required: 'Campo obrigatório' }}
                  control={control}
                  render={({ field }) => (
                    <CurrencyInput
                      placeholder="Preço"
                      className={`form-control base-input ${
                        errors.price ? 'is-invalid' : ''
                      }`}
                      disableGroupSeparators={true}
                      value={field.value}
                      onValueChange={field.onChange}
                      data-testid="price"
                    />
                  )}
                />
                <div className="invalid-feedback d-block">
                  {errors.price?.message}
                </div>
              </div>

              <div className="margin-bottom-30 ">
                <label htmlFor="categories" className="d-none">
                  Categorias
                </label>
                <Controller
                  name="categories"
                  rules={{ required: true }}
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={CategoryMock}
                      classNamePrefix={`product-crud-select`}
                      placeholder="Categorias"
                      isMulti
                      noOptionsMessage={() => 'Opção não encontrada'}
                      getOptionLabel={(category: SelectOption) => category.name}
                      getOptionValue={(category: SelectOption) => category.id}
                    />
                  )}
                />
                {errors.categories && (
                  <div className="invalid-feedback d-block">
                    Campo obrigatório
                  </div>
                )}
              </div>

              {/* <div className="margin-bottom-30">
                <input
                  {...register('imgUrl', {
                    required: 'Campo obrigatório',
                    pattern: {
                      value: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm,
                      message: 'Deve ser uma URL válida',
                    },
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.name ? 'is-invalid' : ''
                  }`}
                  placeholder="URL da imagem do produto"
                  name="imgUrl"
                  data-testid="imgUrl"
                />
                <div className="invalid-feedback d-block">
                  {errors.imgUrl?.message}
                </div>
              </div>*/}
            </div>
            <div className="col-lg-6">
              <div className="margin-bottom-30">
                <textarea
                  rows={5}
                  {...register('description', {
                    required: 'Campo obrigatório',
                  })}
                  className={`form-control base-input h-auto ${
                    errors.description ? 'is-invalid' : ''
                  }`}
                  placeholder="Descrição"
                  name="description"
                  data-testid="description"
                />
                <div className="invalid-feedback d-block">
                  {errors.description?.message}
                </div>
              </div>

              <div className="row product-crud-inputs-container">
                <div className="col-sm-6">
                  <div className="margin-bottom-30">
                    <div
                      className={`input-checkbox-container ${
                        errors.hasAbs ? 'input-checkbox-container-invalid' : ''
                      }`}
                    >
                      <label className="" htmlFor="hasAbs">
                        ABS
                      </label>
                      <input
                        {...register('hasAbs')}
                        className={`${errors.hasAbs ? 'is-invalid' : ''}`}
                        type="checkbox"
                        name="hasAbs"
                        data-testid="hasAbs"
                      />
                    </div>
                    <div className="invalid-feedback d-block">
                      {errors.hasAbs?.message}
                    </div>
                  </div>

                  <div className="margin-bottom-30">
                    <div
                      className={`input-checkbox-container ${
                        errors.hasOnBoardComputer
                          ? 'input-checkbox-container-invalid'
                          : ''
                      }`}
                    >
                      <label htmlFor="hasOnBoardComputer">
                        Computador de bordo
                      </label>
                      <input
                        {...register('hasOnBoardComputer')}
                        className={`${
                          errors.hasOnBoardComputer ? 'is-invalid' : ''
                        }`}
                        type="checkbox"
                        name="hasOnBoardComputer"
                        data-testid="hasOnBoardComputer"
                      />
                    </div>
                    <div className="invalid-feedback d-block">
                      {errors.hasOnBoardComputer?.message}
                    </div>
                  </div>

                  <div className="margin-bottom-30">
                    <div
                      className={`input-checkbox-container ${
                        errors.hasExhaustSport
                          ? 'input-checkbox-container-invalid'
                          : ''
                      }`}
                    >
                      <label htmlFor="hasExhaustSport">
                        Escapamento esportivo
                      </label>
                      <input
                        {...register('hasExhaustSport')}
                        className={`${
                          errors.hasExhaustSport ? 'is-invalid' : ''
                        }`}
                        type="checkbox"
                        name="hasExhaustSport"
                        data-testid="hasExhaustSport"
                      />
                    </div>
                    <div className="invalid-feedback d-block">
                      {errors.hasExhaustSport?.message}
                    </div>
                  </div>

                  <div className="margin-bottom-30">
                    <div
                      className={`input-checkbox-container ${
                        errors.hasBackpack
                          ? 'input-checkbox-container-invalid'
                          : ''
                      }`}
                    >
                      <label htmlFor="hasBackpack">Bolsa/Baú</label>
                      <input
                        {...register('hasBackpack')}
                        className={`${errors.hasBackpack ? 'is-invalid' : ''}`}
                        type="checkbox"
                        name="hasBackpack"
                        data-testid="hasBackpack"
                      />
                    </div>
                    <div className="invalid-feedback d-block">
                      {errors.hasBackpack?.message}
                    </div>
                  </div>

                  <div className="margin-bottom-30">
                    <div
                      className={`input-checkbox-container ${
                        errors.hasAlarm
                          ? 'input-checkbox-container-invalid'
                          : ''
                      }`}
                    >
                      <label htmlFor="hasAlarm">Alarme</label>
                      <input
                        {...register('hasAlarm')}
                        className={`${errors.hasAlarm ? 'is-invalid' : ''}`}
                        type="checkbox"
                        name="hasAlarm"
                        data-testid="hasAlarm"
                      />
                    </div>
                    <div className="invalid-feedback d-block">
                      {errors.hasAlarm?.message}
                    </div>
                  </div>

                  <div className="margin-bottom-30">
                    <div
                      className={`input-checkbox-container ${
                        errors.hasGps ? 'input-checkbox-container-invalid' : ''
                      }`}
                    >
                      <label htmlFor="hasGps">GPS</label>
                      <input
                        {...register('hasGps')}
                        className={`${errors.hasGps ? 'is-invalid' : ''}`}
                        type="checkbox"
                        name="hasGps"
                        data-testid="hasGps"
                      />
                    </div>
                    <div className="invalid-feedback d-block">
                      {errors.hasGps?.message}
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="margin-bottom-30">
                    <div
                      className={`input-checkbox-container ${
                        errors.hasReplacementKey
                          ? 'input-checkbox-container-invalid'
                          : ''
                      }`}
                    >
                      <label htmlFor="hasReplacementKey">Chave reserva</label>
                      <input
                        {...register('hasReplacementKey')}
                        className={`${
                          errors.hasReplacementKey ? 'is-invalid' : ''
                        }`}
                        type="checkbox"
                        name="hasReplacementKey"
                        data-testid="hasReplacementKey"
                      />
                    </div>
                    <div className="invalid-feedback d-block">
                      {errors.hasReplacementKey?.message}
                    </div>
                  </div>

                  <div className="margin-bottom-30">
                    <div
                      className={`input-checkbox-container ${
                        errors.hasSound
                          ? 'input-checkbox-container-invalid'
                          : ''
                      }`}
                    >
                      <label htmlFor="hasSound">Som</label>
                      <input
                        {...register('hasSound')}
                        className={`${errors.hasSound ? 'is-invalid' : ''}`}
                        type="checkbox"
                        name="hasSound"
                        data-testid="hasSound"
                      />
                    </div>
                    <div className="invalid-feedback d-block">
                      {errors.hasSound?.message}
                    </div>
                  </div>

                  <div className="margin-bottom-30">
                    <div
                      className={`input-checkbox-container ${
                        errors.hasSteeringDamper
                          ? 'input-checkbox-container-invalid'
                          : ''
                      }`}
                    >
                      <label htmlFor="hasSteeringDamper">
                        Amortecedor de direção
                      </label>
                      <input
                        {...register('hasSteeringDamper')}
                        className={`${
                          errors.hasSteeringDamper ? 'is-invalid' : ''
                        }`}
                        type="checkbox"
                        name="hasSteeringDamper"
                        data-testid="hasSteeringDamper"
                      />
                    </div>
                    <div className="invalid-feedback d-block">
                      {errors.hasSteeringDamper?.message}
                    </div>
                  </div>

                  <div className="margin-bottom-30">
                    <div
                      className={`input-checkbox-container ${
                        errors.hasPayedIPVA
                          ? 'input-checkbox-container-invalid'
                          : ''
                      }`}
                    >
                      <label htmlFor="hasPayedIPVA">IPVA pago</label>
                      <input
                        {...register('hasPayedIPVA')}
                        className={`${errors.hasPayedIPVA ? 'is-invalid' : ''}`}
                        type="checkbox"
                        name="hasPayedIPVA"
                        data-testid="hasPayedIPVA"
                      />
                    </div>
                    <div className="invalid-feedback d-block">
                      {errors.hasPayedIPVA?.message}
                    </div>
                  </div>

                  <div className="margin-bottom-30">
                    <div
                      className={`input-checkbox-container ${
                        errors.hasUnicOwner
                          ? 'input-checkbox-container-invalid'
                          : ''
                      }`}
                    >
                      <label htmlFor="hasUnicOwner">Único dono</label>
                      <input
                        {...register('hasUnicOwner')}
                        className={`${errors.hasUnicOwner ? 'is-invalid' : ''}`}
                        type="checkbox"
                        name="hasUnicOwner"
                        data-testid="hasUnicOwner"
                      />
                    </div>
                    <div className="invalid-feedback d-block">
                      {errors.hasUnicOwner?.message}
                    </div>
                  </div>

                  <div className="margin-bottom-30">
                    <div
                      className={`input-checkbox-container ${
                        errors.hasManual
                          ? 'input-checkbox-container-invalid'
                          : ''
                      }`}
                    >
                      <label htmlFor="hasManual">Com manual</label>
                      <input
                        {...register('hasManual')}
                        className={`${errors.hasManual ? 'is-invalid' : ''}`}
                        type="checkbox"
                        name="hasManual"
                        data-testid="hasManual"
                      />
                    </div>
                    <div className="invalid-feedback d-block">
                      {errors.hasManual?.message}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-crud-buttons-container">
            <button
              className="btn btn-outline-danger product-crud-button me-2"
              onClick={handleCancel}
            >
              CANCELAR
            </button>
            <button className="btn btn-primary product-crud-button text-white">
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MotorcycleForm;

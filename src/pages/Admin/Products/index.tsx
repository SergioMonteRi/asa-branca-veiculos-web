import { Route, Switch } from 'react-router-dom';

import List from './List';
import CarForm from './Form/CarForm';
import MotorcycleForm from './Form/MotorcycleForm';

const Products = () => {
  return (
    <Switch>
      <Route path="/admin/products" exact>
        <List />
      </Route>
      <Route path="/admin/products/car/:productId">
        <CarForm />
      </Route>
      <Route path="/admin/products/motorcycle/:productId">
        <MotorcycleForm />
      </Route>
    </Switch>
  );
};

export default Products;

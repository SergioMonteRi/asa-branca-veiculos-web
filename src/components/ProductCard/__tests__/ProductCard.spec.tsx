import { render, screen } from '@testing-library/react';
import { Product } from 'types/product';
import ProductCard from '..';

test('should render ProductCard', () => {
  const product: Product = {
    name: 'Advanced React',
    price: 100,
    imgUrl: 'https://react.com',
  } as Product;

  render(<ProductCard product={product} />);

  expect(screen.getByText('R$')).toBeInTheDocument();
  expect(screen.getByText('100,00')).toBeInTheDocument();
  expect(screen.getByText(product.name)).toBeInTheDocument();
  expect(screen.getByAltText(product.name)).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import ProductPrice from '..';

test('should render ProductPrice', () => {
  const price = 100;

  render(<ProductPrice price={price} />);

  expect(screen.getByText('100,00')).toBeInTheDocument();
  expect(screen.getByText('R$')).toBeInTheDocument();

});

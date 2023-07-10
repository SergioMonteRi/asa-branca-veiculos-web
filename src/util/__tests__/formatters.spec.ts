import { formatPrice } from 'util/formatters';

describe('formatPrice for positive numbers', () => {
  test('formaPrice should format number pt-BR when given 10.1', () => {
    const value = 10.2;

    const result = formatPrice(value);

    expect(result).toEqual('10,20');
  });

  test('formaPrice should format number pt-BR when given 0.1', () => {
    const value = 0.1;

    const result = formatPrice(value);

    expect(result).toEqual('0,10');
  });
});

describe('formatPrice for non positive numbers', () => {
  test('formaPrice should format number pt-BR when given 0', () => {
    const value = 0;

    const result = formatPrice(value);

    expect(result).toEqual('0,00');
  });

  test('formaPrice should format number pt-BR when given -5.1', () => {
    const value = -5.1;

    const result = formatPrice(value);

    expect(result).toEqual('-5,10');
  });
});

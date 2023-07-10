import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from '..';

describe('Pagination tests', () => {
  test('should render pagination', () => {
    const pageCount = 3;
    const range = 3;

    render(<Pagination pageCount={pageCount} pageRange={range} />);

    const pageOne = screen.getByText('1');
    const pageTwo = screen.getByText('2');
    const pageThree = screen.getByText('3');
    const pageFour = screen.queryByText('4');

    expect(pageOne).toBeInTheDocument();
    expect(pageOne).toHaveClass('pagination-link-active');

    expect(pageTwo).toBeInTheDocument();
    expect(pageTwo).not.toHaveClass('pagination-link-active');

    expect(pageThree).toBeInTheDocument();
    expect(pageThree).not.toHaveClass('pagination-link-active');

    expect(pageFour).not.toBeInTheDocument();
  });

  test('next arrow should call onChange', async () => {
    const pageCount = 3;
    const range = 3;
    const onChange = jest.fn();

    render(
      <Pagination pageCount={pageCount} pageRange={range} onChange={onChange} />
    );

    const arrowNext = screen.getByTestId('arrow-next');

    await userEvent.click(arrowNext);
    expect(onChange).toHaveBeenCalledWith(1);
  });

  test('previous arrow should call onChange', async () => {
    const pageCount = 3;
    const range = 3;
    const forcePage = 1;
    const onChange = jest.fn();

    render(
      <Pagination
        pageCount={pageCount}
        pageRange={range}
        onChange={onChange}
        forcePage={forcePage}
      />
    );

    const previous = screen.getByTestId('arrow-previous');

    await userEvent.click(previous);
    expect(onChange).toHaveBeenCalledWith(0);
  });

  test('page link should call onChange', async () => {
    const pageCount = 3;
    const range = 3;
    const onChange = jest.fn();

    render(
      <Pagination pageCount={pageCount} pageRange={range} onChange={onChange} />
    );

    const pageTwo = screen.getByText('2');

    await userEvent.click(pageTwo);
    expect(onChange).toHaveBeenCalledWith(1);
  });
});

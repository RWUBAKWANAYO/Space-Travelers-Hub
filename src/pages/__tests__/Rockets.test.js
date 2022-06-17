import axios from 'axios';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import { FetchRocketsHandler } from '../../redux/rockets/rockets';
import Rockets from '../Rockets';

jest.mock('axios');

const TestRockets = () => (
  <Provider store={store}>
    <Rockets />
  </Provider>
);
const response = {
  data: [
    {
      id: 1,
      flickr_images: 'rocket image',
      rocket_name: 'rocket name',
      description: 'rocket description',
      active: false,
    },
  ],
};

axios.get.mockResolvedValue(response);
FetchRocketsHandler();
render(<TestRockets />);

describe('Rockets page', () => {
  it('get elements', () => {
    expect(screen.getByRole('img', { src: 'rocket image' })).toBeInTheDocument();
    expect(screen.getByText(/rocket description/)).toBeInTheDocument();
    expect(screen.getByText('rocket name')).toBeInTheDocument();
  });

  it('Join and Leave Mission', () => {
    render(<TestRockets />);
    const Button = screen.getByRole('button');
    expect(screen.getByRole('button', { name: /Reserve Rocket/ })).toBeInTheDocument();
    fireEvent.click(Button);
    expect(screen.getByRole('button', { name: /Cancel Reservation/ })).toBeInTheDocument();
    expect(screen.getByText(/Reserved/)).toBeVisible();
  });
});

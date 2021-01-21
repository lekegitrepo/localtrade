import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import App from '../../components/App';

jest.mock('../../components/App');

describe('Validate routes', () => {
  test('Valid route to the index page', () => {
    App.mockImplementation(() => <div>index page</div>);
    const page = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
  })
});

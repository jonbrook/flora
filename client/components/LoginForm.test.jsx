import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useHistory } from 'react-router-native';
import LoginForm from './LoginForm';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { login } from '../ApiService';
import store from '../store/store';

jest.mock('@expo/vector-icons', () => ({
  AntDesign() {
    return 'arrow';
  },
}));

jest.mock('../ApiService', () => ({
  login: jest.fn((data) => {
    if (data.email && data.password) {
      return true;
    }
    return false;
  }),
}));

const mockPush = jest.fn();

jest.mock('react-router-native', () => ({
  useHistory: () => ({
    push: mockPush,
  }),
}));

const component = (
  <Provider store={store}>
    <LoginForm />
  </Provider>
);

describe('<LoginForm />', () => {
  it('should call onSubmit with the username and password when submitted', async () => {
    // Arrange
    const fakeUser = {
      email: 'jon@example.com',
      password: '1234',
    };
    const { getByLabelText } = render(component);

    const usernameNode = getByLabelText('emailInput');
    const passwordNode = getByLabelText('passwordInput');

    // Act
    fireEvent.changeText(usernameNode, fakeUser.email);
    fireEvent.changeText(passwordNode, fakeUser.password);

    const submit = getByLabelText('submit');
    fireEvent.press(submit);

    // Assert
    await waitFor(() => expect(mockPush).toHaveBeenCalled());
  });
});

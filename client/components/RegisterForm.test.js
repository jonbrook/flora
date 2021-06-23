/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useHistory } from 'react-router-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { register } from '../ApiService';
import RegisterForm from './RegisterForm';

jest.mock('@expo/vector-icons', () => ({
  AntDesign() {
    return 'arrow';
  },
}));

jest.mock('../ApiService', () => ({
  register: jest.fn((credentials) => {
    if (credentials.email && credentials.password && credentials.username) {
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

afterEach(() => mockPush.mockReset());

describe('<RegisterForm />', () => {
  it('should have 1 child', () => {
    const tree = renderer.create(<RegisterForm />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it('should render default elements', () => {
    const { getAllByText } = render(<RegisterForm />);

    expect(getAllByText('username').length).toBe(1);
  });

  it('should call register with username, email and password', async () => {
    const { getByTestId, getByLabelText } = render(<RegisterForm />);

    const username = getByLabelText('username-input');
    fireEvent.changeText(username, 'JohnDoe');

    const email = getByTestId('email');
    fireEvent.changeText(email, 'JohnDoe@test.com');

    const password = getByTestId('password');
    fireEvent.changeText(password, '1234');

    const passwordConfirm = getByTestId('confirm-password');
    fireEvent.changeText(passwordConfirm, '1234');

    const submit = getByTestId('button');
    fireEvent.press(submit);

    await waitFor(() => expect(mockPush).toHaveBeenCalled());
  });

  it('should fail if not called with required input', () => {
    const { getByTestId } = render(<RegisterForm />);

    const submit = getByTestId('button');
    fireEvent.press(submit);

    expect(mockPush).not.toHaveBeenCalled();
  });
});

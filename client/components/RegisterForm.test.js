import React from 'react';
import RegisterForm from './RegisterForm';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native';
import { expect } from '@jest/globals';

jest.mock('@expo/vector-icons', () => {
  return {
    AntDesign: function () {
      return 'arrow';
    },
  };
});

jest.mock('../ApiService.js', () => {
  return {
    register: jest.fn((credentials) => {
      if (credentials.email && credentials.password && credentials.username) {
        console.log(credentials);
        return credentials;
      } else {
        return 'Missing Register Details';
      }
    }),
  };
});

const mockHistory = { push: jest.fn() };

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
    const { getByTestId, getByLabelText } = render(
      <RegisterForm history={mockHistory} />,
    );

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

    expect(mockHistory.push).toHaveBeenCalled();
  });
});

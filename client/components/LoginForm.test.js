import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import LoginForm from './LoginForm';

jest.mock('@expo/vector-icons', () => {
  return {
    AntDesign: function () {
      return 'arrow';
    },
  };
});

jest.mock('../ApiService', () => {
  return {
    login: jest.fn(() => {
      return true;
    }),
  };
});

const mockHistory = { push: jest.fn() };

describe('<LoginForm />', () => {
  it('should call onSubmit with the username and password when submitted', () => {
    // Arrange
    const fakeUser = {
      email: 'jon@example.com',
      password: '1234',
    };
    const { getByLabelText } = render(<LoginForm history={mockHistory} />);

    const usernameNode = getByLabelText('emailInput');
    const passwordNode = getByLabelText('passwordInput');

    // Act
    usernameNode.value = fakeUser.email;
    passwordNode.value = fakeUser.password;

    const submit = getByLabelText('submit');
    fireEvent.press(submit);

    // Assert
    expect(mockHistory.push).toHaveBeenCalled();
    expect(mockHistory.push).toHaveBeenCalledWith(fakeUser);
  });

  // it('snapshot', () => {
  //   const { container } = render(<LoginForm />);
  //   expect(container.firstChild).toMatchSnapshot();
  // });
});

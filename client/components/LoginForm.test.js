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
    login: jest.fn((data) => {
      if (data.email && data.password) {
        return true;
      }
      return false;
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
    fireEvent.changeText(usernameNode, fakeUser.email);
    fireEvent.changeText(passwordNode, fakeUser.password);

    const submit = getByLabelText('submit');
    fireEvent.press(submit);

    // Assert
    expect(mockHistory.push).toHaveBeenCalled();
  });

  // it('snapshot', () => {
  //   const { container } = render(<LoginForm />);
  //   expect(container.firstChild).toMatchSnapshot();
  // });
});

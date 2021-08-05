import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import App from '../App';

test('sample test', () => {
  const {queryByText, getByLabelText, getAllByTestId} = render(<App />);
  const nameInput = getByLabelText('Name');
  const usernameInput = getByLabelText('Username');
  const emailInput = getByLabelText('Email');
  const ageInput = getByLabelText('Age');

  expect(getAllByTestId('form-input')[0]).not.toHaveClass(
    'form-input--invalid'
  );
  expect(getAllByTestId('form-input')[3]).not.toHaveClass(
    'form-input--invalid'
  );
  expect(queryByText('username must be valid')).not.toBeInTheDocument();
  expect(queryByText('email must be valid')).not.toBeInTheDocument();

  fireEvent.change(usernameInput, {target: {value: 'foo'}});
  fireEvent.blur(usernameInput);
  fireEvent.blur(nameInput);
  fireEvent.blur(emailInput);
  fireEvent.blur(ageInput);
  fireEvent.change(ageInput, {target: {value: '20'}});
  fireEvent.change(emailInput, {target: {value: 'test@gmail.com'}});

  expect(queryByText('name must be valid')).toBeInTheDocument();
  expect(queryByText('username must be valid')).toBeInTheDocument();
  expect(queryByText('email must be valid')).not.toBeInTheDocument();
  expect(queryByText('age must be valid')).not.toBeInTheDocument();

  fireEvent.change(nameInput, {target: {value: 'foo'}});
  fireEvent.change(usernameInput, {target: {value: 'johndoe'}});
  fireEvent.change(emailInput, {target: {value: 'foo@bar'}});
  fireEvent.change(ageInput, {target: {value: '10'}});

  expect(queryByText('name must be valid')).not.toBeInTheDocument();
  expect(queryByText('username must be valid')).not.toBeInTheDocument();
  expect(queryByText('email must be valid')).toBeInTheDocument();
  expect(queryByText('age must be valid')).toBeInTheDocument();
  expect(getAllByTestId('form-input')[2]).toHaveClass('form-input--invalid');
});

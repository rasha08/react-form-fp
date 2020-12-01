# react-form-fp

> Yet another form library for React, created as context provider, following functional programming principles

[![NPM](https://img.shields.io/npm/v/react-form-fp.svg)](https://www.npmjs.com/package/react-form-fp) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-form-fp
```

## About
 React Form FP is a state management and validation library for easy form manipulation. Entire API is exposed though context
  provider, so it makes it easy to work with class components or functional components.


 Library has two major functionalities FormContext for form state and validation and WizardContext for multi-step forms.

## Usage

### Example

*Validation*
```ts
import { useEmailValidator, useStringValidator } from 'use-validation-hooks';

import { ValidationSchema } from 'react-form-fp';

const baseAuth = {
  email: useEmailValidator({ label: 'Email', required: true }),
  password: useStringValidator({ label: 'Password', required: true, min: 8 }),
};

const register = {
  first_name: useStringValidator({ label: 'First Name', required: true, min: 2 }),
  last_name: useStringValidator({ label: 'Last Name', required: true, min: 2 }),
};

export const authValidation: ValidationSchema = {
  login: baseAuth,
  register: {
    ...baseAuth,
    ...register,
  },
};
```

*types*
```ts
export type AuthenticationFormName = 'register' | 'login';
export type AuthenticationFormField = Login & Register;

export enum AuthenticationForms {
  register = 'register',
  login = 'login',
}

type BaseAuth = {
  email: string;
  password: string;
};

export type Register = BaseAuth & {
  first_name: string;
  last_name: string;
  date_of_birth: string;
};

export type Login = BaseAuth;

export type AuthenticationState = {
  login: Login;
  register: Register;
};

```

*models*
```ts
export const authenticationState: AuthenticationState = {
  login: {
    password: '',
    email: '',
  },
  register: {
    password: '',
    email: '',
    first_name: '',
    last_name: '',
    date_of_birth: '',
  },
};
```

*Login Page*
```tsx
import React, { ChangeEvent, useCallback } from 'react';
import { FormContextProvider, useFormContext } from 'react-form-fp';

import Button from '../../../../components/Botton/Button';
import Input from '../../../../components/Input/Input';

import { authenticationState } from '...models';
import { AuthenticationFormField, AuthenticationFormName, AuthenticationForms } from '...types';
import { authValidation } from '...validation';

enum FormField {
  Email = 'email',
  Password = 'password'
}

const LoginForm = () => {
  const {
    state: { login, errors },
    validate,
    setFieldValue,
    validateForm,
  } = useFormContext<AuthenticationFormName, AuthenticationFormField>();

  const validateFieldValue = useCallback(
    (fieldName: keyof AuthenticationFormField) => ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      validate(AuthenticationForms.login)(fieldName)(value || login[fieldName]),
    [validate, login],
  );
  const handleFieldChange = useCallback(
    (fieldName: keyof AuthenticationFormField) => ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setFieldValue(AuthenticationForms.login)(fieldName)(value),
    [setFieldValue],
  );

  const onLogin = useCallback(() => {
    if (validateForm(AuthenticationForms.login, login)) {
      //  Send Login Request
    }
  }, [validateForm, login]);

  return (
    <>
      <Input
        onBlur={validateFieldValue(FormField.Email)}
        onChange={handleFieldChange(FormField.Email)}
        value={login.email}
        error={errors[FormField.Email]}
        name={FormField.Email}
        label={'Email Address'}
        placeholder={'Enter your email address...'}
      />
      <Input
        onBlur={validateFieldValue(FormField.Password)}
        onChange={handleFieldChange(FormField.Password)}
        type={FormField.Password}
        value={login.password}
        error={errors[FormField.Password]}
        name={FormField.Password}
        label={'Password'}
        placeholder={'Enter your password...'}
      />
      <Button variant={'primary'} onClick={onLogin}>
        Login to your Account
      </Button>
    </>
  );
};

const Login = () => {
  return (
    <FormContextProvider initialState={authenticationState} validationSchema={authValidation}>
      <LoginForm />
    </FormContextProvider>
  );
};

export default Login;
```

*Register*
```tsx
import React, { ChangeEvent, useCallback } from 'react';
import { FormContextProvider, useFormContext } from 'react-form-fp';

import Button from '../../../../components/Botton/Button';
import Input from '../../../../components/Input/Input';

import { authenticationState } from '../models';
import { AuthenticationFormField, AuthenticationFormName, AuthenticationForms } from '../types';
import { authValidation } from '../validation';

enum FormField {
  Email = 'email',
  Password = 'password',
  FirstName = 'first_name',
  LastName = 'Last_name'
}

const RegisterForm = () => {
  const {
    state: { register, errors },
    validate,
    setFieldValue,
    validateForm,
  } = useFormContext<AuthenticationFormName, AuthenticationFormField>();

  const validateFieldValue = useCallback(
    (fieldName: keyof AuthenticationFormField) => ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      validate(AuthenticationForms.register)(fieldName)(value || register[fieldName]),
    [validate, register],
  );
  const handleFieldChange = useCallback(
    (fieldName: keyof AuthenticationFormField) => ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setFieldValue(AuthenticationForms.register)(fieldName)(value),
    [setFieldValue],
  );

  const onRegister = useCallback(() => {
    if (validateForm(AuthenticationForms.register, register)) {
      //  Send Register Request
    }
  }, [validateForm, register]);

  return (
    <>
      <Input
        onBlur={validateFieldValue(FormField.Email)}
        onChange={handleFieldChange(FormField.Email)}
        value={register.email}
        error={errors[FormField.Email]}
        name={FormField.Email}
        label={'Email Address'}
        placeholder={'Enter your email address...'}
      />
      <Input
        onBlur={validateFieldValue(FormField.Password)}
        onChange={handleFieldChange(FormField.Password)}
        type={FormField.Password}
        value={login.password}
        error={errors[FormField.Password]}
        name={FormField.Password}
        label={'Password'}
        placeholder={'Enter your password...'}
      />

      <Input
        onBlur={validateFieldValue(FormField.FirstName)}
        onChange={handleFieldChange(FormField.FirstName)}
        value={register.first_name}
        error={errors[FormField.FirstName]}
        name={FormField.FirstName}
        label={'First Name'}
        placeholder={'Enter your first name...'}
      />

      <Input
        onBlur={validateFieldValue(FormField.LastName)}
        onChange={handleFieldChange(FormField.LastName)}
        value={register.email}
        error={errors[FormField.LastName]}
        name={FormField.LastName}
        label={'Last Name'}
        placeholder={'Enter your last name...'}
      />
      <Button variant={'primary'} onClick={onRegister}>
        Login to your Account
      </Button>
    </>
  );
};

const Register = () => {
  return (
    <FormContextProvider initialState={authenticationState} validationSchema={authValidation}>
      <RegisterForm />
    </FormContextProvider>
  );
};

export default Register;
```



## License

MIT © [rasha08](https://github.com/rasha08)

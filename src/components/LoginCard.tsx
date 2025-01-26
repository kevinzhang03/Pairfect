'use client';

import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import ButtonLink from './ButtonLink';
import { login, signup } from '@/utils/actions';

interface LoginFormData {
  email: string;
  password: string;
}

const SHOW_SUCCESS = false;

function LoginCard() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [isLogin, setIsLogin] = useState<boolean>(true);

  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const result = isLogin ? await login(formData) : await signup(formData);

    setLoading(false);

    if (!result.success) {
      setError(result.error);
      return;
    } else {
      setSuccess(true);
    }
  };

  // const handleLogout = async () => {
  //   setLoading(true);
  //   setError(null);
  //   setSuccess(false);

  //   await logout();

  //   setLoading(false);
  // };

  const swapLogin = () => {
    setIsLogin(!isLogin);
  };

  const loginMessage = () => {
    return isLogin ? "Don't have an account yet?" : 'Already have an account?';
  };

  const checkConfirmPassword = () => {
    return confirmPassword !== formData.password;
  };

  const disableButton = () => {
    const fieldsEmpty = formData.email === '' || formData.password === '';
    return loading || (checkConfirmPassword() && !isLogin) || fieldsEmpty;
  };

  return (
    <div className="drop-shadown-xl flex w-full flex-col space-y-8 rounded-3xl px-8 py-24">
      <div>
        <h1 className="font-800 text-left font-bold">
          {isLogin ? 'Log in' : 'Sign up'}
        </h1>
        <h4 className="text-md font-sans font-medium">
          Welcome to{' '}
          <span className="font-semibold italic">Pairfect Match</span>
        </h4>
        {/* <div className="mt-4 flex flex-col space-y-2 text-sm font-medium">
          <p>good morning queens. sign in to get to the home page</p>
          <p>to delete this, go to src/components/LoginCard.tsx, lines 85-88</p>
        </div> */}
      </div>
      <div className="flex flex-col space-y-4">
        <Input
          name="email"
          placeholder="Email"
          icon="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          icon="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {!isLogin && (
          <Input
            name="confirm_password"
            type="password"
            placeholder="Confirm password"
            icon="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        {error && <p className="text-sm font-medium text-blush-700">{error}</p>}
        {success && SHOW_SUCCESS && (
          <p className="text-sm font-medium text-leaf-500">SUCCESS!!</p>
        )}
      </div>
      <div className="flex flex-col items-center space-y-4">
        <Button onClick={handleSubmit} disabled={disableButton()}>
          {isLogin ? 'Log in' : 'Sign up'}
        </Button>
        {/* <Button onClick={handleLogout} disabled={loading}>
          Sign out
        </Button> */}
        <p className="text-sm font-medium">
          {loginMessage()}{' '}
          <ButtonLink onClick={swapLogin}>
            {!isLogin ? 'Log in' : 'Sign up'}
          </ButtonLink>
        </p>
      </div>
    </div>
  );
}

export default LoginCard;

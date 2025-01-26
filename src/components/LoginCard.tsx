import React from 'react';
import Input from './Input';
import Button from './Button';
import ButtonLink from './ButtonLink';

function LoginCard() {
  return (
    <div className="bg-cream drop-shadown-xl flex w-full flex-col space-y-8 rounded-3xl px-8 py-24">
      <div>
        <h1 className="font-800 text-left font-bold">Log in</h1>
        <h4 className="text-md font-sans font-medium italic">
          Welcome to Pairfect Match
        </h4>
      </div>
      <div className="flex flex-col space-y-4">
        <Input placeholder="Email" icon="email" />
        <Input type="password" placeholder="Password" icon="password" />
      </div>
      <div className="flex flex-col items-center space-y-4">
        <Button>Log in</Button>
        <p className="text-sm font-medium">
          Don&apos;t have an account yet? <ButtonLink>Sign up</ButtonLink>
        </p>
      </div>
    </div>
  );
}

export default LoginCard;

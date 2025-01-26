import React from 'react';

const errorMessage = 'Something went wrong :(';

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-cream">{errorMessage}</h1>
    </div>
  );
}

export default ErrorPage;

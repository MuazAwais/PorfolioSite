import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-900 text-white text-center p-4">
      <h1 className="text-6xl font-bold mb-4 text-sky-400">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-zinc-400 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <a href="/" className="btn btn-primary">
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;

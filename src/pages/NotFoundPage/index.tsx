import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section>
      <div className="container flex flex-auto flex-col items-center justify-center">
        <h1 className="font-sans text-[128px]">404</h1>
        <h2 className="text-center font-sans text-3xl font-bold">
          Oops! That page can’t be found.
        </h2>
        <p className="w-1/2 pt-6 pb-10 text-center">
          Unfortunately, this page does not exist. We apologise and give a 15% discount on any
          product.
        </p>
        <Link
          to={'/'}
          className="inline-block self-center bg-accent py-4 px-8 text-sm font-light uppercase text-white md:px-10"
        >
          Back to Shopping
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;

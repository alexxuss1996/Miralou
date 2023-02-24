import React from 'react';
type NewsItems = {
  children: React.ReactNode;
};
const NewsArticles = ({ children }: NewsItems) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 md:m-auto md:flex-row">
      {children}
    </div>
  );
};

export default NewsArticles;

import React from 'react';
import { format, parse } from 'date-fns';
type NewsItem = {
  description: string;
  srcImg: string | undefined;
  srcSet?: string | undefined;
  articleDate: string;
};

const NewsItem = ({ description, srcImg, srcSet, articleDate }: NewsItem) => {
  return (
    <article className="group/news relative flex w-full flex-col px-2 md:px-0 lg:w-auto">
      <img src={srcImg} srcSet={srcSet} alt={description} className="max-h-full max-w-full" />
      <span className="bg-transition invisible absolute top-5 left-0 z-10 inline-block h-7 bg-primary py-1 px-5 text-center text-base  font-light text-white opacity-0 group-hover/news:visible group-hover/news:opacity-100">
        {format(parse(articleDate, 'dd-MM-yyyy', new Date()), 'MMMM dd, yyyy')}
      </span>
      <h3 className="bg-transition mt-2 inline-block cursor-pointer self-start justify-self-start border-b-2 border-[transparent] text-center text-xl font-normal group-hover/news:border-accent">
        Lorem ipsum dolor sit.
      </h3>
    </article>
  );
};

export default NewsItem;

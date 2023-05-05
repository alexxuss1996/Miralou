import NewsArticles from '@/components/features/NewsArticles';
import NewsItem from '@/components/features/NewsItem';
import SectionHeader from '@/components/features/SectionHeader';

import News1img from '@/assets/images/news/news-1.jpg';
import News1img2x from '@/assets/images/news/news-1-2x.jpg';
import News2img from '@/assets/images/news/news-2.jpg';
import News2img2x from '@/assets/images/news/news-2-2x.jpg';
import News3img from '@/assets/images/news/news-3.jpg';
import News3img2x from '@/assets/images/news/news-3-2x.jpg';

const News = () => {
  return (
    <section className="bg-[#F8F7F3] py-10 md:pb-36 lg:pt-40 lg:pb-56">
      <div className="container">
        <SectionHeader
          heading="Latest News"
          paragraphText="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien."
        />
        <NewsArticles>
          <NewsItem
            description="Lorem ipsum dolor sit."
            articleDate="11-06-2022"
            srcImg={News1img}
            srcSet={`${News1img} 1x, ${News1img2x} 2x`}
          />
          <NewsItem
            description="Lorem ipsum dolor sit."
            articleDate="04-04-2022"
            srcImg={News2img}
            srcSet={`${News2img} 1x, ${News2img2x} 2x`}
          />
          <NewsItem
            description="Lorem ipsum dolor sit."
            articleDate="03-08-2022"
            srcImg={News3img}
            srcSet={`${News3img} 1x, ${News3img2x} 2x`}
          />
        </NewsArticles>
      </div>
    </section>
  );
};

export default News;

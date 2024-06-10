
import React from 'react';
import GoogleAd from './Adsense';
import Adsense from './Adsense';

const articles = [
  { id: 1, title: 'The Future of Mobile Technology', summary: '', imageUrl: 'https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2' },
  { id: 2, title: 'Mobile Apps: The New Frontier', summary: '', imageUrl: 'https://plus.unsplash.com/premium_photo-1667055670870-5c9daa16a9a1' },
  { id: 3, title: 'The Impact of AI on Mobile Technology', summary: '', imageUrl: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42' },
  { id: 4, title: 'The Evolution of Wearable Technology', summary: '', imageUrl: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48' },
  { id: 5, title: 'Mobile Gaming for Education', summary: '', imageUrl: 'https://images.unsplash.com/photo-1620283085439-39620a1e21c4' },
  { id: 6, title: ' Emerging Technologies', summary: '', imageUrl: 'https://plus.unsplash.com/premium_photo-1684751595304-d8ae260ac98a' },
];

const ArticleList = () => {
  const isTabletView = () => {
    return window.innerWidth >= 768 && window.innerWidth < 1024; // Assuming tablet width range
  };

  const isLaptopView = () => {
    return window.innerWidth >= 1024; // Assuming laptop width range
  };
  return (
    <div className="p-4 flex flex-wrap justify-between mx-2 ">
      {articles.map((article) => (
        <div key={article.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="article bg-white rounded-lg shadow-lg p-4 mb-4">
            <img src={article.imageUrl} alt={article.title} className="article-image mb-4 w-full h-auto" />
            <div className="article-content">
              <h2 className="article-title text-xl font-bold mb-2">{article.title}</h2>
              <p className="article-summary mb-2">{article.summary}</p>
              <div className='flex justify-evenly flex-wrap'>
                <Adsense client="ca-pub-7832822790443742" slot="5" width={320} height={480} />
                <Adsense client="ca-pub-7832822790443742" slot="6" width={336} height={280} />
                {isTabletView() && (
                  <>
                    <Adsense client="ca-pub-7832822790443742" slot="7" width={728} height={90} />
                    <Adsense client="ca-pub-7832822790443742" slot="8" width={768} height={90} />
                  </>
                )}
                {isLaptopView() && (
                  <>
                    <Adsense client="ca-pub-7832822790443742" slot="9" width={1024} height={90} />
                    <Adsense client="ca-pub-7832822790443742" slot="10" width={1200} height={90} />
                  </>
                )}
              </div>
              {/* If there's content, display it */}
              {article.content && <p className="article-text mb-4">{article.content}</p>}
              <a href={`/article/${article.id}`} className="article-link text-blue-500 hover:underline">Read more</a>
            </div>
          </div>
          {/* Set fixed size for images */}
          <style jsx>{`
            .article-image {
              width: 100%; /* Ensure image takes full width of its container */
              height: 200px; /* Set a fixed height for the image */
              object-fit: cover; /* Maintain aspect ratio and crop image if necessary */
            }
          `}</style>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;

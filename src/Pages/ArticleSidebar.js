import React from 'react';
import Adsense from './Adsense';

const ArticleSidebar = () => {
  return (
    <div className="w-full lg:w-[300px] p-4">
      <div className="bg-white w-full lg:w-[300px] rounded-lg shadow-lg p-4">
        <div className="flex flex-col items-center space-y-4">
          <p>Ad</p>
          <Adsense client="ca-pub-7832822790443742" slot="5" width={320} height={480} />
          <Adsense client="ca-pub-7832822790443742" slot="6" width={336} height={280} />
        </div>
      </div>
    </div>
  );
};

export default ArticleSidebar;

import React from 'react';
import ContentLoader from 'react-content-loader';

export const WishlistLoader: React.FC = (props) => (
  <ContentLoader
    speed={2}
    width={700}
    height={100}
    viewBox="0 0 700 100"
    backgroundColor="#f4f4f4"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="8" y="8" rx="0" ry="0" width="84" height="84" />
    <rect x="65" y="53" rx="0" ry="0" width="19" height="26" />
    <rect x="114" y="28" rx="4" ry="4" width="200" height="18" />
    <rect x="114" y="55" rx="4" ry="4" width="70" height="18" />
  </ContentLoader>
);

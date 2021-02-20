import React from 'react';
import ContentLoader from 'react-content-loader';

interface Props {
  render: number;
}

export const PanelLoader: React.FC<Props> = ({ render, ...props }) => {
  const container = [];

  for (let i = 0; i < render; i++) {
    container.push(<Loader key={i} {...props} />);
  }

  return <>{container}</>;
};

const Loader: React.FC = (props) => (
  <ContentLoader
    speed={2}
    width={250}
    height={400}
    viewBox="0 0 250 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    uniqueKey="product-panel"
    style={{
      justifySelf: 'center',
    }}
    {...props}
  >
    <rect x="32" y="32" rx="0" ry="0" width="200" height="200" />
    <rect x="32" y="250" rx="0" ry="0" width="200" height="20" />
    <rect x="32" y="280" rx="0" ry="0" width="200" height="20" />
    <rect x="32" y="310" rx="0" ry="0" width="200" height="20" />
    <rect x="32" y="340" rx="0" ry="0" width="200" height="40" />
  </ContentLoader>
);

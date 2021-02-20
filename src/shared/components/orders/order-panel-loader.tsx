import React from 'react';
import ContentLoader from 'react-content-loader';

interface Props {
  render: number;
}

export const OrderPanelLoader: React.FC<Props> = ({ render, ...props }) => {
  const container = [];

  for (let i = 0; i < render; i++) {
    container.push(<Loader key={i} {...props} />);
  }

  return <>{container}</>;
};

const Loader: React.FC = (props) => (
  <ContentLoader
    speed={2}
    width="100%"
    height={200}
    viewBox="0 0 1000 200"
    backgroundColor="#f4f4f4"
    foregroundColor="#ecebeb"
    uniqueKey="order-panel"
    style={{ minHeight: 200, borderRadius: 4 }}
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
  </ContentLoader>
);

import ContentLoader from 'react-content-loader';
import { Box, BoxProps, Image, ImageProps } from 'rebass';

interface Props extends ImageProps {
  src: string | undefined;
  loading?: boolean;
}

const BannerLoader: React.FC<BoxProps> = (props) => (
  <Box {...props}>
    <ContentLoader
      speed={2}
      width={250}
      height={250}
      viewBox="0 0 250 250"
      backgroundColor="#f4f4f4"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="250" height="250" />
    </ContentLoader>
  </Box>
);

export const BannerAd: React.FC<Props> = ({ loading = false, ...props }) => {
  const styles = {
    ...props.sx,
    cursor: 'pointer',
  };

  return loading ? <BannerLoader {...props} /> : <Image {...props} sx={styles} />;
};

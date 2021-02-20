import { Box, BoxProps } from 'rebass';

interface Props extends BoxProps {
  content: string;
}

export const ContentContainer: React.FC<Props> = ({ content = '', ...props }) => {
  const styles = {
    ...props.sx,
    fontSize: [2, 2, 2],
    lineHeight: 1.8,
  };

  return <Box sx={styles} dangerouslySetInnerHTML={{ __html: content }}></Box>;
};

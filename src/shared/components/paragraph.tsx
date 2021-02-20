import { Text } from 'rebass';

export const Paragraph: React.FC = ({ children }) => {
  const styles = {
    fontSize: [2],
    lineHeight: [1.8],
    mb: [2, 2, 3],
    textAlign: 'justify',
  };

  return <Text sx={styles}>{children}</Text>;
};

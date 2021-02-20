import Link from 'next/link';
import { Box, Flex, Text } from 'rebass';

interface Props {
  href?: string;
  icon: React.FC<any>;
  subtitle?: string;
}

export const PanelLink: React.FC<Props> = ({ href = '', icon, subtitle = '', children }) => {
  const IconToRender = icon;

  return (
    <Link href={href}>
      <Flex
        alignItems="center"
        sx={{
          p: 3,
          border: 'standard',
          cursor: 'pointer',
          userSelect: 'none',
          transition: '0.2s all',
          ':hover': {
            backgroundColor: 'grey',
            borderColor: 'brandOne.0',
          },
        }}
      >
        <IconToRender size={60} />

        <Box ml={3}>
          <Text mb={2} fontWeight="bold">
            {children}
          </Text>
          <Text color="contentGrey">{subtitle}</Text>
        </Box>
      </Flex>
    </Link>
  );
};

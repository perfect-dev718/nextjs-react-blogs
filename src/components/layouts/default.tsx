import { Footer } from 'components/ui/footer/footer';
import { MainHeader } from 'components/ui/header/main-header';
import { Box, Flex } from 'rebass';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <MainHeader />

      <Flex mb={4} flexDirection="column" sx={{ flex: '1 0 auto' }} alignItems="center">
        <Flex flexDirection="column" sx={{ width: '100%' }} alignItems="center">
          <Box flex="1 0 100%" width="100%">
            {children}
          </Box>
        </Flex>
      </Flex>

      <Footer />
    </>
  );
};

export default DefaultLayout;

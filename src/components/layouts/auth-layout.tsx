import { Logo } from 'components/ui/logo';
import React from 'react';
import { Box, Flex, Heading, Image, Link, Text } from 'rebass';
import { StatusMessage, StatusType } from 'shared';

interface Props {
  error?: string;
  hideMobileWelcomeText?: boolean;
}

export const AuthLayout: React.FC<Props> = ({ error, children, hideMobileWelcomeText }) => {
  const LoginPageStyles = {
    flexDirection: ['column', null, null, 'row'],
    width: '100vw',
    minHeight: '100vh',
    overflow: ['visible', null, null, 'hidden'],
  };

  const AsideContainer = {
    position: 'relative',
    background: 'url(/img/corner-triangles.svg) bottom left -5px no-repeat',
    backgroundColor: 'brandOne.0',
    backgroundSize: ['0px', null, null, '70% auto'],
    flexGrow: 0,
    flexBasis: ['auto', null, null, '48vw'],
    px: [4, 4, 6],
    color: 'white',
  };

  const MobileLogoStyle = {
    display: ['flex', null, null, 'none'],
    width: '203px',
    mx: 'auto',
    mt: [4, 6],
    svg: {
      height: 'auto',
    },
    color: 'white',
  };

  const largeTextBox = {
    mt: [3, null, null, '154px'],
    display: hideMobileWelcomeText ? ['none', null, null, 'block'] : undefined,
  };

  const LargeBold = {
    fontSize: [4, 4, 4, 6],
    lineHeight: 1.5,
    textAlign: ['left'],
  };

  const LargeNormal = {
    fontSize: [4, 4, 4, 6],
    fontWeight: 300,
    mb: [4, '52px'],
    textAlign: ['left'],
  };

  const ContentContainerStyles = {
    background: ['url(/img/corner-triangles.svg) bottom left -5px no-repeat', null, null, 'none'],
    backgroundSize: '70% auto',
    backgroundColor: ['brandOne.0', null, null, 'white'],
    px: [4, 4, 5, 6],
    pb: [6, 6, 6, 6],
    py: [0, null, null, 5],
    justifyContent: ['flex-start', 'flex-start', 'flex-start', 'center'],
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    flexBasis: ['52vw'],
  };

  const boldLink = {
    textDecoration: 'none',
  };

  const BadgeStyle = {
    display: ['none', null, null, 'inline-block'],
    position: 'absolute',
    bottom: '32px',
    right: '30px',
  };

  const LogoStyle = {
    display: ['none', null, null, 'flex'],
    width: '184px',
    height: '64px',
    margin: '0 auto',
    mb: 4,
    svg: {
      height: 'auto',
    },
    color: 'brandOne.0',
  };

  const formBottomTextStyle = {
    mt: [0, 4],
    mb: ['160px', null, null, 0],
    textAlign: 'center',
    fontSize: 2,
    color: ['brandThree.0', null, null, 'brandTwo.0'],
    lineHeight: [1.8, null, null, 1.2],
  };

  const HeadingBottomStyle = {
    fontSize: 2,
    mb: [0, 0, 3],
    color: ['white', null, null, 'primary'],
    textTransform: 'none',
  };

  return (
    <Flex sx={LoginPageStyles}>
      <Box sx={AsideContainer}>
        <Box sx={MobileLogoStyle}>
          <Logo />
        </Box>

        <Box sx={largeTextBox}>
          <Heading sx={LargeBold}>WELCOME TO</Heading>
          <Heading sx={LargeNormal}>ADMIRAL CONNECT</Heading>
          <Text mb={3}>This site is for Admiral Taverns licensees only.</Text>
          <Text>
            If you are interested in running your own pub, please follow this link{' '}
            <Link href="https://www.admiraltaverns.co.uk" target="_blank" sx={boldLink}>
              admiraltaverns.co.uk
            </Link>
          </Text>
        </Box>

        <Image src="/img/badges.png" alt="badges" sx={BadgeStyle} />
      </Box>

      <Flex sx={ContentContainerStyles}>
        <Flex flexDirection="column" alignItems="center">
          <Box sx={LogoStyle}>
            <Logo />
          </Box>
        </Flex>

        {error && (
          <StatusMessage type={StatusType.ERROR} mb={4}>
            {error}
          </StatusMessage>
        )}

        {children}

        <Box sx={formBottomTextStyle}>
          <Heading sx={HeadingBottomStyle}>Need to get in touch?</Heading>
          <Text color="brandThree.12">
            Email us at{' '}
            <Link href="mailto:pubsupport@admiraltaverns.co.uk">
              pubsupport@admiraltaverns.co.uk
            </Link>
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

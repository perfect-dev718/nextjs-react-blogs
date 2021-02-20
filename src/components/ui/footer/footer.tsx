import MdMail from '@meronex/icons/ios/MdMail';
import { Box, Flex, Link, Text, Image } from 'rebass';
import NextLink from 'next/link';

export const Footer = () => {
  return (
    <Box as="footer">
      <Flex
        sx={{
          backgroundColor: 'brandThree.11',
          color: 'brandTwo.0',
          height: 85,
          fontSize: 18,
          px: [2, 2, 4],
        }}
        alignItems="center"
        justifyContent={['space-around', 'space-around', 'center']}
      >
        <Flex mr={[2, 2, 4]} alignItems="center">
          <MdMail size={26} />

          <Text ml={2} as="a" href="mailto:pubsupport@admiraltaverns.co.uk" target="_blank">
            Email us
          </Text>

          <Text display={['none', 'none', 'block']}>
            &nbsp;at:&nbsp;
            <Link
              href="mailto:pubsupport@admiraltaverns.co.uk"
              target="_blank"
              sx={{ textDecoration: 'underline' }}
            >
              pubsupport@admiraltaverns.co.uk
            </Link>
          </Text>
        </Flex>
      </Flex>
      <Box sx={{ textAlign: 'center' }}>
        <Image src="/img/footer-1.png" />
        <Image src="/img/footer-2.png" />
        <Image src="/img/footer-3.png" />
      </Box>
      <Flex
        sx={{
          pb: 3,
          borderBottom: 'standard',
        }}
        alignItems={['center']}
        justifyContent="center"
      >
        <Text mr={4} pb={[2, 2, 0]}>
          Privacy Policy
        </Text>
        <NextLink href="/[...pathname]" as="/cookie-policy">
          <a>
            <Text mr={4} pb={[2, 2, 0]}>
              Cookie Policy
            </Text>
          </a>
        </NextLink>
        <Text mr={4} pb={[2, 2, 0]}>
          Terms &amp; Conditions
        </Text>
      </Flex>
      <Box sx={{ textAlign: 'center', py: 3, color: 'brandTwo.0' }}>
        <Text>Copyright © 2020 Admiral Taverns</Text>
        <Text sx={{ fontSize: 1, mt: 2 }}>Powered by StarStock</Text>
      </Box>
    </Box>
  );
};

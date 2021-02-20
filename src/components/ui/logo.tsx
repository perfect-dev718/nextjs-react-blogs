import React from 'react';
import { Box, BoxProps } from 'rebass';
import AdmiralLogo from '../../assets/images/admiral-taverns.svg';

interface Props extends BoxProps {}

export const Logo: React.FC<Props> = (props) => {
  return (
    <Box {...props}>
      <AdmiralLogo width="100%" height="100%" />
    </Box>
  );
};

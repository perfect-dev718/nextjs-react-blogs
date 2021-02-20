// @ts-ignore
import FiLoader from '@meronex/icons/fi/FiLoader';
import React from 'react';
import { Box, Flex } from 'rebass';

interface Props {
  size?: number;
  style?: any;
}

export const LoadingSpinner: React.FC<Props> = ({ size = 40, style = {} }) => {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        display: 'inline-block',
        animation: 'spin 2s linear infinite',
        ...style,
      }}
    >
      <Flex alignItems="center" sx={{ color: 'greyFont' }}>
        <FiLoader size={size} />
      </Flex>
    </Box>
  );
};

import React, { useEffect, useRef, useState } from 'react';
import { Box, BoxProps } from 'rebass';

interface Props extends BoxProps {
  isOpen: boolean;
}

export const Expandable: React.FC<Props> = ({ children, isOpen, ...props }) => {
  const ref = useRef<HTMLDivElement>();
  const [maxHeight, setMaxHeight] = useState(100);

  useEffect(() => setMaxHeight(ref.current.clientHeight), [ref]);

  return (
    <Box
      sx={{
        position: 'relative',
        maxHeight: isOpen ? maxHeight : 0,
        transition: 'max-height 0.25s',
        overflow: 'hidden',
      }}
    >
      <Box {...props} ref={ref}>
        {children}
      </Box>
    </Box>
  );
};

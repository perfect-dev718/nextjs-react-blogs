import { useEffect, useRef, useState } from 'react';
import { Box, Flex, Heading } from 'rebass';

interface Props {
  id?: string;
}

export const FullHeading: React.FC<Props> = ({ id, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(20);

  useEffect(() => {
    const height = (ref.current?.clientHeight || 0) / 2;
    setOffset(height - 2 || 20);
  }, []);

  return (
    <Box my={[2, 4]} ref={ref} sx={{ position: 'relative' }}>
      <hr style={{ position: 'absolute', top: offset, zIndex: 0, width: '100%' }} />
      <Flex alignItems="center" justifyContent="center">
        <Heading
          color="heading"
          fontSize={[4]}
          textAlign="center"
          id={id}
          sx={{
            display: 'inline-block',
            borderLeft: '#fff solid 25px',
            borderRight: '#fff solid 25px',
            backgroundColor: '#fff',
            textTransform: 'uppercase',
            zIndex: 0,
          }}
        >
          {children}
        </Heading>
      </Flex>
    </Box>
  );
};

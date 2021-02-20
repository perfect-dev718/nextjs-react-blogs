import { format } from 'date-fns';
import dynamic from 'next/dynamic';
import { Box, Flex, FlexProps, Text } from 'rebass';

// We dynamically import this only on the client side to prevent rendering
// mismatching. This is client side only really anyways.
const Timer = dynamic(() => import('./timer/timer').then((mod) => mod.Timer), {
  ssr: false,
});

interface Props extends FlexProps {
  expiry: Date;
}

export const DeliveryTimer: React.FC<Props> = ({ expiry, ...props }) => {
  return (
    <Box alignItems="center" {...props}>
      <Flex flexDirection="column" justifyContent="center" fontSize={14} sx={{ mr: 4 }}>
        <Text textAlign="right">Time until delivery cut off for</Text>
        <Text fontWeight="bold" textAlign="right">
          {format(expiry, 'EEEE do MMMM')}
        </Text>
      </Flex>

      <Box sx={{ fontSize: 0 }}>
        <Timer expiry={expiry} size={28} />
      </Box>
    </Box>
  );
};

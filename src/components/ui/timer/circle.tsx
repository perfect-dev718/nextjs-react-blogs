import { Box, Flex, FlexProps, Text } from 'rebass';

interface Props extends FlexProps {
  size?: number;
  label: string;
  fraction: string;
}

export const Circle: React.FC<Props> = ({ size = 40, label, fraction, children, ...props }) => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center" {...props}>
      <Box sx={{ position: 'relative', width: size, height: size }}>
        <svg
          style={{ transform: 'scaleX(-1)' }}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g style={{ fill: 'none', stroke: 'none' }}>
            <circle style={{ strokeWidth: 7, stroke: '#c2d92b' }} cx="50" cy="50" r="45" />
            <path
              style={{
                strokeWidth: 7,
                strokeLinecap: 'round',
                transform: 'rotate(90deg)',
                transformOrigin: 'center',
                transition: parseInt(fraction) < 277 ? '1s linear all' : 'none',
                stroke: 'currentcolor',
                strokeDasharray: `${fraction} 283`,
              }}
              d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
              "
            ></path>
          </g>
        </svg>

        <Text
          sx={{
            position: 'absolute',
            width: size,
            height: size,
            top: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {children}
        </Text>
      </Box>

      <Text fontSize={12}>{label}</Text>
    </Flex>
  );
};

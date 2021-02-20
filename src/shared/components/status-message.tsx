import { Box, FlexProps, Text } from 'rebass';

export enum StatusType {
  ERROR = 'error',
  SUCCESS = 'success',
  INFO = 'info',
}

interface Props extends FlexProps {
  type: StatusType;
  title?: string;
}

const getColors = (type: StatusType): any[] => {
  switch (type) {
    case StatusType.ERROR:
      return ['error'];
    case StatusType.SUCCESS:
      return ['brandThree.11'];
    case StatusType.INFO:
      return ['success'];
  }
};

export const StatusMessage: React.FC<Props> = ({ type, title, children, ...props }) => {
  const [backgroundColor] = getColors(type);

  return (
    <Box
      {...props}
      sx={{
        backgroundColor,
        color: type === StatusType.ERROR ? 'white' : 'initial',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 3,
        ...props.sx,
      }}
    >
      {title && <Text sx={{ color: 'ourBlack', fontWeight: 700, mb: 2 }}>{title}</Text>}
      <Text lineHeight="standard">{children}</Text>
    </Box>
  );
};

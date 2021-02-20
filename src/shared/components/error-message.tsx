import { FiAlertCircle } from 'react-icons/fi';
import { Flex, FlexProps, Text } from 'rebass';

export const ErrorMessage: React.FC<FlexProps> = ({ children, ...props }) => {
  return (
    <Flex
      {...props}
      alignItems="center"
      sx={{ backgroundColor: 'error', p: 3, color: 'white', ...props.sx }}
    >
      <FiAlertCircle size={32} style={{ marginRight: 16 }} />

      <Text lineHeight="body">{children}</Text>
    </Flex>
  );
};

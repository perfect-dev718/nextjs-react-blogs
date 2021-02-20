import { Input, Label } from '@rebass/forms';
import { TextUpdate } from 'shared/models';
import { Text, Flex, Box, BoxProps } from 'rebass';

interface Props extends BoxProps {
  id: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  onUpdate?(e: TextUpdate): void;
  label?: string;
  invalid?: boolean;
  errorMessage?: string;
  helperMessage?: string;
  disabled?: boolean;
  PreIcon?: any;
  PostIcon?: any;
  sx?: any;
}

export const TextField: React.FC<Props> = ({
  id,
  type = 'text',
  placeholder = '',
  defaultValue = '',
  invalid = false,
  errorMessage = '',
  helperMessage = '',
  onUpdate,
  label = '',
  disabled = false,
  PreIcon,
  PostIcon,
  sx = {},
  ...props
}) => {
  return (
    <Box {...props}>
      {!!label && <Label htmlFor={id}>{label}</Label>}
      <Box
        sx={{
          position: 'relative',
        }}
      >
        {!!PreIcon && (
          <Flex
            sx={{
              position: 'absolute',
              top: 0,
              left: 5,
              width: 32,
              height: '100%',
            }}
            justifyContent="center"
            alignItems="center"
          >
            <PreIcon width={32} height={32} />
          </Flex>
        )}
        <Input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onInput={(e) =>
            onUpdate && onUpdate({ id: e.currentTarget.id, value: e.currentTarget.value })
          }
          disabled={disabled}
          sx={{
            ...(PreIcon && { pl: 9 }),
            ...(PostIcon && { pr: 9 }),
            ...sx,
          }}
        />
        {!!PostIcon && (
          <Flex
            sx={{
              position: 'absolute',
              top: 0,
              right: 5,
              width: 32,
              height: '100%',
            }}
            justifyContent="center"
            alignItems="center"
          >
            <PostIcon width={32} height={32} />
          </Flex>
        )}
      </Box>
      {invalid && errorMessage ? (
        <Text variant="helperText" color="error">
          {errorMessage}
        </Text>
      ) : (
        helperMessage && <Text variant="helperText">{helperMessage}</Text>
      )}
    </Box>
  );
};

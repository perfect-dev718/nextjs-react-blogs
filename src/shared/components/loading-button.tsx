import { Button, ButtonProps } from 'rebass';
import { LoadingSpinner } from './loading-spinner';

interface Props extends ButtonProps {
  loading: boolean;
  size?: number;
  disabled?: boolean;
  onClick?(): void;
  iconAlign?: string;
}

export const LoadingButton: React.FC<Props> = ({
  loading = false,
  disabled = false,
  onClick,
  title = '',
  variant = 'primary',
  iconAlign = 'flex-end',
  size = 18,
  children,
  ...props
}) => {
  const click = () => {
    if (onClick) {
      onClick();
    }
  };

  const { sx = {}, ...rest } = props;

  return (
    <Button
      sx={{
        display: 'flex',
        justifyContent: loading ? iconAlign : 'center',
        alignItems: 'center',
        ...sx,
      }}
      disabled={disabled}
      variant={loading ? 'loading' : variant}
      onClick={loading ? () => {} : click}
      title={loading ? 'Loading' : title}
      {...rest}
    >
      {loading ? <LoadingSpinner size={size} /> : <>{children}</>}
    </Button>
  );
};

import React, { useEffect } from 'react';
import { Box, BoxProps } from 'rebass';

interface Props extends BoxProps {
  open?: boolean;
  onBgClick?(): void;
  onClose?: () => void;
}

export const Modal: React.FC<Props> = ({
  open = false,
  onBgClick,
  onClose,
  children,
  ...props
}) => {
  if (!open) {
    return null;
  }

  const { sx = {} } = props;

  useEffect(() => {
    const onkeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };

    document.addEventListener('keydown', onkeydown);

    return () => {
      document.removeEventListener('keydown', onkeydown);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        height: '100%',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onBgClick ? onBgClick : null}
    >
      <Box
        sx={{
          width: ['95vw', '95vw', '55vw'],
          backgroundColor: 'white',
          ...sx,
        }}
        {...props}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </Box>
    </Box>
  );
};

import { Box, Button } from 'rebass';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export const CookieBanner: React.FC = () => {
  const [accepted, setAccepted] = useState(true);
  const storeKey = 'cookie-accepted';

  useEffect(() => {
    setAccepted(Boolean(localStorage.getItem(storeKey)));
  }, []);

  const onAccept = () => {
    localStorage.setItem(storeKey, 'Y');
    setAccepted(true);
  };

  if (accepted) {
    return null;
  }

  return (
    <Box
      sx={{
        px: 4,
        py: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 1280,
        margin: 'auto',
      }}
    >
      <Box sx={{ pr: 4 }}>
        We use cookies to give you the best experience. By continuing to use this site, you are
        agreeing to our
        <Link href="/[...pathname]" as="/cookie-policy">
          <a style={{ textDecoration: 'underline', fontWeight: 600 }}> policy</a>
        </Link>
      </Box>
      <Button onClick={onAccept} sx={{ flexShrink: 0 }}>
        Continue
      </Button>
    </Box>
  );
};

import Link from 'next/link';
import { useState } from 'react';
import { Box, BoxProps, Link as RLink } from 'rebass';
import { NavItem } from 'shared';
import { Menu } from './menu';
import { NavigationButton } from './navigation-button';
import { Calculator } from './calculator';

interface Props extends BoxProps {
  navigationItems: NavItem[];
}

export const Navigation: React.FC<Props> = ({ navigationItems = [], ...props }) => {
  const [open, setOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<NavItem | null>(null);

  const [showCalculator, setShowCalculator] = useState(false);

  const onItemHover = (item: NavItem) => {
    if (item.id === 'Profit Calculator') {
      setShowCalculator(true);
      return;
    }

    if (!item.subItems.length) {
      closeExpanded();
    } else {
      setOpen(true);
      setHoveredItem(item);
      clearCalculator();
    }
  };

  const closeExpanded = () => {
    setOpen(false);
    setHoveredItem(null);
    clearCalculator();
  };

  const clearCalculator = () => {
    setShowCalculator(false);
  };

  const subButtonStyles = {
    display: 'block',
    cursor: 'pointer',
    textDecoration: 'none',
    ':hover': {
      color: 'brandTwo.0',
    },
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: 48,
        backgroundColor: 'brandTwo.0',
        color: 'navigation',
        width: '100%',
        zIndex: 5,
        userSelect: 'none',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 48,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0, 0, 0, 0.6)',
          zIndex: 2,
          visibility: open || showCalculator ? 'visible' : 'hidden',
          opacity: open || showCalculator ? 1 : 0,
          transition: '0.4s all ease',
        }}
        onMouseOver={closeExpanded}
      />

      <Box
        variant="container"
        sx={{
          position: 'absolute',
          top: 48,
          left: [0, 0, 4, 5],
          right: [0, 0, 4, 5],
          minHeight: 200,
          fontSize: [12, 12, 14],
          background: 'white',
          transition: 'all 0.5s',
          transformOrigin: '50% 0',
          transform: `scaleY(${open ? '100%' : '0'})`,
          zIndex: 2,
          color: 'subNavigationFont',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 2,
          pt: 2,
          pb: 4,
          px: 4,
        }}
      >
        {hoveredItem?.subItems.map((x) => (
          <Box key={x.id}>
            <Link href={'/[...pathname]'} as={x.url}>
              <RLink
                sx={{
                  fontSize: [12, 12, 16],
                  mt: 3,
                  mb: 2,
                  fontWeight: 'bold',
                  ...subButtonStyles,
                }}
                onClick={closeExpanded}
              >
                {x.title}
              </RLink>
            </Link>

            {x.subItems.map((s) => (
              <Link key={s.id} href={'/[...pathname]'} as={s.url}>
                <RLink sx={{ lineHeight: 1.5, ...subButtonStyles }} onClick={closeExpanded}>
                  {s.title}
                </RLink>
              </Link>
            ))}
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 48,
          right: [0, 0, 4, 5],
          maxWidth: '100%',
          background: 'white',
          transition: 'all 0.5s',
          transformOrigin: '50% 0',
          transform: `scaleY(${showCalculator ? '100%' : '0'})`,
          zIndex: 2,
        }}
      >
        <Calculator show={showCalculator} />
      </Box>

      <Box
        variant="container"
        sx={{
          ...props.sx,
          display: ['none', 'none', 'flex'],
          background: 'navigation',
          height: '100%',
          zIndex: 5,
          fontSize: [10, 10, 12, 14],
        }}
      >
        {navigationItems.map((x) => (
          <NavigationButton
            key={x.id}
            item={x}
            onItemHover={onItemHover}
            onClick={closeExpanded}
            hovered={hoveredItem?.id === x.id}
          />
        ))}

        <NavigationButton
          item={{
            id: 'Profit Calculator',
            title: 'Profit Calculator',
            url: '',
            pathname: '',
            slug: '',
            subItems: [],
          }}
          hovered={hoveredItem?.id === 'Profit Calculator'}
          onItemHover={onItemHover}
          onClick={closeExpanded}
          sx={{ ml: 'auto' }}
        />
      </Box>

      <Box
        sx={{
          display: ['flex', 'flex', 'none'],
          color: 'navigation',
          zIndex: 5,
          height: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
        }}
      >
        <Menu navigationItems={navigationItems} initialDuration={0.8} />
      </Box>
    </Box>
  );
};

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Box, Text } from 'rebass';
import { NavItem } from 'shared';
import { NavButton } from './nav-button';

interface Props {
  initialDuration: number;
  navigationItems: NavItem[];
  disableInitialAnimation?: boolean;
}

export const Menu: React.FC<Props> = ({
  initialDuration,
  navigationItems,
  disableInitialAnimation,
}) => {
  const [open, setOpen] = useState(false);

  const openMain = () => {
    setOpen(true);
  };

  const closeAll = () => {
    setOpen(false);
  };

  const commonBgStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    height: '100vh',
    transition: '0.2s all ease',
    color: 'menuFont',
    zIndex: 90,
    fontSize: [3],
    background: 'menu',
    overflowY: 'auto',
    px: [3, 4, 5],
    pt: 3,
    pb: 6,
    ul: {
      p: 0,
      m: 0,
      listStyle: 'none',
    },
    userSelect: 'none',
  };

  const backgroundStyles = {
    ...commonBgStyles,
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: '100vw',
    zIndex: 80,
    visibility: open ? 'visible' : 'hidden',
    opacity: open ? 1 : 0,
    transition: '0.4s opacity ease',
    overflow: 'hidden',
  };

  const menuBgStyles = {
    ...commonBgStyles,
    width: ['100%', '100%', 320],
    transform: open ? ['translateX(0)'] : ['translateX(-100%)'],
  };

  const navTitle = {
    color: 'contentGrey',
    textTransform: 'uppercase',
    pb: [3],
  };

  const mobileSubItems = {
    display: ['block', 'block', 'none'],
  };

  return (
    <>
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: initialDuration }}
        style={{ zIndex: 100, x: -60, opacity: 0 }}
        initial={!disableInitialAnimation}
      >
        <Box sx={{ opacity: open ? [0, 0, 1] : 1 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              maxWidth: 40,
              cursor: 'pointer',
              zIndex: 90,
            }}
            onClick={open ? closeAll : openMain}
          >
            {open ? <FiX size={28} /> : <FiMenu size={28} />}
          </motion.div>
        </Box>

        <Box
          sx={{
            opacity: open ? [1, 1, 0] : 0,
            transition: open ? '0.8s opacity ease' : 'none',
            maxWidth: 40,
            cursor: 'pointer',
            zIndex: 90,
            top: 16,
            right: 40,
            color: 'menuFont',
            position: 'absolute',
          }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={closeAll}>
            <FiX size={28} />
          </motion.div>
        </Box>
      </motion.div>
      <Box sx={backgroundStyles} onClick={closeAll} />

      <Box sx={menuBgStyles}>
        <ul>
          <li>
            <Text sx={navTitle}>Shop</Text>
          </li>
          {navigationItems.map((x, idx) => (
            <Box key={idx}>
              <NavButton url={x.url} key={x.id} id={x.id} onClick={closeAll}>
                {x.title}
              </NavButton>
              <Box key={idx} sx={mobileSubItems}>
                <SubMenu items={x.subItems} subItem onSubItemClick={closeAll} />
              </Box>
            </Box>
          ))}
        </ul>
      </Box>
    </>
  );
};

interface SubMenuProps {
  items: NavItem[];
  subItem?: boolean;
  onSubItemClick?(): void;
}

const SubMenu: React.FC<SubMenuProps> = ({ items, subItem = false, onSubItemClick }) => {
  const onClick = () => {
    if (onSubItemClick) {
      onSubItemClick();
    }
  };

  return (
    <>
      {items.map((x, idx) => (
        <Box key={idx}>
          <NavButton key={x.id} id={x.id} subItem={subItem} url={x.url} onClick={onClick}>
            {x.title}
          </NavButton>
          {x.subItems && x.subItems.length > 0 && (
            <SubMenu items={x.subItems} subItem={subItem} onSubItemClick={onSubItemClick} />
          )}
        </Box>
      ))}
    </>
  );
};

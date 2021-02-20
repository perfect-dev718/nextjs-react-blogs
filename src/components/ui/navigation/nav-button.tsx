import { useTheme } from 'emotion-theming';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Text } from 'rebass';
import { admiralTheme } from 'theme/admiral';

interface Props {
  onClick?(id: string): void;
  id: string;
  subItem?: boolean;
  url?: string;
}

export const NavButton: React.FC<Props> = ({ onClick, children, id, subItem = false, url }) => {
  const theme = useTheme<typeof admiralTheme>();

  const onHover = () => {
    if (onClick) {
      onClick(id);
    }
  };

  const styles = !subItem ? { fontFamily: 'heading', fontWeight: 'bold' } : { fontSize: [2] };

  return (
    <motion.li
      onClick={onHover}
      whileHover={{ color: theme.colors.brandOne }}
      whileTap={{ scale: 0.9 }}
      style={{ paddingBottom: 24, cursor: 'pointer' }}
    >
      <Text sx={styles}>
        {url ? (
          <Link href={'/[...pathname]'} as={url}>
            <a title={children as string}>{children}</a>
          </Link>
        ) : (
          children
        )}
      </Text>
    </motion.li>
  );
};

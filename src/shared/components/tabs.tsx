import { Box } from 'rebass';
import { TabItem } from '../models/tab';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  items: TabItem[];
}

export const Tabs: React.FC<Props> = ({ items }) => {
  const router = useRouter();
  const activeIndex = items.map((o) => o.href).indexOf(router.pathname);

  return (
    <Box
      sx={{
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        color: 'greyFont',
        fontSize: [0, 1, 3],
      }}
    >
      {items.map((item, index) => {
        const active = router.pathname === item.href;
        const passed = index < activeIndex;

        return (
          <Link href={item.href} key={item.href}>
            <Box
              sx={{
                mx: [1, 2],
                px: [1, 2, 3],
                minWidth: 65,
                py: 1,
                borderBottom: 'standard',
                cursor: 'pointer',
                ':hover': { color: 'brandTwo.0' },
                display: 'flex',
                alignItems: 'center',
                ...(active ? { color: 'brandTwo.0', borderBottomColor: 'brandTwo.0' } : {}),
                ...(passed ? { color: 'brandOne.0', borderBottomColor: 'brandOne.0' } : {}),
              }}
            >
              {item.label}
            </Box>
          </Link>
        );
      })}
    </Box>
  );
};

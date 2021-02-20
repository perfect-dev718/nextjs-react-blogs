import Link from 'next/link';
import { Flex, FlexProps, Link as RLink } from 'rebass';
import { NavItem } from 'shared';
import Calculator from 'assets/icons/calculator.svg';

interface Props extends FlexProps {
  item: NavItem;
  onItemHover(item: NavItem): void;
  onClick(): void;
  hovered: boolean;
}

export const NavigationButton: React.FC<Props> = ({ item, onItemHover, onClick, sx }) => {
  let interval = 0;

  const buttonStyles = {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    px: [1, 1, 2, 3],
    color: 'brandTwoFont',
    textTransform: 'uppercase',
    userSelect: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'none',
    p: 3,
    ':hover': {
      backgroundColor: 'brandTwo.1',
    },
    fontSize: 15,
    transition: '0.2s all',
    zIndex: 2,
  };

  const onHover = () => {
    interval = setTimeout(() => onItemHover(item), 150);
  };

  const onHoverOut = () => {
    clearTimeout(interval);
  };

  const buttonContent = (
    <RLink sx={buttonStyles} onClick={onClick}>
      {item.title === 'Profit Calculator' && <Calculator style={{ marginRight: 8 }} />}
      {item.title}
    </RLink>
  );

  return (
    <Flex
      alignItems="center"
      key={item.id}
      onMouseOver={onHover}
      onMouseOut={onHoverOut}
      sx={{ ':first-child': { ml: -3 }, ...sx }}
    >
      {item.pathname ? (
        <Link href={item.pathname || '/[...pathname]'} as={item.url}>
          {buttonContent}
        </Link>
      ) : (
        buttonContent
      )}
    </Flex>
  );
};

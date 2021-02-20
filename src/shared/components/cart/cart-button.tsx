import { AppContextComponent } from 'lib/context';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useContext } from 'react';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { Box, Flex } from 'rebass';

interface Props {
  textStyles: any;
  text: any;
  iconStyles: any;
  hideText?: boolean;
  background?: string;
}

export const CartButton: React.FC<Props> = ({ text, textStyles, iconStyles, hideText }) => {
  const {
    state: { cart },
  } = useContext(AppContextComponent);

  return (
    <motion.div whileHover="hover" whileTap={{ scale: 0.9 }} style={iconStyles}>
      <Link href="/cart">
        <Flex alignItems="center" sx={{ position: 'relative' }}>
          <RiShoppingBasketLine size={24} />
          {!hideText && (
            <motion.div initial={textStyles} variants={text}>
              Basket
            </motion.div>
          )}

          {cart && cart.totalProducts ? (
            <Box
              sx={{
                position: 'absolute',
                top: '-9px',
                left: 11,
                minWidth: 24,
                fontSize: '12px',
                lineHeight: '12px',
                fontWeight: 'bold',
                background: 'highlight',
                color: 'highlight',
                borderRadius: '12px',
                textAlign: 'center',
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: 'header',
                padding: '3px 4px',
              }}
            >
              {cart.totalProducts}
            </Box>
          ) : null}
        </Flex>
      </Link>
    </motion.div>
  );
};

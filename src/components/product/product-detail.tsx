import { useState } from 'react';
import { Box, BoxProps, Flex, Text } from 'rebass';
import { Expandable, DslProduct, DslProductFeature } from 'shared';
import { FeatureBox } from './feature-box';
import ArrowDown from 'assets/icons/arrow-down.svg';

interface ExpandableTitleProps {
  toggle(): void;
  open: boolean;
}

const ExpandableTitle: React.FC<ExpandableTitleProps> = ({ toggle, open = false, children }) => (
  <Flex
    sx={{
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
      userSelect: 'none',
      px: 2,
      py: 3,
    }}
    onClick={toggle}
  >
    <Text fontSize={3} fontWeight="400" color="brandOne.0">
      {children}
    </Text>

    <Box
      sx={{
        transform: `rotate(${open ? -180 : 0}deg)`,
        transition: 'transform 0.25s',
      }}
    >
      <ArrowDown />
    </Box>
  </Flex>
);

interface Props extends BoxProps {
  product: DslProduct;
}

type ExpandedState = {
  detail: boolean;
  features: boolean;
  tasting: boolean;
};

export const ProductDetail: React.FC<Props> = ({ product, ...props }) => {
  const [expandedState, setExpandedState] = useState<ExpandedState>({
    detail: false,
    features: false,
    tasting: false,
  });

  const toggle = (field: keyof ExpandedState) => {
    setExpandedState({
      ...expandedState,
      [field]: !expandedState[field],
    });
  };

  const rowStyle = {
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: 'borderColor',
  };

  const firstRowStyle = {
    borderTopWidth: 2,
    borderTopStyle: 'solid',
    borderTopColor: 'borderColor',
  };

  return (
    <Box {...props}>
      <Box sx={{ ...rowStyle, ...firstRowStyle }}>
        <ExpandableTitle toggle={() => toggle('detail')} open={expandedState.detail}>
          Product Detail
        </ExpandableTitle>

        <Expandable isOpen={expandedState.detail} sx={{ p: 2, pb: 3 }}>
          <Text dangerouslySetInnerHTML={{ __html: product.longDescription }} />
        </Expandable>
      </Box>

      <Box sx={rowStyle}>
        <ExpandableTitle toggle={() => toggle('features')} open={expandedState.features}>
          Features
        </ExpandableTitle>

        <Expandable isOpen={expandedState.features} sx={{ p: 2, pb: 3 }}>
          <FeatureBox title="Features" features={(product.features as DslProductFeature[]) || []} />
        </Expandable>
      </Box>

      <Box sx={rowStyle}>
        <ExpandableTitle toggle={() => toggle('tasting')} open={expandedState.tasting}>
          Tasting Notes
        </ExpandableTitle>

        <Expandable isOpen={expandedState.tasting} sx={{ p: 2, pb: 3 }}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel arcu a sem efficitur
            cursus a quis velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nulla ut ex sit amet lectus tincidunt cursus. Mauris posuere
            nunc enim, eget tincidunt sapien convallis mattis.
          </Text>
        </Expandable>
      </Box>
    </Box>
  );
};

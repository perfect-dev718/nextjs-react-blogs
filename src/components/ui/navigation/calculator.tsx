import { Box, Text } from 'rebass';
import { Input } from '@rebass/forms';
import React, { useEffect, useState } from 'react';

interface Props {
  show: boolean;
}

export const Calculator: React.FC<Props> = ({ show }) => {
  const [productionCost, setProductionCost] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [grossProfit, setGrossProfit] = useState('');
  const [netSellingPrice, setNetSellingPrice] = useState('');
  const [cashMargin, setCashMargin] = useState('');

  useEffect(() => {
    if (!show) {
      setProductionCost('');
      setSellingPrice('');
      setGrossProfit('');
      setNetSellingPrice('');
      setCashMargin('');
    }
  }, [show]);

  if (!show) return null;

  const handleProductionCost = (value) => {
    setProductionCost(value);
    handleCalculator(sellingPrice, value);
  };

  const handleSellingPrice = (value) => {
    setSellingPrice(value);
    handleCalculator(value, productionCost);
  };

  const handleCalculator = (sellingPrice, productionCost) => {
    const sellingPriceFloat = parseFloat(sellingPrice || 0);
    const productionCostFloat = parseFloat(productionCost || 0);
    const netSellingPriceFloat = sellingPriceFloat / 1.2;
    setNetSellingPrice(netSellingPriceFloat.toFixed(2));
    setCashMargin((sellingPriceFloat / 1.2 - productionCostFloat).toFixed(2));
    setGrossProfit(
      (((netSellingPriceFloat - productionCostFloat) / netSellingPriceFloat) * 100).toFixed(2),
    );
  };

  const handleGrossProfit = (value) => {
    setGrossProfit(value);
    const grossProfitValue = parseFloat(value);
    const productionCostFloat = parseFloat(productionCost || '0');
    const netSellingPriceFloat = productionCostFloat / (1 - grossProfitValue / 100);
    const sellingPriceFloat = netSellingPriceFloat * 1.2;
    setNetSellingPrice(netSellingPriceFloat.toFixed(2));
    setCashMargin((sellingPriceFloat / 1.2 - productionCostFloat).toFixed(2));
    setSellingPrice(sellingPriceFloat.toFixed(2));
  };

  return (
    <Box
      sx={{
        height: 400,
        width: 400,
      }}
    >
      <Box py={3} px={4} fontSize={1} backgroundColor="brandThree.11" color="black">
        Enter the production cost, then adjust the selling price to see how much gross profit and
        cash margin that will fetch, adjust the gross profit to see how much you need to charge the
        achieve it.
      </Box>
      <Box
        py={3}
        px={4}
        backgroundColor="white"
        sx={{
          display: 'grid',
          rowGap: 3,
          columnGap: 0,
          gridTemplateColumns: '1fr 20px 100px 20px',
          alignItems: 'center',
          fontWeight: 'bold',
        }}
        fontSize={2}
        color="primary"
      >
        <Text>Production Cost</Text>
        <Box>£</Box>
        <Input
          value={productionCost}
          onChange={(e) => handleProductionCost(e.currentTarget.value)}
        />
        <Box />

        <Text>
          Selling Price
          <br />
          (Inclusive of VAT)
        </Text>
        <Box>£</Box>
        <Input value={sellingPrice} onChange={(e) => handleSellingPrice(e.currentTarget.value)} />
        <Box />

        <Text>Gross Profit</Text>
        <Box />
        <Input value={grossProfit} onChange={(e) => handleGrossProfit(e.currentTarget.value)} />
        <Text textAlign="right">%</Text>

        <Text>Net Selling Price</Text>
        <Box />
        <Input value={netSellingPrice} disabled />
        <Box />

        <Text>Cash Margin</Text>
        <Box />
        <Input value={cashMargin} disabled />
        <Box />
      </Box>

      <Box pb={4} px={4} fontSize={1} backgroundColor="white" color="black">
        This calculator is not intended for use for draught beer sales which may require adjustment
        to allow for line cleaning and/or sediment wastage.
      </Box>
    </Box>
  );
};

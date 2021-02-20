import { Box, Heading, Text } from 'rebass';
import { DeliveryDate, DeliveryDateStatus } from 'shared';
import { format, parse } from 'date-fns';
import { Currency } from '../currency';
import { useState } from 'react';

interface Props {}

export const DeliveryDatePicker: React.FC<Props> = () => {
  const [selectedDate, setSelectedDate] = useState<DeliveryDate>();

  const dates: DeliveryDate[] = [
    {
      time: '2/11/2020',
      fee: 30,
      status: DeliveryDateStatus.AVAILABLE,
    },
    {
      time: '3/11/2020',
      fee: 30,
      status: DeliveryDateStatus.UNAVAILABLE,
    },
    {
      time: '4/11/2020',
      fee: 30,
      status: DeliveryDateStatus.AVAILABLE,
    },
    {
      time: '5/11/2020',
      fee: 30,
      status: DeliveryDateStatus.AVAILABLE,
    },
    {
      time: '6/11/2020',
      fee: 30,
      status: DeliveryDateStatus.AVAILABLE,
    },
    {
      time: '7/11/2020',
      fee: 30,
      status: DeliveryDateStatus.UNAVAILABLE,
    },
    {
      time: '8/11/2020',
      fee: 30,
      status: DeliveryDateStatus.AVAILABLE,
    },
    {
      time: '9/11/2020',
      fee: 30,
      status: DeliveryDateStatus.AVAILABLE,
    },
    {
      time: '10/11/2020',
      fee: 30,
      status: DeliveryDateStatus.AVAILABLE,
    },
    {
      time: '11/11/2020',
      fee: 30,
      status: DeliveryDateStatus.AVAILABLE,
    },
  ];

  return (
    <Box>
      <Heading>Delivery</Heading>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ['1fr', 'repeat(auto-fill, 130px)', 'repeat(5, 130px)'],
          columnGap: 4,
          justifyContent: 'center',
          rowGap: [1, 4, 5],
          mt: [4, 4, 5],
        }}
      >
        {dates.map((item) => {
          const date = parse(item.time, 'dd/MM/yyyy', new Date());
          const dayOfMonth = format(date, 'd');
          const dayOfWeek = format(date, 'ccc');
          const month = format(date, 'MMMM');
          const disabled = item.status === DeliveryDateStatus.UNAVAILABLE;
          const selected = item.time === selectedDate?.time;

          return (
            <Box
              key={item.time}
              onClick={() => setSelectedDate(item)}
              sx={{
                px: 3,
                py: [3, 3, 4],
                border: 'standard',
                borderWidth: 3,
                borderRadius: 4,
                display: 'flex',
                flexDirection: ['row', 'column'],
                alignItems: 'center',
                color: disabled ? 'greyFont' : undefined,
                backgroundColor: disabled
                  ? 'inputDisabledBG'
                  : selected
                  ? 'brandThree.11'
                  : undefined,
                textTransform: 'uppercase',
                cursor: 'pointer',
                pointerEvents: disabled ? 'none' : undefined,
                transition: 'all 0.3s',
                ':hover': {
                  backgroundColor: 'brandThree.11',
                },
                fontWeight: 700,
              }}
            >
              <Box
                sx={{
                  height: 14,
                  width: 14,
                  borderRadius: '50%',
                  borderWidth: 2,
                  borderStyle: 'solid',
                  borderColor: disabled ? 'greyFont' : 'brandOne.0',
                  mb: [0, 3],
                  mr: [2, 0],
                }}
              />
              <Text>{dayOfWeek}</Text>
              <Text my={[0, 1]} mx={[2, 0]}>
                {dayOfMonth}
              </Text>
              <Text mb={[0, 3]}>{month}</Text>
              <Box sx={{ ml: ['auto', 0] }}>
                {disabled ? (
                  <Text fontSize={1}>unavalable</Text>
                ) : (
                  <Text fontSize={3} color="brandTwo.0">
                    <Currency value={item.fee} />
                  </Text>
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

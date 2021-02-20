import { intervalToDuration } from 'date-fns';
import { useEffect, useState } from 'react';
import { Flex } from 'rebass';
import { Circle } from './circle';

type Countdown = {
  days: number;
  daysFraction: string;
  hours: number;
  hoursFraction: string;
  minutes: number;
  minutesFraction: string;
  seconds: number;
  secondsFraction: string;
};

const calculateFraction = (timeLeft: number, limit: number) => {
  const rawTimeFraction = timeLeft / limit;
  const fraction = rawTimeFraction - (1 / limit) * (1 - rawTimeFraction);

  return (fraction * 283).toFixed();
};

interface Props {
  size?: number;
  expiry: Date;
}

export const Timer: React.FC<Props> = ({ size = 40, expiry }) => {
  let intervalTimer;

  const { days, hours, minutes, seconds } = intervalToDuration({
    start: new Date(),
    end: expiry,
  });

  const [countdown, setCountdown] = useState<Countdown>({
    days,
    hours,
    minutes,
    seconds,
    daysFraction: calculateFraction(days, 0),
    hoursFraction: calculateFraction(hours, 24),
    minutesFraction: calculateFraction(minutes, 60),
    secondsFraction: calculateFraction(seconds, 60),
  });

  useEffect(() => {
    intervalTimer = setInterval(() => {
      const { days, hours, minutes, seconds } = intervalToDuration({
        start: new Date(),
        end: expiry,
      });

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
        daysFraction: calculateFraction(days, 1),
        hoursFraction: calculateFraction(hours, 24),
        minutesFraction: calculateFraction(minutes, 60),
        secondsFraction: calculateFraction(seconds, 60),
      });
    }, 1000);
    return () => clearInterval(intervalTimer);
  }, [expiry]);

  return (
    <Flex alignItems="center" ml={2}>
      <Circle label="Days" size={size} fraction={countdown.daysFraction} mr={3}>
        {countdown.days}
      </Circle>
      <Circle label="Hours" size={size} fraction={countdown.hoursFraction} mr={3}>
        {countdown.hours}
      </Circle>
      <Circle label="Minutes" size={size} fraction={countdown.minutesFraction} mr={3}>
        {countdown.minutes}
      </Circle>
      <Circle label="Seconds" size={size} fraction={countdown.secondsFraction}>
        {countdown.seconds}
      </Circle>
    </Flex>
  );
};

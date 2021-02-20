import { Box, Text } from 'rebass';
import { TextField } from 'shared/components/forms/text-field';
import { forwardRef, useState, useImperativeHandle } from 'react';
import { DslCart, TextUpdate, DeliveryDate, SelectOption, DslUser } from 'shared';
import groupBy from 'lodash.groupby';
import get from 'lodash.get';
import { SelectField } from '../forms/select-field';

interface PaymentForm {
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  securityCode: string;
}

type FormError = {
  [K in keyof PaymentForm]: string;
};

interface Props {
  cart: DslCart;
  user: DslUser;
  delivery?: DeliveryDate | null;
}

export interface PaymentRefObject {
  pay: () => Promise<boolean>;
}

const PaymentC: React.ForwardRefRenderFunction<PaymentRefObject, Props> = (
  { cart, delivery, user },
  ref,
) => {
  const [form, setForm] = useState<PaymentForm>();
  const [formError, setFormError] = useState<FormError>();
  const [paymentError, setPaymentError] = useState('');

  const userBilling =
    user?.billingAddresses && user.billingAddresses.length ? user?.billingAddresses[0] : null;

  const address = {
    firstName: userBilling?.firstName,
    lastName: userBilling?.lastName,
    address: userBilling?.lineOne,
    address2: userBilling?.lineTwo,
    city: userBilling?.city,
    county: userBilling?.county,
    postcode: userBilling?.postcode,
    phone: user?.phone,
  };

  const pay = async (): Promise<boolean> => {
    setFormError(undefined);
    setPaymentError('');
    const { merchantSessionKey } = await fetch('/api/payment-key').then((response) =>
      response.json(),
    );

    let formData = form || ({} as PaymentForm);
    formData = {
      ...formData,
      cardNumber: (formData.cardNumber || '').replace(/\s/g, ''),
      expiryDate: (formData.expiryDate || '').replace(/\//g, ''),
    };

    const cardInfo = await fetch('https://pi-test.sagepay.com/api/v1/card-identifiers', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${merchantSessionKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cardDetails: formData,
      }),
    }).then((response) => response.json());

    if (cardInfo.cardIdentifier) {
      const paymentData = await fetch('/api/process-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          merchantSessionKey,
          cardIdentifier: cardInfo.cardIdentifier,
          address: address || {},
          amount: (cart.totals.total || 0) + (delivery?.fee || 0),
        }),
      }).then((response) => response.json());

      if (paymentData.statusCode === '0000') {
        return true;
      } else {
        setPaymentError(paymentData.statusDetail);
      }
    } else {
      const errors = groupBy(cardInfo.errors || [], 'property');
      setFormError({
        cardholderName: get(
          errors,
          ['cardDetails.cardholderName', 0, 'clientMessage'],
          '',
        ) as string,
        cardNumber: get(errors, ['cardDetails.cardNumber', 0, 'clientMessage'], '') as string,
        expiryDate: get(errors, ['cardDetails.expiryDate', 0, 'clientMessage'], '') as string,
        securityCode: get(errors, ['cardDetails.securityCode', 0, 'clientMessage'], '') as string,
      });
    }

    return false;
  };

  const onChange = (e: TextUpdate) => {
    const values = form || ({} as PaymentForm);
    values[e.id as keyof PaymentForm] = e.value;
    setForm(values);
  };

  useImperativeHandle(ref, () => ({
    pay,
  }));

  const ExpiryMonths: SelectOption[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((o) => ({
    label: o.toString(),
    value: o,
  }));
  const ExpiryYear: SelectOption[] = [2021, 202, 2023, 2024].map((o) => ({
    label: o.toString(),
    value: o,
  }));

  const labelStyle = {
    fontWeight: 700,
    mb: 2,
  };

  return (
    <Box sx={{ my: 2 }}>
      <form id="payment-form" style={{ display: 'none' }} onSubmit={pay} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ['repeat(3, 64px)', 'repeat(3, 64px)'],
          gap: 30,
          justifyContent: 'center',
        }}
      />
      <Box sx={{ display: 'grid', gap: 3, mt: 4 }}>
        <TextField
          label="Card Number"
          placeholder="Card number"
          id="cardNumber"
          onUpdate={onChange}
          errorMessage={formError?.cardNumber}
          invalid={!!formError?.cardNumber}
        />
        <TextField
          label="Cardholder Name"
          id="cardholderName"
          onUpdate={onChange}
          placeholder="Cardholder Name"
          errorMessage={formError?.cardholderName}
          invalid={!!formError?.cardholderName}
        />
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
          <Box>
            <Text sx={labelStyle}>Expiry Month</Text>
            <SelectField id="expiryMonth" options={ExpiryMonths} onSelectChange={() => {}} large />
          </Box>
          <Box>
            <Text sx={labelStyle}>Expiry Year</Text>
            <SelectField id="expiryYear" options={ExpiryYear} onSelectChange={() => {}} large />
          </Box>
        </Box>
        <TextField
          label="CVV"
          id="cvv"
          onUpdate={onChange}
          placeholder="CVV code"
          errorMessage={formError?.securityCode}
          invalid={!!formError?.securityCode}
        />
      </Box>
      {!!paymentError && <Text sx={{ color: 'error', my: 2 }}>{paymentError}</Text>}
    </Box>
  );
};

export const Payment = forwardRef(PaymentC);

import React from 'react';

import {
  Card,
  Button,
  PaymentWrapper,
  CardFooter,
  CardBodyImage,
  PaymentBodyWrapper,
  BtnPaymentWrapper,
  CloseButton,
  SelectAmount,
  commonStyles,
}
  from './style';

const DonationCard = (props) => {

  const {
    image,
    name,
    id,
    payments,
    handlePayment,
    closePayment,
    showPayment,
    keyOf,
    selectedAmount,
    transitPayment,
    currency,
  } = props;

  return (
    <Card key={keyOf}>
      <CardBodyImage className="card-img-top" src={image} data-holder-rendered={'true'} />
      <CardFooter>
        <span className="c-name" data-content="name" id="field-cName">{name}</span>
        <div className="btn-group">
          <Button type="button" onClick={() => transitPayment(id)} className="btn btn-sm btn-outline-secondary"> Donate </Button>
        </div>
      </CardFooter>
      <PaymentWrapper style={showPayment === id ? commonStyles.show : commonStyles.hide}>
        <PaymentBodyWrapper>
          <SelectAmount> Select the amount to donate(USD) </SelectAmount>
          {payments}
          <BtnPaymentWrapper>
            <Button className="btn btn-sm btn-outline-secondary"
              onClick={() => handlePayment(id, selectedAmount, currency)}
              type="payment">Pay
            </Button>
          </BtnPaymentWrapper>
        </PaymentBodyWrapper>
        <CloseButton onClick={() => closePayment()} />
      </PaymentWrapper>
    </Card>
  );
};
export default DonationCard;

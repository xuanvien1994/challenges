import { summaryDonations } from '../helpers';
import fetch from 'isomorphic-fetch';


export const updateTotalDonate = (data) => {
  const totalDonate = summaryDonations(data.map((item => item.amount)));
  return {
    type: 'UPDATE_TOTAL_DONATION',
    totalDonate,
  }
};

export const fetchDonationsFail = () => {
  return {
    type: 'FETCH_DONATION_FAIL',
  };
};

export const fetchDonationsSuccess = (amount) => {
  return {
    type: 'FETCH_DONATION_SUCCESS',
    amount,
  }
}

export const updateMessage = (message) => {
  return {
    type: 'UPDATE_MESSAGE',
    message,
  };
};

export const handlePay = (id, amount, currency) => {
  return dispatch => {
    const url = 'http://localhost:3001/payments'
    const headers = {
      'Content-Type': 'application/json',
    };
    fetch(url, {
      method: 'POST',
      headers,
      body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
    }).then(resp => { return resp.json();})
      .then(res => {
        dispatch(fetchDonationsSuccess(amount));
        dispatch(updateMessage(`Thank you for the donation of $ ${amount}`));
        setTimeout(function () {
          dispatch(updateMessage());
        }, 2000);
      })
      .catch(err => {
        dispatch(fetchDonationsFail(err));
      });
  };
};

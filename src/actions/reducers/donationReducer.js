// import * as actionTypes from '../actions/actionTypes';

const initialState = {
  donations: 0,
  message: '',
  loading: false,
};

const donationStart = (state, action) => {
  const data = {
    error: null,
    loading: true,
  };
  return Object.assign({}, state, {
    data,
  });
};

const updateDonation = (state, action) => {
  const data = {
    loading: false,
    donations: (parseInt(state.donations) + parseInt(action.amount)),
  };
  return Object.assign({}, state, data,
  );
};

const initTotalDonation = (state, action) => {
  const data = {
    error: null,
    loading: true,
  };
  state.donations = action.totalDonate;
  return Object.assign({}, state, data,
  );
};

const donationFail = (state, action) => {
  return Object.assign({}, state, {
    donate: state.donate + action.amount,
    message: action.message, loading: false,
  });
};

const updateMessage = (state, action) => {
  return Object.assign({}, state, {
    message: action.message, loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TOTAL_DONATION': return initTotalDonation(state, action);
    case 'FETCH_DONATION_START': return donationStart(state, action);
    case 'FETCH_DONATION_SUCCESS': return updateDonation(state, action);
    case 'FETCH_DONATION_FAIL': return donationFail(state, action);
    case 'UPDATE_MESSAGE': return updateMessage(state, action);

    default:
      return state;
  }
};

export default reducer;

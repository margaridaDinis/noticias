import React, { useReducer } from 'react';

export const CHANGE_COUNTRY = 'CHANGE_COUNTRY';
export const CHANGE_CHANNEL_URL = 'CHANGE_CHANNEL_URL';

const ChannelContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_COUNTRY:
      return { ...state, country: action.country };
    case CHANGE_CHANNEL_URL:
      return { ...state, channel: action.channel };
    default:
      return state;
  }
};

export const ChannelProvider = ({ children, initialState }) => (
  <ChannelContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </ChannelContext.Provider>
);

export default ChannelContext;

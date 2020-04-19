import React from 'react';
import NewsList from '../../components/organisms/NewsList';
import { PORTUGAL } from '../../constants/Country';
import { RSS_URL_PER_COUNTRY } from '../../constants/RssUrls';
import { ChannelProvider } from '../../context/Channel';
import ChannelModal from '../../components/organisms/ChannelModal';


const NewsScreen = () => {
  return (
    <ChannelProvider initialState={{ country: PORTUGAL, channel: RSS_URL_PER_COUNTRY[PORTUGAL][0] }}>
      <ChannelModal/>
      <NewsList/>
    </ChannelProvider>
  );
};

export default NewsScreen;

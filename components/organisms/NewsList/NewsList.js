import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, FlatList, View } from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import parseNewsDetails from '../../../helpers/newsDetails';
import { GUTTER } from '../../../constants/Layout';
import ChannelContext from '../../../context/Channel';
import ListItem from '../../../components/molecules/ListItem';
import styles from './NewsList.style';
import Separator from '../../atoms/Separator';

function NewsList() {
  const navigation = useNavigation();
  const [{ country, channel }] = useContext(ChannelContext);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const getNews = () => {
    setLoading(true);

    return fetch(channel.url)
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
        setNews(rss.items);
        setLoading(false);
      });
  };

  useEffect(() => {
    getNews();
  }, [channel]);

  if (loading) return <ActivityIndicator style={{ padding: GUTTER }} />;

  return (
    <FlatList
      data={news}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      ItemSeparatorComponent={Separator}
      refreshing={loading}
      onRefresh={getNews}
      renderItem={({ item }) => {
        const parsedItem = parseNewsDetails(item, country);

        return (
          <ListItem
            title={parsedItem.title}
            description={parsedItem.description}
            categories={parsedItem.categories}
            date={parsedItem.published}
            onPress={() => navigation.navigate('NewsDetail', { item: parsedItem })}
          />
        )
      }}
    />
  );
}

export default NewsList;

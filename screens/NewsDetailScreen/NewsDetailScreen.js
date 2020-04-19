import React, { useCallback } from 'react';
import { ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import Text from '../../components/atoms/Text';
import { Ionicons } from '@expo/vector-icons';
import { FONT_SIZE, GUTTER } from '../../constants/Layout';
import Categories from '../../components/atoms/Categories';
import Colors from '../../constants/Colors';

const NewsDetailScreen = ({ route, navigation }) => {
  const {
    title = '',
    description = '',
    categories = [],
    published,
    url,
  } = route?.params?.item;

  const openLinkInBrowser = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(
        'Algo correu mal!',
        'Não foi possível abrir esta notícia no browser...',
      );
    }
  }, [url]);

  navigation.setOptions({
    headerTitle: title,
    headerRight: () => (
      <TouchableOpacity onPress={openLinkInBrowser}>
        <Ionicons
          size={FONT_SIZE.h2}
          name="md-open"
          color={Colors.white}
          style={{ paddingRight: GUTTER }}
        />
      </TouchableOpacity>
    ),
  });

  return (
    <ScrollView style={{ padding: GUTTER }}>
      <Categories categories={categories} />
      <Text tag="h1" paddingBottom={GUTTER}>
        {title}
      </Text>
      <Text paddingBottom={GUTTER}>{description}</Text>
      <Text tag="small" color={Colors.grey.base}>
        {new Date(published).toLocaleString()}
      </Text>
    </ScrollView>
  );
};

NewsDetailScreen.propTypes = {};

export default NewsDetailScreen;

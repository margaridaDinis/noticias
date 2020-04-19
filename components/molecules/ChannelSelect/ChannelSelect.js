import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { View, SectionList } from 'react-native';
import { sections } from '../../../constants/RssUrls';
import ChannelContext, {
  CHANGE_COUNTRY,
  CHANGE_CHANNEL_URL,
} from '../../../context/Channel';
import Checkbox from '../../atoms/Checkbox';
import Text from '../../atoms/Text';
import Separator from '../../atoms/Separator';
import styles from './ChannelSelect.style';

const ChannelSelect = ({ closeModal }) => {
  const [{ country, channel }, dispatch] = useContext(ChannelContext);

  const selectChannel = (newChannel, newCountry) => {
    if (country !== newCountry) {
      dispatch({ type: CHANGE_COUNTRY, country: newCountry });
    }

    dispatch({ type: CHANGE_CHANNEL_URL, channel: newChannel });
    closeModal();
  };

  return (
    <SectionList
      sections={sections}
      keyExtractor={item => item.id}
      renderSectionHeader={({ section }) => (
        <View style={styles.section}>
          <Text style={styles.country} bold>
            {section.country}
          </Text>
          <Text style={styles.network} bold>
            {section.title}
          </Text>
        </View>
      )}
      renderItem={({ item, section }) => (
        <Checkbox
          key={item.name}
          label={item.name}
          value={item.url}
          isSelected={item.url === channel.url}
          onSelect={() => selectChannel(item, section.country)}
        />
      )}
      ItemSeparatorComponent={Separator}
    />
  );
};

ChannelSelect.propTypes = {
  closeModal: PropTypes.func,
};

export default ChannelSelect;

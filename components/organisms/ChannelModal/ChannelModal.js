import React, { useContext, useState } from 'react';
import { Modal, Text as Txt, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FONT_SIZE } from '../../../constants/Layout';
import Colors from '../../../constants/Colors';
import Text from '../../atoms/Text';
import ChannelContext from '../../../context/Channel';
import ChannelSelect from '../../molecules/ChannelSelect/ChannelSelect';
import ModalHeader from '../../molecules/ModalHeader';
import Separator from '../../atoms/Separator';
import styles from './ChannelModal.style';

const ChannelModal = () => {
  const [{ country, channel }] = useContext(ChannelContext);
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => setModalVisible(!modalVisible);

  return (
    <>
      <Modal
        presentationStyle='formSheet'
        animationType='slide'
        visible={modalVisible}
      >
        <ModalHeader title='Mudar de secção' action={toggleModal}/>
        <ChannelSelect closeModal={toggleModal}/>
      </Modal>

      <View style={styles.wrapper}>
        <Text tag='small' style={styles.title} numberOfLines={1} bold>
          {country.toUpperCase()}
          <Text tag='small' color={Colors.grey.dark} numberOfLines={1} bold>
            {' | '}{channel.name}
          </Text>
          </Text>
        <TouchableOpacity onPress={toggleModal} style={styles.button}>
          <Text tag='small' color={Colors.tintColor} bold>Mudar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ChannelModal;

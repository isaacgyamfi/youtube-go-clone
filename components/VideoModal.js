import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Modal from 'react-native-modal';
import {
  RadioButtonLabel,
  RadioButtonInput,
  RadioButton,
} from 'react-native-simple-radio-button';
import { Ionicons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

const dataRadios = [
  { key: '1', label: 'Data saver', value: 0 },
  { key: '2', label: 'Standard quality', value: 1 },
  { key: '3', label: 'High quality', value: 2 },
];

const VideoModal = ({ showModal, modalState, videoDetail }) => {
  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={modalState}
      onBackdropPress={() => showModal()}
    >
      <View
        style={{
          backgroundColor: '#fff',
        }}
      >
        <View style={styles.preview}>
          <ImageBackground
            style={styles.bgImage}
            source={{ uri: videoDetail.snippet.thumbnails.medium.url }}
          >
            <TouchableOpacity style={styles.previewBtn}>
              <Ionicons color="#fff" name="md-play" size={24} />
              <Text style={{ color: '#fff', marginLeft: 10 }}>PREVIEW</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>1035 MB available on phone</Text>
        </View>
        <View
          style={{ borderWidth: StyleSheet.hairlineWidth, borderColor: '#ddd' }}
        />
        <View>
          <View style={{ marginHorizontal: 15, marginVertical: 5 }}>
            <View>
              {dataRadios.map((obj, i) => (
                <View key={obj.key}>
                  <RadioButton
                    labelHorizontal={true}
                    key={i}
                    wrapStyle={{ margin: 10 }}
                    buttonColor="#4086F7"
                  >
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      buttonSize={10}
                      buttonOuterSize={20}
                      buttonWidth={1}
                      buttonOuterColor="gray"
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      labelHorizontal={true}
                    />
                  </RadioButton>
                </View>
              ))}
            </View>
          </View>
          <View style={{ margin: 5 }}>
            <Text style={{ textAlign: 'center', fontSize: 12, color: 'gray' }}>
              Download to watch any time as long as you have occassional
              internet connection
            </Text>
          </View>
          <View style={styles.btnRow}>
            <TouchableOpacity style={styles.playBtn}>
              <Ionicons color="gray" name="md-play" size={24} />
              <Text style={{ color: '#000', marginLeft: 10 }}>PLAY</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.downloadBtn}>
              <Ionicons color="#fff" name="md-download" size={24} />
              <Text style={{ color: '#fff', marginLeft: 10 }}>DOWNLOAD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  preview: {
    width: '100%',
    height: 200,
  },
  bgImage: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewBtn: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  playBtn: {
    margin: 5,
    padding: 5,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
  },
  downloadBtn: {
    margin: 5,
    padding: 5,
    backgroundColor: '#1A4CF7',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    borderRadius: 2,
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 5,
  },
});

export default VideoModal;

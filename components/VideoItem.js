import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Picker,
  TouchableOpacity,
} from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import VideoModal from './VideoModal';
import Ripple from 'react-native-material-ripple';

const VideoItem = ({ item }) => {
  const [videoSize, setvideoSize] = useState({
    type: '',
    size: '',
  });
  const [videoModalVisible, setVideoModal] = useState(false);
  const toggleModal = () => setVideoModal(!videoModalVisible);
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => toggleModal()}>
      <VideoModal showModal={toggleModal} modalState={videoModalVisible} />
      <View style={{ padding: 10 }}>
        <View style={{ height: 200, width: '100%' }}>
          <Image
            source={{ uri: item.thumbnail }}
            style={{ height: 200, width: '100%' }}
          />
        </View>
        <View style={{ flex: 11, flexDirection: 'row', paddingTop: 10 }}>
          <View style={{ flex: 2 }}>
            <View style={styles.avatar}>
              <Image
                source={{ uri: item.avatar }}
                style={{ borderRadius: 25, height: 50, width: 50 }}
              />
            </View>
          </View>
          <View style={{ flex: 8, flexDirection: 'column' }}>
            <View>
              <Text>
                Woman Posts a Photo of a Kitten Only to Realize Her Big Mistake
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.videoSummary}>Facts Verse</Text>
                <Entypo color="gray" name="dot-single" size={16} />
                <Text style={styles.videoSummary}>65K views</Text>
                <Entypo color="gray" name="dot-single" size={16} />
                <Text style={styles.videoSummary}>1 day ago</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Entypo name="dots-three-vertical" size={15} />
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
            }}
          >
            <View style={{ padding: 5 }}>
              <Picker
                selectedValue={videoSize}
                style={{ height: 50, width: 150 }}
                mode="dropdown"
                onValueChange={(itemValue, itemIndex) =>
                  setvideoSize(itemValue)
                }
              >
                <Picker.Item label="Data saver" value="Data saver" />
                <Picker.Item label="Standard" value="Standard" />
                <Picker.Item label="High" value="High" />
              </Picker>
            </View>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <MaterialIcons color="#4086F7" name="file-download" size={24} />
              <Text
                style={{
                  marginHorizontal: 10,
                  color: '#4086F7',
                  fontSize: 15,
                  fontWeight: '500',
                }}
              >
                DOWNLOAD
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  videoSummary: { color: 'gray', fontSize: 12 },
  avatar: {
    alignContent: 'center',
    height: 50,
    width: 50,
  },
});

export default VideoItem;

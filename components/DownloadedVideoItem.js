import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';

const DownloadedVideoItem = ({ item }) => {
  return (
    <View>
      <View style={{ flex: 13, flexDirection: 'row', padding: 10 }}>
        <View style={{ flex: 5 }}>
          <View style={{ height: 80, width: '100%' }}>
            <Image
              source={{ uri: item.thumbnail }}
              style={{ height: 80, width: '100%' }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: -3,
                left: -3,
                padding: 0,
                backgroundColor: '#4086F7',
                height: 19,
                width: 19,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 9.5,
              }}
            >
              <Ionicons
                name="ios-checkmark-circle-outline"
                color="#fff"
                size={22}
              />
            </View>
            <View
              style={{
                backgroundColor: '#000',
                bottom: 0,
                right: 0,
                width: 90,
                position: 'absolute',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Text style={{ color: '#fff', fontSize: 12 }}>7.2MB</Text>
              <Entypo color="#fff" name="dot-single" size={16} />
              <Text style={{ color: '#fff', fontSize: 12 }}>10:21</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 8 }}>
          <View style={{ paddingHorizontal: 10 }}>
            <Text ellipsizeMode="clip" numberOfLines={2}>
              Woman Posts a Photo of a Kitten Only to Realize Her Big Mistake
            </Text>
            <Text style={styles.videoSummary}>Facts Verse</Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Entypo name="dots-three-vertical" size={20} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videoSummary: { color: 'gray', fontSize: 12 },
});

export default DownloadedVideoItem;

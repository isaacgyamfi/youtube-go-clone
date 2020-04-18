import React from 'react';
import { View, Text } from 'react-native';
import DownloadedVideoItem from '../components/DownloadedVideoItem';
import { FlatList } from 'react-native-gesture-handler';

const downloadedVideos = [
  {
    thumbnail: 'https://i.pravatar.cc/100',
    key: '1',
  },
  {
    thumbnail: 'https://i.pravatar.cc/100',
    key: '2',
  },
];

const Downloads = () => {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <View>
        <FlatList
          data={downloadedVideos}
          renderItem={({ item }) => <DownloadedVideoItem item={item} />}
        />
      </View>
    </View>
  );
};

export default Downloads;

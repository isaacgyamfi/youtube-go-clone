import React from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import VideoItem from '../components/VideoItem';
import SubHeader from '../components/SubHeader';

const videos = [
  {
    avatar: 'https://i.pravatar.cc/70',
    thumbnail: 'https://i.pravatar.cc/200',
    key: '1',
  },
  {
    avatar: 'https://i.pravatar.cc/70',
    thumbnail: 'https://i.pravatar.cc/200',
    key: '2',
  },
  {
    avatar: 'https://i.pravatar.cc/70',
    thumbnail: 'https://i.pravatar.cc/200',
    key: '3',
  },
  {
    avatar: 'https://i.pravatar.cc/70',
    thumbnail: 'https://i.pravatar.cc/200',
    key: '4',
  },
  {
    avatar: 'https://i.pravatar.cc/70',
    thumbnail: 'https://i.pravatar.cc/200',
    key: '5',
  },
];

const Home = () => {
  return (
    <View style={{ paddingBottom: 50, backgroundColor: '#fff' }}>
      <View>
        <SubHeader />
      </View>
      <View>
        <FlatList
          data={videos}
          renderItem={({ item }) => <VideoItem item={item} />}
        />
      </View>
    </View>
  );
};

export default Home;

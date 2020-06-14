import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import VideoItem from '../components/VideoItem';
import SubHeader from '../components/SubHeader';
import Videos from '../services/Videos';

// const videos = [
//   {
//     avatar: 'https://i.pravatar.cc/70',
//     thumbnail: 'https://i.pravatar.cc/200',
//     key: '1',
//   },
//   {
//     avatar: 'https://i.pravatar.cc/70',
//     thumbnail: 'https://i.pravatar.cc/200',
//     key: '2',
//   },
//   {
//     avatar: 'https://i.pravatar.cc/70',
//     thumbnail: 'https://i.pravatar.cc/200',
//     key: '3',
//   },
//   {
//     avatar: 'https://i.pravatar.cc/70',
//     thumbnail: 'https://i.pravatar.cc/200',
//     key: '4',
//   },
//   {
//     avatar: 'https://i.pravatar.cc/70',
//     thumbnail: 'https://i.pravatar.cc/200',
//     key: '5',
//   },
// ];
// console.log(Videos.loadVideos());
const Home = () => {
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    Videos.loadVideos()
      .then((res) => {
        // console.log(res.items);
        setvideos(res.items);
      })
      .catch((err) => console.log(err));
  }, []);
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

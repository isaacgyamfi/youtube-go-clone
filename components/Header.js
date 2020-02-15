import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../assets/youtube-go.jpg')}
            style={{ height: 40, width: 40 }}
          />
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Go</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Ionicons name="md-search" size={25} />
        </View>
        <View style={styles.avatar}>
          <Image
            source={require('../assets/avatar.png')}
            style={{ height: 25, width: 25 }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 330
  },
  avatar: {
    borderRadius: 20,
    borderBottomWidth: 0,
    backgroundColor: '#ddd',
    width: 25,
    height: 25,
    marginLeft: 20
  }
});

export default Header;

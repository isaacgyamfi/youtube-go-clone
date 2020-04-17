import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SubHeader = () => {
  return (
    <View style={{ paddingVertical: 5 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={{ color: 'gray' }}>Your channels</Text>
        </View>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <MaterialIcons color="#4086F7" name="subscriptions" size={18} />
            <Text style={{ marginHorizontal: 10, color: '#4086F7' }}>
              SUBSCRIPTIONS
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SubHeader;

import React from 'react';
import { View, Text, Image, StyleSheet, Switch } from 'react-native';
import { MaterialIcons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';

const Account = () => {
  return (
    <View
      style={{
        paddingBottom: 50,
        backgroundColor: '#fff',
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 15,
          paddingVertical: 20,
        }}
      >
        <View style={styles.avatar}>
          <Image
            source={require('../assets/avatar.png')}
            style={{ height: 25, width: 25 }}
          />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ marginBottom: 10 }}>Isaac Gyamfi</Text>
          <Text style={{ marginBottom: 10 }}>frimpongi50@gmail.com</Text>
          <Text style={{ marginTop: 5, color: '#1A4CF7' }}>
            Manage your Google Account
          </Text>
        </View>
      </View>
      <View style={styles.borderLine} />
      <View style={{ padding: 15 }}>
        <Text style={{ fontWeight: 'bold', color: 'gray' }}>App</Text>
        <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
          <MaterialIcons
            style={{ flex: 2 }}
            size={22}
            color="gray"
            name="system-update-alt"
          />
          <View style={{ flex: 8 }}>
            <Text>Update app</Text>
          </View>
        </View>
        <View
          style={[styles.borderLine, { marginLeft: 60, marginRight: -15 }]}
        />
        <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
          <SimpleLineIcons
            style={{ flex: 2 }}
            size={22}
            color="gray"
            name="globe"
          />
          <View style={{ flex: 8 }}>
            <Text>Language</Text>
          </View>
        </View>
        <View
          style={[styles.borderLine, { marginLeft: 60, marginRight: -15 }]}
        />
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 15,
            alignItems: 'center',
          }}
        >
          <AntDesign style={{ flex: 2 }} size={22} color="gray" name="Safety" />
          <View style={{ flex: 6 }}>
            <Text>Restricted mode</Text>
            <Text style={{ fontSize: 12 }}>
              This helps screen out potentially mature vides, but please rember
              that no filter is 100% accurate
            </Text>
          </View>
          <View
            style={{
              flex: 2,
              alignItems: 'center',
            }}
          >
            <Switch />
          </View>
        </View>
        <View
          style={[styles.borderLine, { marginLeft: 60, marginRight: -15 }]}
        />
        <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
          <AntDesign
            style={{ flex: 2 }}
            size={22}
            color="gray"
            name="questioncircle"
          />
          <Text style={{ flex: 8 }}>Help {'&'} feedback</Text>
        </View>
      </View>
      <View style={styles.borderLine} />
      <View style={{ padding: 15 }}>
        <Text style={{ fontWeight: 'bold', color: 'gray' }}>Autoplay</Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            paddingVertical: 15,
            alignItems: 'center',
          }}
        >
          <AntDesign
            style={{ flex: 2 }}
            size={22}
            color="gray"
            name="playcircleo"
          />
          <View style={{ flex: 6 }}>
            <Text>Autoplay next video</Text>
            <Text style={{ fontSize: 12 }}>
              When you finish a video, another plays automatically
            </Text>
          </View>
          <View
            style={{
              flex: 2,
              alignItems: 'center',
            }}
          >
            <Switch />
          </View>
        </View>
      </View>
      <View style={styles.borderLine} />
      <View style={{ padding: 15 }}>
        <Text style={{ fontWeight: 'bold', color: 'gray' }}>Autoplay</Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            paddingVertical: 15,
            alignItems: 'center',
          }}
        >
          <AntDesign
            style={{ flex: 2 }}
            size={22}
            color="gray"
            name="playcircleo"
          />
          <View style={{ flex: 6 }}>
            <Text>Autoplay next video</Text>
            <Text style={{ fontSize: 12 }}>
              When you finish a video, another plays automatically
            </Text>
          </View>
          <View
            style={{
              flex: 2,
              alignItems: 'center',
            }}
          >
            <Switch />
          </View>
        </View>
        <View style={styles.borderLine} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 20,
    borderBottomWidth: 0,
    backgroundColor: '#ddd',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderLine: { borderColor: '#ddd', borderWidth: StyleSheet.hairlineWidth },
});

export default Account;

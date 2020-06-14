import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Switch,
  ScrollView,
} from 'react-native';
import {
  MaterialIcons,
  SimpleLineIcons,
  AntDesign,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const Account = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}
    >
      <ScrollView>
        <View style={styles.avatarContainer}>
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
          <Text style={styles.sectionHeader}>App</Text>
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
          <View style={styles.sectionRow}>
            <AntDesign
              style={{ flex: 2 }}
              size={22}
              color="gray"
              name="Safety"
            />
            <View style={{ flex: 6 }}>
              <Text>Restricted mode</Text>
              <Text style={{ fontSize: 12 }}>
                This helps screen out potentially mature vides, but please
                rember that no filter is 100% accurate
              </Text>
            </View>
            <View
              style={{
                flex: 2,
                alignItems: 'center',
              }}
            >
              <Switch
                trackColor={{ false: 'gray', true: '#99c0ff' }}
                thumbColor={isEnabled ? '#4086F7' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
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
          <View style={styles.sectionRow}>
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
              <Switch
                trackColor={{ false: '#767577', true: '#99c0ff' }}
                thumbColor={isEnabled ? '#4086F7' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        </View>
        <View style={styles.borderLine} />
        <View style={{ padding: 15 }}>
          <Text style={styles.sectionHeader}>Video storage</Text>
          <View style={styles.sectionRow}>
            <MaterialIcons
              style={{ flex: 2 }}
              size={22}
              color="gray"
              name="sd-storage"
            />
            <View style={{ flex: 8 }}>
              <Text>Phone</Text>
              <Text style={{ fontSize: 12 }}>
                22.2 GB used / 997 MB available
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.borderLine} />
        <View style={{ padding: 15 }}>
          <Text style={styles.sectionHeader}>Notifications</Text>
          <View style={styles.sectionRow}>
            {/* icon to be changed */}
            <MaterialCommunityIcons
              style={{ flex: 2 }}
              size={22}
              color="gray"
              name="star-four-points"
            />
            <View style={{ flex: 6 }}>
              <Text>Recommended videos</Text>
              <Text style={{ fontSize: 12 }}>
                Notify me of videos based on what I watch, as well as new videos
                from channels I'm subscribed to
              </Text>
            </View>
            <View
              style={{
                flex: 2,
                alignItems: 'center',
              }}
            >
              <Switch
                trackColor={{ false: '#767577', true: '#99c0ff' }}
                thumbColor={isEnabled ? '#4086F7' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
          <View
            style={[styles.borderLine, { marginLeft: 60, marginRight: -15 }]}
          />
          <View style={styles.sectionRow}>
            <MaterialIcons
              style={{ flex: 2 }}
              size={25}
              color="gray"
              name="notifications"
            />
            <View style={{ flex: 8 }}>
              <Text>Channel settings</Text>
              <Text style={{ fontSize: 12 }}>
                Tab her to manage notification settings for each subscribed
                channel
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.borderLine} />
        <View style={{ padding: 15 }}>
          <Text style={styles.sectionHeader}>History {'&'} Privacy</Text>
          <View style={styles.sectionRow}>
            <MaterialIcons
              style={{ flex: 2 }}
              size={25}
              color="gray"
              name="history"
            />
            <View style={{ flex: 8 }}>
              <Text>Manage History</Text>
            </View>
          </View>
        </View>
        <View style={styles.borderLine} />
        <View style={{ padding: 15 }}>
          <Text style={styles.sectionHeader}>Advanced</Text>
          <View style={styles.sectionRow}>
            <SimpleLineIcons
              style={{ flex: 2 }}
              size={22}
              color="gray"
              name="graph"
            />
            <View style={{ flex: 6 }}>
              <Text>Enable stats for nerds</Text>
            </View>
            <View
              style={{
                flex: 2,
                alignItems: 'center',
              }}
            >
              <Switch
                trackColor={{ false: '#767577', true: '#99c0ff' }}
                thumbColor={isEnabled ? '#4086F7' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
          <View
            style={[styles.borderLine, { marginLeft: 60, marginRight: -15 }]}
          />
          <View style={styles.sectionRow}>
            <MaterialIcons
              style={{ flex: 2 }}
              size={25}
              color="gray"
              name="info"
            />
            <View style={{ flex: 8 }}>
              <Text>About</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
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
  sectionHeader: { fontWeight: 'bold', color: 'gray' },
  sectionRow: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
  },
});

export default Account;

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Cover Photo */}
      <Image 
        source={{uri: 'https://media.licdn.com/dms/image/C4D03AQGyD3fkRhSvYQ/profile-displayphoto-shrink_200_200/0/1663090168915?e=2147483647&v=beta&t=0ZZTWiASLWarz12ScoJc0cc_ZembVcEHpGnwV6Lh9dY'}} 
        style={styles.coverPhoto} 
      />
      
      {/* Profile Picture */}
      <View style={styles.profilePicContainer}>
        <Image 
          source={{uri: 'https://pbs.twimg.com/profile_images/1571280902822436865/nhD6rzUa_400x400.jpg'}} 
          style={styles.profilePic} 
        />
      </View>
      
      {/* Name and Info */}
      <Text style={styles.nameText}>vincent</Text>
      <Text style={styles.friendsText}>500 Friends</Text>
      
      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Friend</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>
      </View>
      
      {/* About Section */}
      <View style={styles.aboutSection}>
        <Text style={styles.aboutTitle}>About</Text>
        <Text style={styles.aboutText}>
          Software Developer at XYZ Inc. Loves hiking, photography, and travel. Living in San Francisco.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  coverPhoto: {
    width: '100%',
    height: 200,
  },
  profilePicContainer: {
    alignItems: 'center',
    marginTop: -50, // Profile pic overlaps with cover photo
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  friendsText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4267B2', // Facebook blue color
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  aboutSection: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Profile;

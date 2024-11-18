import React from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const BookmarkScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput 
        placeholder="Search for a content..." 
        style={styles.searchBar} 
        placeholderTextColor="#888"
      />

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories:</Text>
      <View style={styles.categories}>
        <TouchableOpacity style={styles.categoryItem}>
          <Image 
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaF-QkVyECq7-VupjtdGDTtJSVMUphMDvSEw&s' }} // replace with actual image
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Movies{"\n"}Spider man no way home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItem}>
          <Image 
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdTi_5MHfpyRFjDf73MYY_qdim7B0OiWxBw&s' }} // replace with actual image
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Animes{"\n"}Avengers 1</Text>
        </TouchableOpacity>
      </View>

      {/* Most Searched */}
      <Text style={styles.sectionTitle}>Most searched:</Text>
      <ScrollView horizontal>
        <View style={styles.mostSearched}>
          {/* Card 1 */}
          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLEaKGlnq1aN3zpwhicQkBYSR-OJAsKF2FLAM6V21l9Zd7vxmubCHThDVowhk9MAojXAA&usqp=CAU' }} // replace with actual image
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Secret Wars</Text>
            <Text style={styles.cardYear}>2022</Text>
          </View>

          {/* Card 2 */}
          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://m.media-amazon.com/images/M/MV5BMGMzZjdiNjEtMTMwMS00MTVkLTk0NWMtOGFjODY1MWRkNmVmXkEyXkFqcGc@._V1_.jpg' }} // replace with actual image
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Samaritan</Text>
            <Text style={styles.cardYear}>2022</Text>
          </View>

          {/* Card 3 */}
          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00310216-tluebxpafx-portrait.jpg' }} // replace with actual image
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>DEVARA</Text>
            <Text style={styles.cardYear}>2021</Text>
          </View>

          {/* Card 4 */}
          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_mcnUbQ1-C9ogY1Opekk1LM_WuZ7A6gVkMQ&s' }} // replace with actual image
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Doctor Strange</Text>
            <Text style={styles.cardYear}>2016</Text>
          </View>

          {/* Card 5 */}
          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTaAIqCjJ4hgNdT3Rg-zNtpJ5M0x-ybwZJIA&s' }} // replace with actual image
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Black Panther</Text>
            <Text style={styles.cardYear}>2018</Text>
          </View>

          {/* Card 6 */}
          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-WrnKpObWecorFQwIDlpgkcZv9NMlHxOn9Q&s' }} // replace with actual image
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Thor: Ragnarok</Text>
            <Text style={styles.cardYear}>2017</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  searchBar: {
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#2c2c2c',
    color: '#fff',
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom: 10,
  },
  categoryText: {
    color: '#fff',
    textAlign: 'center',
  },
  mostSearched: {
    flexDirection: 'row',
  },
  card: {
    marginRight: 15,
    width: 150,
    alignItems: 'center',
  },
  cardImage: {
    width: 150,
    height: 150,
    borderRadius: 20,
    marginBottom: 10,
  },
  cardTitle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardYear: {
    color: '#888',
    textAlign: 'center',
  },
});

export default BookmarkScreen;

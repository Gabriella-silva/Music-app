import { View, Text, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { MapPin, Search } from '../node_modules/lucide-react-native'; 

// Componente de Item de Comida
const SongItem = ({ name, image, description }) => {
  return (
    <View style={styles.SongContainer}>
      <Image source={image} style={styles.SongImage} />
      <Text style={styles.SongName}>{name}</Text>
      <Text style={styles.SongDescription}>{description}</Text>
    </View>
  );
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Barra de Pesquisa */}
      <View style={styles.searchBar}>
        <Search height={25} width={25} stroke="gray" /> 
        <TextInput placeholder="Musicas" style={styles.textInput} />
        <View style={styles.locationContainer}>
          <MapPin height={20} width={20} stroke="gray" /> 
          <Text style={styles.locationText}>Descubra sua próxima música</Text>
        </View>
      </View>

      <ScrollView style={styles.SongList}>
      <SongItem 
          name="Kali Uchis" 
          image={{ uri: 'https://i.pinimg.com/736x/08/fe/50/08fe5073c795eff71103fa94c135e29a.jpg' }} 
          description="Descrição" 
        />
        <SongItem 
          name="Sabrina Carpenter" 
          image={{ uri: 'https://i.pinimg.com/474x/11/3d/08/113d082bdbe11cdb7ab9862b66c28ac3.jpg' }} 
          description="Descrição"
           
        />
        <SongItem 
          name="Duquesa" 
          image={{ uri: 'https://i.pinimg.com/474x/d7/d3/22/d7d32210a3cfb04503b89467437d2883.jpg' }} 
          description="Descrição." 
        />
      
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  textInput: {
    marginLeft: 8,
    flex: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 2,
    borderLeftColor: 'gray',
    paddingLeft: 8,
  },
  locationText: {
    color: 'gray',
  },
  filterButton: {
    padding: 12,
    backgroundColor: 'gray',
    borderRadius: 9999, 
  },
  
  SongList: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  SongContainer: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  SongImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  SongName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  SongDescription: {
    color: 'gray',
    fontSize: 14,
  },
});

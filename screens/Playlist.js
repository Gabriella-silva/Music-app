import { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons'; 
export default function Playlist() {

  const musicas = [
    {
      id: '1',
      nome: 'Expresso',
      artista: 'Sabrina Carpenter',
      imagem: 'https://i.pinimg.com/236x/9a/3c/6c/9a3c6cb11bad5bbb929aca1eda3e9338.jpg'
    },
    {
      id: '2',
      nome: 'Ultima vez',
      artista: 'Alee',
      imagem: 'https://i.pinimg.com/474x/24/ce/06/24ce06d484afcc34f40f5fd9a932be23.jpg'
    },
    {
      id: '3',
      nome: 'Magica',
      artista: 'Calcinha Preta',
      imagem: 'https://i.pinimg.com/236x/08/dd/5d/08dd5dec41965e5829b8e6cff283b212.jpg'
    },
    {
        id: '4',
        nome: 'Angel',
        artista: 'Kali Uchis',
        imagem: 'https://i.pinimg.com/474x/ee/8f/f8/ee8ff81846ae32e1ad5773d8c4535d63.jpg'
      },
      {
        id: '5',
        nome: '911',
        artista: 'Tyler',
        imagem: 'https://i.pinimg.com/474x/6b/a8/98/6ba89851659e10c377453b6ec3bca561.jpg'
      },
      {
        id: '6',
        nome: 'Só quero ver',
        artista: 'BK',
        imagem: 'https://i.pinimg.com/236x/1c/8e/b2/1c8eb225be4e1e8f8d9976b7b5ed8454.jpg'
      }, {
        id: '7',
        nome: 'Prom',
        artista: 'SZA',
        imagem: 'https://i.pinimg.com/236x/6c/c2/c4/6cc2c434d9dc5ea61cfa49d34ff5067a.jpg'
      }, {
        id: '8',
        nome: 'Aka Rasta',
        artista: 'QUASE QUE FALEI TE AMO',
        imagem: 'https://i.pinimg.com/236x/26/2f/4a/262f4aa58f2bf497319337edaf8d8248.jpg'
      },
  ];


  const [favoritos, setFavoritos] = useState({});


  const toggleFavorite = (id) => {
    setFavoritos(prevFavoritos => ({
      ...prevFavoritos,
      [id]: !prevFavoritos[id]
    }));
  };

  const renderItem = ({ item }) => {
    return (
      <View style={estilo.itemContainer}>
        <Image source={{ uri: item.imagem }} style={estilo.itemImage} />
        <View style={estilo.textContainer}>
          <Text style={estilo.itemName}>{item.nome}</Text>
          <Text style={estilo.itemArtist}>{item.artista}</Text>
        </View>

        <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={estilo.favoriteButton}>
          <MaterialIcons
            name={favoritos[item.id] ? "favorite" : "favorite-border"} 
            size={30}
            color={favoritos[item.id] ? "red" : "gray"} 
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Playlist</Text>
      
      <FlatList
        data={musicas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={estilo.listContainer}
      />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  titulo: {
    margin: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333'
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    elevation: 5, 
    alignItems: 'center',
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemArtist: {
    fontSize: 14,
    color: '#777',
  },
  favoriteButton: {
    position: 'absolute', 
    right: 10,
    top: '50%',
    transform: [{ translateY: -15 }], 
  },
});

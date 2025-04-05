import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Usuario() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Dados dos Usuários</Text>

      <View style={estilo.userContainer}>
        <Image
          source={require('../assets/icon.png')}  
          style={estilo.profileImage}
        />
        <View style={estilo.userInfo}>
          <Text style={estilo.userName}>João da Silva</Text>
          <Text style={estilo.userEmail}>joao.silva@example.com</Text>
        </View>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  titulo: {
    margin: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    elevation: 5, 
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40, 
    marginRight: 15,
  },
  userInfo: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#777',
  },
});

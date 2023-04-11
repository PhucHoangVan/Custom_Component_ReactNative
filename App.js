// This is App.js file, replace the code below into your project to run. Thanks!

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.app}>
      <StatusBar style="light" />
      <View style={styles.wrapper}>
        <Card/>
      </View>
    </View>
  );
}


function Card() {
  const avatar = "https://boxgaixinh.net/wp-content/uploads/2023/02/avatar-dep-ngau-nu-8.jpg";

  return (
    <View style={styles.card}>
      <Image source={{uri:avatar}} style={{...styles.avatar, marginTop: 30, borderWidth: 4, borderColor: 'orange'}}/>                    
      <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold', marginTop: 20}}>Aaron.Emma</Text>
      <Text style={{color: 'orange', fontSize: 24, fontWeight: 'medium', marginTop: 10}}>FullStack Developer</Text>
      <View style={{marginTop: 'auto', marginBottom: 'auto'}}>
        <Text style={{color: 'white'}}>Phone: 0829 353 456</Text>
        <Text style={{color: 'white'}}>Email: emma.aaron@gmail.com</Text>
      </View>
      <View style={{marginTop: 'auto', marginBottom: 60}}>
        <Pressable style={styles.button}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>Contact Me</Text>
        </Pressable>
      </View>
    </View>)
}


const styles = StyleSheet.create({
  statusbar: {
    color: 'white'
  },
  
  app:{
    flex: 1,  
    backgroundColor: '#1E1E1E',
  },

  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  card: {
    display: 'flex',
    width: '80%',
    height: 500,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    alignItems: 'center'
  },

  avatar: {
    borderRadius: 100,
    width: 130,
    height: 130
  },

  button: {
    borderWidth: 2,
    borderColor: 'orange',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4
  }
});

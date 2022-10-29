import React from 'react'
import { Text, TouchableOpacity, View, Alert } from 'react-native'

export default class App extends React.Component {
  render() {
    let nama = 'Aurinda Lutfifia'
    nama = nama + ' Yessa'
    let status = 'Mahasiswa'
    status = "Status : " + status    
  
    return (
      <View
        style = {{
          alignItems: 'center',
          height: '100%',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        <Text
          style = {{
            fontSize: 28,
            fontWeight: 'bold'
          }}
        >
          {nama}
        </Text>

        <TouchableOpacity
          onPress = {() => {
            Alert.alert((nama), (status)) 
          }}
          style = {{
            backgroundColor: 'darkgreen',
            marginTop: 10,
            padding: 10,
            borderRadius: 15
          }}
        >
          <Text
            style = {{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold'
            }}
          >
            Cek Status
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
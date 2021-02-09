import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const geraNumeroAleatorio = () => {
  var numero_aleatorio = Math.random();

  numero_aleatorio = Math.floor(numero_aleatorio * 10);
  alert(numero_aleatorio);
}

const App = () => {
  return (
    //View = Funciona como um container para os elementos, todos os elementos devem estar dentro do view
    <View> 
      <Text>Gerador de numeros randomicos!!!</Text>
      <Button 
        title="Gerar um numero randomico"
        //onPress: responsavel por disparar a execusão do evento quando o botão é clicado
        onPress={geraNumeroAleatorio}
      />
    </View>
  );
};

AppRegistry.registerComponent('app1', () => App);
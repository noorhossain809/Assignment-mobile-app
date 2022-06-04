import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Text from './src/components/text/Text';
import Home from './src/screens/Home';
import { colors } from './src/theme/colors';

const Stack = createNativeStackNavigator();
export default function App() {
  const [fontLoaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
    'Spartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'League-spartan': require('./assets/fonts/LeagueSpartan-VariableFont_wght.ttf')
  })
  if(!fontLoaded){
    return <Text>Font is Loaded...</Text>
  }
  return (
   <>
    <NavigationContainer theme={DarkTheme} >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style='light' />
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

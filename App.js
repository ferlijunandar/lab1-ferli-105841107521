import {useFonts} from 'expo-font';
import { View,Text } from 'react-native';

export default function App() {
  const [dapatFont] = useFonts({
    'MetroBlack': require( './assets/Fonts/Metropolis-Black.otf'),
    'MetroBold': require( './assets/Fonts/Metropolis-Bold.otf'),
    'MetroLIght': require( './assets/Fonts/Metropolis-Light.otf'),
    'MetroMedium': require( './assets/Fonts/Metropolis-Medium.otf'),
    'MetroSemiBold': require( './assets/Fonts/Metropolis-SemiBold.otf'),
  });
  if (!dapatFont) {
    return <Text>font tidak ditemukan...</Text>
  }
  return (
    <View style={{
      flex: 1,
       justifyContent: 'center',
        alignItems: 'center'
        }}> 
      <Text style= {{ fontFamily: 'MetroBlack' }}>font metropolis black</Text>
      <Text style= {{ fontFamily: 'MetroBold' }}>font metropolis bold</Text>
      <Text style= {{ fontFamily: 'MetroLIght' }}>font metropolis light</Text>
      <Text style= {{ fontFamily: 'MetroMedium' }}>font metropolis medium</Text>
      <Text style= {{ fontFamily: 'MetroSemiBold' }}>font metropolis semibold</Text>
    </View>
  )}
    


import * as React from 'react';
import { Alert,Button,View, Text,StyleSheet,TouchableOpacity,Linking,SafeAreaView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselCards from '../Component/CarouselCards'

export default function HomeScreen({navigation}) {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
        headerLeft: () => (
          <Button
            onPress={()=>{navigation.navigate('ListView'); }}
            title="ListView"
            color="#000"
          />
        ),
        headerRight: () => (
          <Button
            onPress={() =>   Alert.alert("ยืนยันการ Logout", "คุณต้องการออกจากระบบใช่หรือไม่", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => navigation.navigate('Login')}
        ])}
            title="Logout"
            color="#000"
          />
        ),
    });
  }, [navigation]);
  return (      
    <SafeAreaView style={styles.container}>        
      <CarouselCards />
    </SafeAreaView>
  )
      
}


const styles = StyleSheet.create({
   screen: {
    marginTop: 30,
  },
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10,
      alignItems:"center",
      marginTop: 40,
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: "dodgerblue",
        alignSelf: "center",
        marginHorizontal: "1%",
        marginBottom: 6,
        textAlign: "center",
        borderRadius:12
      },
      buttonLabel: {
        fontSize: 12,
        fontWeight: "500",
        color: "ghostwhite",
      },
      row: {
        flexDirection: "row",
        flexWrap: "wrap",
      },
      homeText:{
        fontSize:20,
        padding:12,
        fontWeight:'bold'
      }
  });
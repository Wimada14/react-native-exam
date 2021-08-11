import React, { useState, useEffect } from "react";
import { View, Text,TouchableOpacity,StyleSheet,ScrollView,Image ,FlatList} from 'react-native';
import axios from 'axios';
import { baseProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlers";


 
const SectionList = ({title, image ,children}) => {
  
  return (
    <View style={styles.sectionContainer}>
      <Image style={styles.tinyLogo} source={{
          uri: image,
        }} />
        <View>
          <Text style={styles.nameContent}>
            {title}
          </Text>
          <Text style={styles.content}>
            {children}
          </Text>
        </View>
  </View>
  );
}


export default ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
   fetchData()
   //return data;
  },[]);

 const  fetchData = async () => {
  await axios
   .get('https://jsonplaceholder.typicode.com/photos')
   .then(function (response) {
     // handle success
     
      console.log('Respone == = = = = =',response.data.map((val) => val.id))
      setData(response.data);
      setLoading(false)
   })
   .catch(function (error) {
     // handle error
     //alert(error.message);
   });
 }
  const renderItem = ({index , item}) => {
    return (
       <SectionList key={item.id} title={item.title } image={item.thumbnailUrl}>
        {item.email}
      </SectionList>
    );
  };
    return (
      <View style={{flex:1}}>
        <View style={{   justifyContent: 'center' }}>
            {
              loading ?
              (
                <View style={{ flex:0.5}}>
                  <Text style={{ backgroundColor:'blue', justifyContent:'center',alignItems:'center',textAlign: 'center',color:'white' }}>LOADING ...</Text>
                </View>
              )
              :
              (
              <FlatList
                data={data}
                renderItem={(item)=>renderItem(item)}
                keyExtractor={(item, index) => index.toString()}
              />
               )
              
            }
        </View>
      </View>
    );
  }
 
  const styles = StyleSheet.create({
    centerItem:{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    leftContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      backgroundColor: 'green'
    },
    button: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 100,
        backgroundColor: "dodgerblue",
        alignSelf: "center",
        textAlign: "center",
      },
      buttonBack:{
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: "dodgerblue",
        marginRight:'auto'
      },
      buttonLabel: {
        fontSize: 12,
        fontWeight: "bold",
        color: "ghostwhite",
      },
      row: {
        flexDirection: "row",
        flexWrap: "wrap",
      },
      sectionContainer: {
        marginTop: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
         padding:20,
        justifyContent: 'flex-start',
        textAlign: "center",
        backgroundColor: "#000",
        flexDirection: "row",
      },
      tinyLogo: {
        width: 50,
        height: 50
      },
      content:{
        paddingLeft:12,
        color:"ghostwhite",
        fontWeight:'bold',
        fontSize:16
      },
      nameContent:{
        flex: 0.3,
        paddingHorizontal: 40,
        flexWrap: 'wrap',
        paddingLeft:12,
        color:"#fff",
        fontWeight:'bold',
        fontSize:20
      },
      leftContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }
  });
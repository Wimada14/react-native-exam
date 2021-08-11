import React from 'react'
import { Text,View,Button,TouchableOpacity ,Linking,navigation,Modal} from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import ImageViewer from 'react-native-image-zoom-viewer';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import ListViewSreen from '../Screens/ListView';
const data = [
  {
    title: "The LivingOS",
    body: "สามารถกดเพื่อเรียกหน้าเว็บของ The LivingOS ",
    imgUrl: "https://www.thelivingos.com/wp-content/uploads/2021/07/N0.1Proptech-in-Thailand-1024x576.png"
  },
  {
    title: "Application Google Map",
    body: "สามารถกดเพื่อเรียกใช้งาน Application Google Map ได้",
    imgUrl: "https://static.thairath.co.th/media/dFQROr7oWzulq5FZYjcLPh5OZrYcY416ulosyOKd3L7WnWICB94q4E8HDaF0bBPWKrQ.webp"
  },
  {
    title: "Full size",
    body: "สามารถกดเพื่อดูรูปแบบ Full size ได้\n",
    imgUrl: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460"
  }
];


const images = [{
    // Simplest usage.
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',

}]

const CarouselCards = ({navigation}) => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)
  const [isVisible, setIsVisible] = React.useState(false)
  const closeModal = () => { if (isVisible) { setIsVisible(false) } } 
  return (
    <View>
      <TouchableOpacity 
      onPress={(value)=> {
        console.log('value === == = == ',value)
        if(index==0){
            Linking.openURL("https://www.thelivingos.com/")
          }else if (index==1){
            Linking.openURL('google.navigation:q=100+101')
          }else{
            setIsVisible(true) 
          }
        }
      }
      >
       <Modal 
       onRequestClose={closeModal}
        visible={isVisible}
        transparent={true}>
        <ImageViewer  enableSwipeDown  onSwipeDown={closeModal} imageUrls={images}/>
    </Modal>  
    <Carousel
        layout='default' 
        layoutCardOffset={3}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />

      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
      </TouchableOpacity>
    </View>

  )
}



export default CarouselCards
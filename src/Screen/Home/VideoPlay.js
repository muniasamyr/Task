import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Dimensions ,FlatList,ImageBackground,Image,TouchableOpacity,ScrollView} from "react-native";
import EvilIcons from  'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
var { height, width } = Dimensions.get('window')
import Video from 'react-native-video';
import PromptContentLoader from "../../Component/Loader/PromptContentLoader";

const LocationSelectionScreen = (props) => {
  const [is_Loading, setLoading] = useState(true);
  const [home_data,setHomeData]=useState([])



  useEffect(async() => {




  });
  
  const navigationFun=()=>{
    props.navigation.navigate('ReviewScreen')
  }
  const selectedIndex=9
  
  return <ScrollView style={styles.container}>
  
    
    <View style={{flex:1}}>
    <Video source={{uri: "https://firebasestorage.googleapis.com/v0/b/task-b417c.appspot.com/o/videoplayback%20(1).mp4?alt=media&token=d745704f-f8cb-4100-abf5-67caf5a23027"}}                             
       controls
       style={styles.backgroundVideo} />
        
   </View>
   
  </ScrollView>;
};

const styles = StyleSheet.create({
  container:{ flex: 1 },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 10,
    right: 10,
  },

});

export default LocationSelectionScreen;
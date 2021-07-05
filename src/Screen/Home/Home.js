import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Dimensions ,FlatList,ImageBackground,Image,TouchableOpacity,ScrollView} from "react-native";
import EvilIcons from  'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
var { height, width } = Dimensions.get('window')
import PromptContentLoader from "../../Component/Loader/PromptContentLoader";

const LocationSelectionScreen = (props) => {
  const [is_Loading, setLoading] = useState(true);
  const [home_data,setHomeData]=useState([])



  useEffect(async() => {
let result=
[
    {
        "date":"May 11",
        "isCheckCircle":0,
        "isContact":0,
        "Image":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "name": "file_example_MP4_640_3MG.mp4",
            "webContentLink": "https://drive.google.com/uc?id=1XLG3650mrY-JS3bA5YSpFS_VnTD86zY2&export=download",
            "webViewLink": "https://drive.google.com/file/d/1XLG3650mrY-JS3bA5YSpFS_VnTD86zY2/view?usp=drivesdk",
            "thumbnailLink": "https://lh3.googleusercontent.com/cyyH6IspYCKSj-WPp0J5RmraQspVRHWG81aDzeGfYRZTjMrOynzMgWmCKwWD1NISfcwcimipY3qZ2iY=s220"
    },
    {
        "date":"May 11",
        "isCheckCircle":0,
        "isContact":0,
        "Image":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "name": "file_example_MP4_640_3MG.mp4",
            "webContentLink": "https://drive.google.com/uc?id=1XLG3650mrY-JS3bA5YSpFS_VnTD86zY2&export=download",
            "webViewLink": "https://drive.google.com/file/d/1XLG3650mrY-JS3bA5YSpFS_VnTD86zY2/view?usp=drivesdk",
            "thumbnailLink": "https://lh3.googleusercontent.com/cyyH6IspYCKSj-WPp0J5RmraQspVRHWG81aDzeGfYRZTjMrOynzMgWmCKwWD1NISfcwcimipY3qZ2iY=s220"
    },
    {
        "date":"May 11",
        "isCheckCircle":0,
        "isContact":0,
        "Image":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "name": "file_example_MP4_640_3MG.mp4",
            "webContentLink": "https://drive.google.com/uc?id=1XLG3650mrY-JS3bA5YSpFS_VnTD86zY2&export=download",
            "webViewLink": "https://drive.google.com/file/d/1XLG3650mrY-JS3bA5YSpFS_VnTD86zY2/view?usp=drivesdk",
            "thumbnailLink": "https://lh3.googleusercontent.com/cyyH6IspYCKSj-WPp0J5RmraQspVRHWG81aDzeGfYRZTjMrOynzMgWmCKwWD1NISfcwcimipY3qZ2iY=s220"
    },
    {
        "date":"May 11",
        "isCheckCircle":0,
        "isContact":0,
        "Image":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "name": "file_example_MP4_640_3MG.mp4",
            "webContentLink": "https://drive.google.com/uc?id=1XLG3650mrY-JS3bA5YSpFS_VnTD86zY2&export=download",
            "webViewLink": "https://drive.google.com/file/d/1XLG3650mrY-JS3bA5YSpFS_VnTD86zY2/view?usp=drivesdk",
            "thumbnailLink": "https://lh3.googleusercontent.com/cyyH6IspYCKSj-WPp0J5RmraQspVRHWG81aDzeGfYRZTjMrOynzMgWmCKwWD1NISfcwcimipY3qZ2iY=s220"
    },
    {
       "date":"May 11",
        "isCheckCircle":0,
        "isContact":0,
        "Image":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "name": "file_example_MP4_640_3MG.mp4",
            "webContentLink": "https://drive.google.com/uc?id=1XLG3650mrY-JS3bA5YSpFS_VnTD86zY2&export=download",
            "webViewLink": "https://drive.google.com/file/d/1XLG3650mrY-JS3bA5YSpFS_VnTD86zY2/view?usp=drivesdk",
            "thumbnailLink": "https://lh3.googleusercontent.com/cyyH6IspYCKSj-WPp0J5RmraQspVRHWG81aDzeGfYRZTjMrOynzMgWmCKwWD1NISfcwcimipY3qZ2iY=s220"
    },
    {
        "date":"May 11",
        "isCheckCircle":0,
        "isContact":0,
        "Image":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "name": "file_example_MP4_640_3MG.mp4",
            "webContentLink": "https://drive.google.com/uc?id=1XLG3650mrY-JS3bA5YSpFS_VnTD86zY2&export=download",
            "webViewLink": "https://drive.google.com/file/d/1XLG3650mrY-JS3bA5YSpFS_VnTD86zY2/view?usp=drivesdk",
            "thumbnailLink": "https://lh3.googleusercontent.com/cyyH6IspYCKSj-WPp0J5RmraQspVRHWG81aDzeGfYRZTjMrOynzMgWmCKwWD1NISfcwcimipY3qZ2iY=s220"
    },
    {
        "date":"May 11",
        "isCheckCircle":0,
        "isContact":0,
        "Image":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "name": "file_example_MP4_640_3MG.mp4",
            "webContentLink": "https://drive.google.com/uc?id=1XLG3650mrY-JS3bA5YSpFS_VnTD86zY2&export=download",
            "webViewLink": "https://drive.google.com/file/d/1XLG3650mrY-JS3bA5YSpFS_VnTD86zY2/view?usp=drivesdk",
            "thumbnailLink": "https://lh3.googleusercontent.com/cyyH6IspYCKSj-WPp0J5RmraQspVRHWG81aDzeGfYRZTjMrOynzMgWmCKwWD1NISfcwcimipY3qZ2iY=s220"
    },
    {
        "date":"May 11",
        "isCheckCircle":0,
        "isContact":0,
        "Image":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "name": "file_example_MP4_640_3MG.mp4",
            "webContentLink": "https://drive.google.com/uc?id=1XLG3650mrY-JS3bA5YSpFS_VnTD86zY2&export=download",
            "webViewLink": "https://drive.google.com/file/d/1XLG3650mrY-JS3bA5YSpFS_VnTD86zY2/view?usp=drivesdk",
            "thumbnailLink": "https://lh3.googleusercontent.com/cyyH6IspYCKSj-WPp0J5RmraQspVRHWG81aDzeGfYRZTjMrOynzMgWmCKwWD1NISfcwcimipY3qZ2iY=s220"
    },
    {
        "date":"May 11",
        "isCheckCircle":1,
        "isContact":0,
        "Image":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "name": "file_example_MP4_640_3MG.mp4",
            "webContentLink": "https://drive.google.com/uc?id=1XLG3650mrY-JS3bA5YSpFS_VnTD86zY2&export=download",
            "webViewLink": "https://drive.google.com/file/d/1XLG3650mrY-JS3bA5YSpFS_VnTD86zY2/view?usp=drivesdk",
            "thumbnailLink": "https://lh3.googleusercontent.com/cyyH6IspYCKSj-WPp0J5RmraQspVRHWG81aDzeGfYRZTjMrOynzMgWmCKwWD1NISfcwcimipY3qZ2iY=s220"
    },
    {
        "date":"May 1",
        "isCheckCircle":1,
        "isContact":1,
        "Image":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "name": "file_example_MP4_640_3MG.mp4",
        "webContentLink": "https://drive.google.com/uc?id=1XLG3650mrY-JS3bA5YSpFS_VnTD86zY2&export=download",
        "webViewLink": "https://drive.google.com/file/d/1XLG3650mrY-JS3bA5YSpFS_VnTD86zY2/view?usp=drivesdk",
        "thumbnailLink": "https://lh3.googleusercontent.com/cyyH6IspYCKSj-WPp0J5RmraQspVRHWG81aDzeGfYRZTjMrOynzMgWmCKwWD1NISfcwcimipY3qZ2iY=s220"
    }
]
setHomeData(result)
setLoading(false)




  });
  
  const navigationFun=()=>{
    props.navigation.navigate('ReviewScreen')
  }
  const selectedIndex=9
  const renderItem2 = ({ item, index }) => {
    return (
        <TouchableOpacity  onPress={()=>navigationFun()} style={styles.imageBackgroundStyle}>
        <ImageBackground source={{ uri: item.Image}} style={{ height: "100%", width: '100%'}}
                  imageStyle={{ opacity:0.9, borderRadius:5 }}>
                  <View style={styles.mainView}>

                    </View>
                      <View style={styles.textView}>
                        <View style={{flexDirection:'column',flex:0.6}}>
                        <Text style={styles.date} numberOfLines={1}>{item.date}</Text>
                        </View>
                        <View style={{flexDirection:'column',flex:0.6}}>
                        <View style={{flexDirection:'row',flex:1}}>  
                        {item.isCheckCircle===0? 
                     <EvilIcons name='check' color='#FFFFFF' size={20}/>:null}
                     {item.isContact===0?
                     <Ionicons name='person-circle-outline' color='#FFFFFF' size={18} style={{marginTop:-2}}/>:null}
                     </View>
                     </View>
                      </View>        
                </ImageBackground>
{/*                 
                {index!==selectedIndex?
                <Image source={require('../../Image/Group.png')} style={{ height: "35%", width: '35%',alignSelf:'center',marginTop:90 }}
                //   imageStyle={{ opacity: 0.8, borderRadiu:5 }}
                >
                         
                </Image>:null} */}
                </TouchableOpacity>
    );
  }
  return <ScrollView style={styles.container}>
  
    
    <View style={{flex:1}}>
    {is_Loading===true?
     <PromptContentLoader/> :
    <FlatList
            data={home_data}
            
            renderItem={renderItem2}
            keyExtractor={(item, index) => index.toString()}
          />}
          </View>
   
  </ScrollView>;
};

const styles = StyleSheet.create({
  container:{ flex: 1, backgroundColor:'#ffffff' },
  text: { fontSize: 30},
  mainView:{ flex:0.85,flexDirection: 'row', marginHorizontal: 10, marginTop: 10 },
  textView:{ flex:0.15,marginLeft:10,flexDirection:'row'},
  date:{ color: '#fff', fontSize: 10 },
  imageBackgroundStyle:{flex: 1, margin: 10,width:width-10, height: height/4}

});

export default LocationSelectionScreen;
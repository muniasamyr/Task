import React, { Component, PureComponent } from 'react';
import { View, TouchableOpacity, Dimensions, StyleSheet, Image, Text, Platform, FlatList, SafeAreaView } from 'react-native'
import Shimmer from 'react-native-shimmer';

var { height, width } = Dimensions.get('window');
class PromptContentLoader extends PureComponent {
    actionOnRow() {
        this.props.ClickAction()
    }
    render() {
        const { item } = this.props;
        return (
            <Shimmer>
             
                        <FlatList data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                               numColumns={3}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) =>
                            <View style={{flex: 1, margin: 10,width:width/3, height: height/4,backgroundColor:'grey'}}>
                            
                                    </View>
                    
                            } />
                  
            </Shimmer>
        );
    }

}
const Styles = StyleSheet.create({
    mainCardView: {
        height: 60,
        width: width - 30,
        marginVertical: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'red',
        borderRadius: 6,
        flexDirection: 'row',
        paddingHorizontal: 10
    },

})




export default PromptContentLoader;

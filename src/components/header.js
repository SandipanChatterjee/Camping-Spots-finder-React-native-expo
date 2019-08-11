import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import styles from '../config/styles';
import {FontAwesome,MaterialIcons} from '@expo/vector-icons'
import  NavigationService from '../routes/NavigationService'
const Header = () => {
    return (
        <View style={styles.header}>
            <View style={{flexDirection:'row'}}>
                <View style={{paddingHorizontal: 10,paddingTop:10}}>
                    <FontAwesome name='location-arrow' size={20} color='#FF7F50'/>
                </View>
                <View>  
                    <Text style={{fontSize:12,color:'#CCCCCC'}}>Detected Location</Text>
                    <Text style={{fontWeight : '500',color: '#000000'}}>Northern Island </Text>
                </View>
            </View>
            <View style={{padding : 10}}>
                <TouchableOpacity onPress={() => NavigationService.navigate('Settings')}>
                    <MaterialIcons name='settings' size={20} color='#000000' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

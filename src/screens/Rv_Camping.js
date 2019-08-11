import React, { Component } from 'react'
import { Text, View,Image,ScrollView,TouchableOpacity,Alert,TouchableNativeFeedback } from 'react-native'
import styles from '../config/styles';
import { FontAwesome, MaterialIcons,Ionicons } from '@expo/vector-icons';
import {connect} from 'react-redux'
import MapView,{Marker} from 'react-native-maps'
import {region} from '../mock/region'
import * as action from '../Store/actions/index'
class Rv_Camping extends Component {
    render() {
        let type = 'rv'
        let rvArray = this.props.location.filter((loc)=>{
            return loc.type === type
        })
        console.log('rvArray'+rvArray)
        return (
            <ScrollView>
               <MapView
                    style={styles.map} 
                    initialRegion={region}>
                        {   
                            rvArray.map((marker,id)=>{
                                 return(
                                     <Marker
                                        key={id}
                                        coordinate={marker.latlng}>
                                        {
                                            marker.type === 'rv' ? <Image source={require('../assests/rv.jpeg')} style={{height:30,width:50}}/> : null
                                        }
                                    </Marker>
                                 )
                             })
                        }
                   
                </MapView>
                {
                    rvArray.map((marker,id)=>{
                        return(
                            <View
                                key={id} 
                                style={styles.listContainerTent}>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('BookingDetails',{
                                    name: marker.name,
                                    desc: marker.description,
                                    rating : marker.rating,
                                    distance : marker.distance,
                                    image: marker.image,
                                    price: marker.price

                                })}>
                                    <View style={{borderBottomWidth:1,borderBottomColor:'#D3D3D3',padding:10}}>
                                        <View style={{flexDirection:'row'}}>
                                            <View style={styles.imageContainer}>
                                                <Image
                                                    style={styles.imageStyle}
                                                    source={marker.image} />
                                            </View>
                                            <View style={styles.textContainer}>
                                                <Text style={{fontSize:17,color:"#000000",marginBottom:5}}>{marker.name}</Text>
                                                <Text style={{fontSize:13,color:'#D3D3D3',marginBottom:5}}>{marker.description}</Text>
                                                <View style={{flexDirection:'row'}}>
                                                    <FontAwesome name='star' size={15} color='#FF7F50'/>
                                                    <Text style={{color:'#FF7F50',marginRight:8,textAlignVertical:'center'}}>{marker.rating}</Text>
                                                    <MaterialIcons name='navigation' size={15} color='rgba(236, 100, 75, 1)' />
                                                    <Text style={{color:'rgba(236, 100, 75, 1)',marginRight:8}}>{marker.distance}miles</Text>
                                                    <Ionicons name='ios-pricetag' size={15} color='#000000'/>
                                                    <Text style={{color:'#000000'}}>{marker.price}</Text>
                                                </View> 
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                
                        </View>
                        )
                    })
                }
            </ScrollView>
        )
    }
}
const mapStateToProps = state => {
    return{
        location : state.locations.camping,
    }
}
export default connect(mapStateToProps)(Rv_Camping)
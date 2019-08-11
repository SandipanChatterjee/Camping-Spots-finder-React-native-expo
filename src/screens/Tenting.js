import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import Header from '../components/header';
import styles from '../config/styles';
import { FontAwesome, MaterialIcons,Ionicons } from '@expo/vector-icons';
import {camping} from '../mock/campings'
import Map from '../components/Map';
import {connect} from 'react-redux'
import MapView,{Marker} from 'react-native-maps'
import {region} from '../mock/region'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

class Tenting extends Component {
    render() {
        let type = 'tent'
        const tentArray =  this.props.location.filter(loc => {
            return loc.type === type
        })
        console.log('tentArray'+tentArray)
        return (
            <ScrollView>
                
                <MapView
                    style={styles.map}
                    initialRegion={region}>
                        {   
                            tentArray.map((marker,id)=>{
                                 return(
                                     <Marker
                                        key={id}
                                        coordinate={marker.latlng}>
                                        {
                                            marker.type === 'tent' ? <Image source={require('../assests/tent.png')} style={{height:30,width:30}}/> : null
                                        }  

                                     </Marker>
                                 )
                             })
                        }
                   
                </MapView>
                
                    {/* <View style={{borderBottomWidth:1,borderBottomColor:'#D3D3D3',padding:10}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.imageContainer}>
                                <Image
                                    style={styles.imageStyle}
                                    source={{uri:'https://images.unsplash.com/photo-1506535995048-638aa1b62b77?fit=crop&w=900&h=600&q=130'}} />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={{fontSize:17,color:"#000000",marginBottom:5}}>{camping[1].name}</Text>
                                <Text style={{fontSize:13,color:'#D3D3D3',marginBottom:5}}>{camping[1].description}</Text>
                                <View style={{flexDirection:'row'}}>
                                    <FontAwesome name='star' size={15} color='#FF7F50'/>
                                    <Text style={{color:'#FF7F50',marginRight:8,textAlignVertical:'center'}}>{camping[1].rating}</Text>
                                    <MaterialIcons name='navigation' size={15} color='rgba(236, 100, 75, 1)' />
                                    <Text style={{color:'rgba(236, 100, 75, 1)',marginRight:8}}>{camping[1].distance}miles</Text>
                                    <Ionicons name='ios-pricetag' size={15} color='#000000'/>
                                    <Text style={{color:'#000000'}}>{camping[1].price}</Text>
                                </View> 
                            </View>
                        </View>
                    </View> */}
                    {
                       
                        tentArray.map((marker)=>(
                            <View
                                key={marker.id}
                                style={styles.listContainerTent}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('BookingDetails',{
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
                            
                        ))
                    }
                </ScrollView>
           
        )
    }
}
const mapStateToProps = state => {
    return{
        location : state.locations.camping
    }
}

export default connect(mapStateToProps)(Tenting)


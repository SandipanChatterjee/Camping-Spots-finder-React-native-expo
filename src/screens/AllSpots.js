import React, { Component } from 'react'
import { View,Dimensions,Image,ScrollView,TouchableOpacity,Text } from 'react-native'
import MapView,{Marker} from 'react-native-maps'
import Lists from '../components/lists';
import {connect} from 'react-redux'
import styles from '../config/styles';
import {FontAwesome,MaterialIcons,Ionicons} from '@expo/vector-icons'
const {width,height} = Dimensions.get('screen')

class AllSpots extends Component {
    static navigationOptions = {
        headerTitle : 'All spots'
    }
   
    render() {
        const id = Math.random()
        let region = {
            latitude:   37.79335,
            longitude: -122.4424,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03,
        }
        let type = 'rv'
        let newArray =this.props.location.filter(loc=>{
            return loc.type === type
        })
        let icon
        // newArray.type === 'rv' ? icon = <FontAwesome name="truck" size={18}/> : icon = <Foundation name="mountain" size={18}/>
        console.log('newArray'+newArray)
        return (
            
            <ScrollView>  
                <MapView
                    style={styles.map} 
                    initialRegion={region}>
                        {
                             this.props.location.map((marker,id)=>{
                                 return(
                                     <Marker
                                        key={id}
                                        coordinate={marker.latlng}>


                                    {
                                        marker.type === 'tent' ?
                                        <Image source={require('../assests/tent.png')} style={{height:30,width:30}}/>
                                        :
                                        <Image source={require('../assests/rv.jpeg')} style={{height:30,width:50}}/>
                                    }
                                                    
                                            
                                    </Marker>
                                 )
                             })
                        }
                   
                </MapView>
                {/* <Lists /> */}
                {
                    this.props.location.map((marker,id)=>{
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

export default connect(mapStateToProps)(AllSpots)
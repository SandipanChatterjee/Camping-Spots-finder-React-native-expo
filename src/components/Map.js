// import React, { Component } from 'react'
// import { View,Dimensions} from 'react-native'
// import MapView, { Marker } from 'react-native-maps';
// import styles from '../config/styles'
// import {camping} from '../mock/campings'
// const {width,height} = Dimensions.get('screen')

// export default class campings extends Component {
//     constructor(props){
//         super(props)
//     }
//     rennderMarkers() {
//         console.log('marker')
//     }
//     render() {
//         let region = {
//             latitude:   37.79335,
//             longitude: -122.4424,
//             latitudeDelta: 0.03,
//             longitudeDelta: 0.03,
//         }
//         return (
//             <View>
//                 <View style={styles.map}>
//                     <MapView 
//                         style={{height:height*0.5,width:width}} 
//                         initialRegion = {region}
//                         zoomEnabled>
//                             {/* {
                                
//                                 this.props.showMarker ? 
//                                 //EXP this.props.showMarker.map(()=>{})
//                                 camping.map((marker,id) =>{
//                                         return(
//                                             <Marker
//                                                 key={id}
//                                                 coordinate={marker.latlng}
//                                                 title={marker.title}
//                                                 description={marker.description} />
//                                         )
//                                 }) 
//                                 : 
//                                 null
//                             } */}
//                     </MapView>
//                 </View>
//             </View>
//         )
//     }
// }

// import React, { Component } from 'react'
// import { Text, View,Image,ScrollView,Dimensions } from 'react-native'
// import {camping} from '../mock/campings'
// import styles from '../config/styles';
// import { FontAwesome, MaterialIcons,Ionicons } from '@expo/vector-icons';
// const {width,height} = Dimensions.get('screen')
// export default class lists extends Component {
//     render() {
//         return (
//             <ScrollView style={styles.listContainer}>
//                 <View style={{borderBottomWidth:1,borderBottomColor:'#D3D3D3',padding:10}}>
//                     <View style={{flexDirection:'row'}}>
//                         <View style={styles.imageContainer}>
//                             <Image
//                                 style={styles.imageStyle}
//                                 source={{uri:'https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130'}} />
//                         </View>
//                         <View style={styles.textContainer}>
//                             <Text style={{fontSize:17,color:"#000000",marginBottom:5}}>{camping[0].name}</Text>
//                             <Text style={{fontSize:13,color:'#D3D3D3',marginBottom:5}}>{camping[0].description}</Text>
//                             <View style={{flexDirection:'row'}}>
//                                 <FontAwesome name='star' size={15} color='#FF7F50'/>
//                                 <Text style={{color:'#FF7F50',marginRight:8,textAlignVertical:'center'}}>{camping[0].rating}</Text>
//                                 <MaterialIcons name='navigation' size={15} color='rgba(236, 100, 75, 1)' />
//                                 <Text style={{color:'rgba(236, 100, 75, 1)',marginRight:8}}>{camping[0].distance}miles</Text>
//                                 <Ionicons name='ios-pricetag' size={15} color='#000000'/>
//                                 <Text style={{color:'#000000'}}>{camping[0].price}</Text>
//                             </View> 
//                         </View>
//                     </View>
//                 </View>
//                 {/* ***************************************** */}
//                 <View style={{borderBottomWidth:1,borderBottomColor:'#D3D3D3',padding:10}}>
//                     <View style={{flexDirection:'row'}}>
//                         <View style={styles.imageContainer}>
//                             <Image
//                                 style={styles.imageStyle}
//                                 source={{uri:'https://images.unsplash.com/photo-1506535995048-638aa1b62b77?fit=crop&w=900&h=600&q=130'}} />
//                         </View>
//                         <View style={styles.textContainer}>
//                             <Text style={{fontSize:17,color:"#000000",marginBottom:5}}>{camping[1].name}</Text>
//                             <Text style={{fontSize:13,color:'#D3D3D3',marginBottom:5}}>{camping[1].description}</Text>
//                             <View style={{flexDirection:'row'}}>
//                                 <FontAwesome name='star' size={15} color='#FF7F50'/>
//                                 <Text style={{color:'#FF7F50',marginRight:8,textAlignVertical:'center'}}>{camping[1].rating}</Text>
//                                 <MaterialIcons name='navigation' size={15} color='rgba(236, 100, 75, 1)' />
//                                 <Text style={{color:'rgba(236, 100, 75, 1)',marginRight:8}}>{camping[1].distance}miles</Text>
//                                 <Ionicons name='ios-pricetag' size={15} color='#000000'/>
//                                 <Text style={{color:'#000000'}}>{camping[1].price}</Text>
//                             </View> 
//                         </View>
//                     </View>
//                 </View>
//                  {/* ***************************************** */}
//                  <View style={{borderBottomWidth:1,borderBottomColor:'#D3D3D3',padding:10}}>
//                     <View style={{flexDirection:'row'}}>
//                         <View style={styles.imageContainer}>
//                             <Image
//                                 style={styles.imageStyle}
//                                 source={require('../assests/rv1.jpeg')} />
//                         </View>
//                         <View style={styles.textContainer}>
//                             <Text style={{fontSize:17,color:"#000000",marginBottom:5}}>{camping[2].name}</Text>
//                             <Text style={{fontSize:13,color:'#D3D3D3',marginBottom:5}}>{camping[2].description}</Text>
//                             <View style={{flexDirection:'row'}}>
//                                 <FontAwesome name='star' size={15} color='#FF7F50'/>
//                                 <Text style={{color:'#FF7F50',marginRight:8,textAlignVertical:'center'}}>{camping[2].rating}</Text>
//                                 <MaterialIcons name='navigation' size={15} color='rgba(236, 100, 75, 1)' />
//                                 <Text style={{color:'rgba(236, 100, 75, 1)',marginRight:8}}>{camping[2].distance}miles</Text>
//                                 <Ionicons name='ios-pricetag' size={15} color='#000000'/>
//                                 <Text style={{color:'#000000'}}>{camping[2].price}</Text>
//                             </View> 
//                         </View>
//                     </View>
//                 </View>
//                  {/* ***************************************** */}
//                  <View style={{borderBottomWidth:1,borderBottomColor:'#D3D3D3',padding:10}}>
//                     <View style={{flexDirection:'row'}}>
//                         <View style={styles.imageContainer}>
//                             <Image
//                                 style={styles.imageStyle}
//                                 source={require('../assests/tent1.jpeg')} />
//                         </View>
//                         <View style={styles.textContainer}>
//                             <Text style={{fontSize:17,color:"#000000",marginBottom:5}}>{camping[3].name}</Text>
//                             <Text style={{fontSize:13,color:'#D3D3D3',marginBottom:5}}>{camping[3].description}</Text>
//                             <View style={{flexDirection:'row'}}>
//                                 <FontAwesome name='star' size={15} color='#FF7F50'/>
//                                 <Text style={{color:'#FF7F50',marginRight:8,textAlignVertical:'center'}}>{camping[3].rating}</Text>
//                                 <MaterialIcons name='navigation' size={15} color='rgba(236, 100, 75, 1)' />
//                                 <Text style={{color:'rgba(236, 100, 75, 1)',marginRight:8}}>{camping[3].distance}miles</Text>
//                                 <Ionicons name='ios-pricetag' size={15} color='#000000'/>
//                                 <Text style={{color:'#000000'}}>{camping[3].price}</Text>
//                             </View> 
//                         </View>
//                     </View>
//                 </View>
//             </ScrollView>
//         )
//     }
// }

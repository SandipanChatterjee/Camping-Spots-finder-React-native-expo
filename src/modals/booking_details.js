import React, { Component } from 'react';
import { View, Text,Modal,TouchableOpacity,Image,Alert } from 'react-native';
import { FontAwesome,MaterialIcons, Entypo,Ionicons } from '@expo/vector-icons';
import styles from '../config/styles';

export default class BookingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showModal :  true
    };
  }

  closeModalHandler = (visible) =>{
      this.setState({
          showModal : visible
      })
      this.props.navigation.goBack()
  }

  onBookHandler = () =>{
    Alert.alert(
      'Please login to continue',
      '',
      [
        {text: 'No', onPress : () => this.props.navigation.goBack()},
        {text: 'Yes', onPress : () => this.props.navigation.navigate('Login')}
       
      ],
      {cancelable : false}
    )
    
  }

  render() {
    const {navigation} = this.props
    const name = navigation.getParam('name');
    const desc = navigation.getParam('desc');
    const rate = navigation.getParam('rating');
    const distance = navigation.getParam('distance')
    const img = navigation.getParam('image');
    const price = navigation.getParam('price')
    return (
      <View>
          <Modal
            visible={this.state.showModal}
            // animationType="slide"
            style={styles.modalContainer}>
                  <View style={styles.modalImageContainer}>
                    <Image
                      source={img}
                      style={styles.modalImage}/>
                  </View>
                  <View style={styles.modalTextContainer}>
                    <Text style={{paddingHorizontal: 20,paddingVertical: 10,fontWeight: '500',fontSize: 30,}}>{name}</Text>
                    <Text style={{paddingHorizontal: 20,paddingVertical: 10,fontWeight: '500'}}>{desc}</Text>
                    <View style={{flexDirection: 'row',justifyContent:'space-between',paddingHorizontal: 20,paddingVertical: 10}}>
                      <View style={{flexDirection: 'row'}}>  
                        <Text style={{marginVertical: 5}}>
                          <FontAwesome name='star' size={15} color='#FF7F50'/>
                          <Text style={{marginRight: 10,}}>{rate}</Text>
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginVertical: 5}}>
                          <MaterialIcons name='navigation' size={15} color='rgba(236, 100, 75, 1)' />
                          <Text style={{marginRight: 10}}>{distance}</Text>
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginVertical:5}}>
                          <Ionicons name='ios-pricetag' size={15} color='#000000'/>
                          <Text>{price}</Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.modalFooterContainer}>
                    <View style={{flexDirection: 'row',justifyContent:'space-between',padding: 10}}>
                      <TouchableOpacity onPress={() => {this.closeModalHandler(!this.state.showModal)}}>
                        <View style={styles.closeModal}>
                            <Text style={{marginHorizontal: 20,}}>  
                              <Entypo name='circle-with-cross' size={20} color="#FF8C00"/>
                            </Text>
                            <Text style={{justifyContent:'center',textAlign:'center'}}>Go Back</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.onBookHandler()}>
                        <View style={styles.closeModal}>
                          <Text style={{marginHorizontal: 20,}}>  
                            <MaterialIcons name='check-circle' size={20} color="#FF8C00"/>
                          </Text>
                            <Text style={{justifyContent:'center',textAlign:'center'}}>Book</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                
                
          </Modal>
      </View>
    );
  }
}

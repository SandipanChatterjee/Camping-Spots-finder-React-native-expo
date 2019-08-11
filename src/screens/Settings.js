import React, { Component } from 'react'
import { Text, View,TouchableOpacity,Switch } from 'react-native'
import { FontAwesome, MaterialIcons, Foundation } from '@expo/vector-icons';
import styles from '../config/styles';
import {connect} from 'react-redux'
import * as action from '../Store/actions/index'
import { ScrollView } from 'react-native-gesture-handler';

class Settings extends Component {

    render() { 
        const {
            sort ,
            type,
            price ,
            spotsFull, 
            spotsRated, 
            spotsFree,  
        }  = this.props.filters
        // console.log(sort+" "+type)
        return (
            <ScrollView style={styles.settingsContainer}>
                <View style={{margin : 10}}>
                <View style={{flexDirection : 'row',justifyContent:'space-between',paddingBottom:10,marginBottom:20}}>
                   <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <MaterialIcons name='keyboard-backspace' size={20}/>
                   </TouchableOpacity>
                   <Text> Filter </Text>
                   <TouchableOpacity onPress={() => this.props.navigaiton.navigate('/searchedItems')}>
                    <FontAwesome name='search' size={20} />
                   </TouchableOpacity>
                 </View>
                <View style={{paddingBottom:10}}>
                    <Text>Sort By</Text>
                </View>
                <View style={styles.sortBy}>
                    <TouchableOpacity
                        style={[sort === 'distance' ? styles.activeBackground : null]}
                        onPress={() => this.props.sortBy('distance')}>
                            <Text 
                                style={[sort === 'distance' ? styles.activeText : null]}>Distance</Text></TouchableOpacity>
                    
                    <TouchableOpacity
                        style={[sort === 'rating' ? styles.activeBackground :  null]}
                        onPress={() => this.props.sortBy('rating')}>
                            <Text
                                style={[sort === 'rating' ? styles.activeText : null]}>Rating</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style={[sort === 'review' ? styles.activeBackground : null]}
                        onPress={() => this.props.sortBy('review')}>
                            <Text
                                style={[sort === 'review' ? styles.activeText : null]}>Review</Text>
                    </TouchableOpacity>
                </View>
                <View style={{borderBottomWidth: 1,borderColor: '#EAEAED',marginVertical : 20}}></View>
                <View style={{marginBottom:10}}>
                    <Text>Type</Text>
                </View>
                <View style={styles.type}>
                    <TouchableOpacity
                        style={[styles.type1, type === 'all' ? styles.activeBackground : null]}
                        onPress={() => {this.props.typeEl('all')}}>
                        <View>
                            <View 
                                style={[{flexDirection:'row'}]}>
                                <Foundation name='mountains' size={24} />
                                <FontAwesome name='truck' size={24}/>
                            </View>
                            <Text 
                                style={[{alignItems:'center',justifyContent:'center'},type === 'all' ? styles.activeText : null]}>All</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.type2,type === 'tenting' ? styles.activeBackground : null]}
                        onPress={()=>{this.props.typeEl('tenting')}}>
                        <Foundation name='mountains' size={24}/>
                        <Text
                            style={[type === 'tenting' ? styles.activeText : null]}>Tenting</Text>    
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.type3,type === 'rv' ? styles.activeBackground :  null]}
                        onPress={()=>{this.props.typeEl('rv')}}>
                        <FontAwesome name='truck' size={24}/>
                        <Text
                            style={[type === 'rv' ? styles.activeText : null]}>RV Camping</Text>
                    </TouchableOpacity>

                </View>
                <View style={{borderBottomWidth: 1,borderColor: '#EAEAED',marginVertical : 20}}></View>
                <View>
                    <View style={{paddingBottom:10}}>
                        <Text>Price</Text>
                    </View>
                    <View style={styles.price}>
                        <TouchableOpacity
                            style={[price === 'free' ? styles.activeBackground : null]}
                            onPress={() =>{this.props.priceEl('free')}}>
                                <Text
                                    style={[price === 'free' ? styles.activeText : null]}>Free</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[price === '500' ? styles.activeBackground : null]}
                            onPress={() => {this.props.priceEl('500')}}>
                            <Text
                                style={[price === '500' ? styles.activeText : null]}>
                                    <Text>$</Text>500</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                             style={[price === '1000' ? styles.activeBackground : null]}
                             onPress={() => {this.props.priceEl('1000')}}>
                                 <Text
                                 style={[price === '1000' ? styles.activeText : null]}><Text>$</Text>1000</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                           style={[price === '1500' ? styles.activeBackground : null]}
                           onPress={() => {this.props.priceEl('1500')}}>
                            <Text
                                style={[price === '1500' ? styles.activeText : null]}><Text>$</Text>1500</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{borderBottomWidth: 1,borderColor: '#EAEAED',marginVertical : 20}}></View>
                <View>
                    <View style={{marginBottom:40}}>
                        <Text>More Options</Text>
                    </View>
                    <View style={styles.moreOptions}>
                        <Text style={{color:'#000000',fontWeight:'500'}}>Show spots are full</Text>
                        <Switch
                            value = {spotsFull}
                            onValueChange={() => {this.props.spotsFull(!spotsFull)}}
                            ios_backgroundColor="#EAEAED"
                            trackColor={{false: "#EAEAED", true: "#FF7657"}} />
                    </View>
                    <View style={styles.moreOptions}>
                        <Text style={{color:'#000000',fontWeight:'500'}}>Show only highly rated spots</Text>
                        <Switch
                            value = {spotsRated}
                            onValueChange={() => {this.props.spotsRated(!spotsRated)}}
                            ios_backgroundColor="#EAEAED"
                            trackColor={{false: "#EAEAED", true: "#FF7657"}} />
                    </View>
                    <View style={styles.moreOptions}>
                        <Text style={{color:'#000000',fontWeight:'500'}}>Show only Free Spots</Text>
                        <Switch
                            value = {spotsFree}
                            onValueChange={() => {this.props.spotsFree(!spotsFree)}}
                            ios_backgroundColor="#EAEAED"
                            trackColor={{false: "#EAEAED", true: "#FF7657"}} />
                    </View>
                </View>
                </View>
            </ScrollView>
        )
    }
}
const mapStateToProps = state =>{
    return{
        filters :  state.filter.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        sortBy : (activeElement) => dispatch(action.sortBy(activeElement)),
        typeEl : (activeElement) => dispatch(action.typeEl(activeElement)),
        priceEl : (activeElement) => dispatch(action.price(activeElement)),
        spotsFull :  (activeElement) => dispatch(action.spotFull(activeElement)),
        spotsRated :  (activeElement) => dispatch(action.spotRated(activeElement)),
        spotsFree:  (activeElement) => dispatch(action.spotFree(activeElement))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Settings)

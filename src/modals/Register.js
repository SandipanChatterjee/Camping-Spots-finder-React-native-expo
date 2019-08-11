import React, { Component } from 'react'
import { 
    Text,
    View,
    Modal,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
 } from 'react-native'
import {Header} from 'react-navigation'
import styles from '../config/styles'
import {FontAwesome,Entypo,MaterialCommunityIcons} from '@expo/vector-icons'
import {connect} from 'react-redux'
import * as action from '../Store/actions/index'
import { StackActions } from 'react-navigation';
class Register extends Component {
    state={
        email : '',
        password : '',
        cpassword : '',
        showModal :  true,
        passwordVisible : false,
        iconName : 'eye',
        accountExist : false,
    }
    closeModalHandler = (visible) => {
        // this.setState({
        //   showModal : !visible
        // })
        this.props.navigation.navigate('All_Spots')
    }
    onPasswordVisiblityHandler = () => {
        let iconName = this.state.passwordVisible ? 'eye' : 'eye-off'
        this.setState(prevState => {
            return{
                passwordVisible : !(prevState.passwordVisible),
                iconName : iconName
            }
        })
    }
    onRegisterHandler = (email,password,cpassword,accountExist) =>{
        if(password === '' || cpassword === '' || email === ''){
            Alert.alert('Please enter all the fields')
        }
        else if(password !== cpassword){
            Alert.alert('Password and Confrim Password do not match.')
        }
        else{
            this.props.onRegister(email,password,accountExist)
        }
        
    }
    componentDidUpdate(){
        if(this.props.token){
            this.props.navigation.navigate('Welcome')
        }
    }
    render() {
       
        return (   
                    <Modal
                        visible = {this.state.showModal}>
                        <KeyboardAvoidingView
                            // keyboardVerticalOffset = {Header.HEIGHT + 20}
                            style = {{ flex: 1 }} 
                            behavior="padding">
                            <View style={styles.loginContainer}>
                            <Text style={{fontWeight: 'bold',marginBottom: 20,marginTop: 10,fontSize: 30,color:'#818181'}}>REGISTER </Text>
                            <View>
                                <Text style={styles.loginText}>EMAIL</Text>
                                <TextInput 
                                    style={styles.inputBox}
                                    placeholder = "EMAIL"
                                    onChangeText = {(email)=>{this.setState({email:email})}} 
                                    />
                            </View>
                            <View>
                                <Text style={styles.loginText}>PASSWORD</Text>
                                <View style={styles.inputBox}>
                                    <TextInput
                                        style={{fontSize:20}}
                                        secureTextEntry = {!this.state.passwordVisible}
                                        placeholder="Password"
                                        onChangeText = {(password) =>{this.setState({password:password})}}/>
                                    <TouchableOpacity
                                        onPress={() => this.onPasswordVisiblityHandler()}>
                                        <MaterialCommunityIcons name={this.state.iconName} size={20} />
                                    </TouchableOpacity>
                                </View>
                            
                            </View>
                            <View>
                                <Text style={styles.loginText}>CONFIRM PASSWORD</Text>
                                <View style={styles.inputBox}>
                                    <TextInput
                                        style={{fontSize:20}}
                                        secureTextEntry = {!this.state.passwordVisible}
                                        placeholder="Password"
                                        onChangeText = {(cpassword) =>{this.setState({cpassword:cpassword})}}/>
                                    <TouchableOpacity
                                        onPress={() => this.onPasswordVisiblityHandler()}>
                                        <MaterialCommunityIcons name={this.state.iconName} size={20} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{marginBottom:10}}>
                                <TouchableOpacity
                                    onPress = {() => this.onRegisterHandler(this.state.email,this.state.password,this.state.cpassword,this.state.accountExist)}
                                    style={{borderWidth: 1,padding: 15,backgroundColor: '#0896d8',borderColor: '#0896d8',}}>
                                    <Text style={{justifyContent : 'center',alignSelf: 'center',fontWeight:'500',color:'white',fontSize:20}}>REGISTER</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => this.closeModalHandler(this.state.showModal)}>
                                    <View style={{marginTop:20}}>
                                        <View style={{justifyContent:'center',alignSelf: 'center',}}>
                                        <Entypo name="circle-with-cross" size={40} color="red"/>
                                        </View>
                                        <Text style={{justifyContent:'center',alignSelf: 'center',}}>Cancel Booking</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            </View>
                        </KeyboardAvoidingView>
                    </Modal>
                   
        )
    }
}
const mapStateToProps = state => {
    return{
        token : state.auth.idToken !== null,
        loading : state.auth.loading
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onRegister : (email,password,accountExist) => dispatch(action.auth(email,password,accountExist))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Register)
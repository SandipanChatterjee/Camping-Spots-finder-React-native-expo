import React, {Component } from 'react';
import { View, Text,TextInput,Modal,TouchableOpacity,KeyboardAvoidingView,Alert} from 'react-native';
import {FontAwesome, Entypo,MaterialCommunityIcons} from '@expo/vector-icons'
import styles from '../config/styles';
import {withNavigation} from 'react-navigation'
import {connect} from 'react-redux'
import * as action from '../Store/actions/index'
// import { TouchableOpacity } from 'react-native-gesture-handler';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : "",
      showModal : true,
      iconName : 'eye',
      passwordVisible : false,
      accountExist : true 
    };
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

  onLoginHandler = (email,password,accountExist) => {
   
    if(email !== '' && password !== ''){
      this.props.onLogin(email,password,accountExist)
    }else{
      if(email === ''){
        Alert.alert('Please provie email')
      }else{
        Alert.alert('Please provide password')
      }
    }

  }


  closeModalHandler = (visible) => {
    // this.setState({
    //   showModal : !visible
    // })
    this.props.navigation.navigate('All_Spots')
  }


  componentDidUpdate(){
      // let token = !(this.props.token)
      if(this.props.token){
        console.log('inside token')
        this.props.navigation.navigate('Welcome',{
          email : this.props.email
      })
    }
  }
  
  // }
  // shouldComponentUpdate(nextState,nextProps){
  //   console.log("nextState"+nextState)
  //   console.log("this state"+this.state)
  //   return(this.state === nextState ? false : true)
  // }

  render() {
  //  console.log(`Token ${this.props.token}`)
    return (
      
        <Modal
            visible = {this.state.showModal}>
            <View style={styles.loginContainer}>
              <Text style={{fontWeight: 'bold',marginBottom: 20,marginTop: 10,fontSize: 30,color:'#818181'}}>SIGN IN </Text>
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
              <View style={{flexDirection: 'row',justifyContent: 'space-between',marginBottom:18}}>
                  <Text>
                    <FontAwesome name='check-square' size={20} color='#04a9f4'/>
                    <Text>Remember Me</Text>
                  </Text>
                  <Text style={{color:'#1aacf5'}}>Forgot</Text>
              </View>
              <View style={{marginBottom:10}}>
                <TouchableOpacity
                  onPress = {() => this.onLoginHandler(this.state.email,this.state.password,this.state.accountExist)}
                  style={{borderWidth: 1,padding: 15,backgroundColor: '#0896d8',borderColor: '#0896d8',}}>
                  <Text style={{justifyContent : 'center',alignSelf: 'center',fontWeight:'500',color:'white',fontSize:20}}>SIGN IN</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row',alignSelf: 'center',}}>
                <Text>Dont have a account </Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')}>
                  <Text style={{color:'blue',borderBottomWidth:1}}>Register here.!</Text>
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
        </Modal>
    );
  }
}

const mapStateToProps = state => {
  return{
    token : state.auth.idToken !== null,
    email : state.auth.email,
  }
}
const mapDispatchToProps = dispatch => {
  return{
    onLogin : (email,password,accountExist) => dispatch(action.auth(email,password,accountExist))
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Login)
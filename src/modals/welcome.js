import React,{Component} from 'react'
import { View, Text,Modal,TouchableOpacity,Dimensions } from 'react-native'
import {connect} from 'react-redux'
import * as action from '../Store/actions/index'
const {width,height} = Dimensions.get('screen')
class Welcome extends Component {
    state={
        showModal : true
    }
    onShowModalHandler = () => {
        this.props.onLogout()
        console.log('logout')
        // this.setState({
        //     showModal : false
        // })
        this.props.navigation.navigate('All_Spots')
    }

    render(){
        const {navigation} = this.props;
        const email = navigation.getParam('email')
        return (
            <Modal
                style={{width: width,height: height}}
                visible={this.state.showModal}
                onRequestClose = {() => this.props.navigation.navigate('All_Spots')}>
                <View
                    style={{justifyContent : 'center',alignSelf:'center',marginVertical:50}}>
                    <Text>welcome : {email}</Text>
                    <TouchableOpacity
                        style={{
                            borderWidth : 1,
                            backgroundColor : '#0896d8',
                            justifyContent: 'center'
                        }} 
                        onPress={() => this.onShowModalHandler()}>
                        <Text style={{color : 'white',textAlign: 'center'}}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }
   
}
const mapDispatchToProps = (dispatch) =>{
    return{
        onLogout : () => dispatch(action.authLogout())
    }
}
export default connect(null,mapDispatchToProps) (Welcome)

import * as actionTypes from  '../actions/actionTypes'
import {Alert} from 'react-native'
export const authStart = () =>{
    return{
        type : actionTypes.AUTH_START
    }
    
}

export const authFail = (error) =>{
    return{
        type : actionTypes.AUTH_FAIL,
        error : error
    }
    
}

export const authSuccess = (userId,idToken,email) => {
    return{
        type : actionTypes.AUTH_SUCCESS,
        userId: userId,
        idToken : idToken,
        email : email,
    }
}


export const auth = (email,password,accountExist) =>{
    return dispatch => {
        dispatch(authStart())
        const datas = {
            email : email,
            password : password,
            returnSecureToken  : true
        }
        let url
        if(accountExist){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAma8ZEfppbM-YKjMIcZ79fw_AkH3s_SpU'
        }else{
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAma8ZEfppbM-YKjMIcZ79fw_AkH3s_SpU'
        }
        fetch(url,{
            method : 'POST',
            header:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datas)
        })
        .then(response => response.json())
        .then(res => {
            console.log(res)
            if(res.error){
                Alert.alert(res.error.message)
            }
            else{
                dispatch(authSuccess(res.localId,res.IdToken,res.email))
            }
        })
        .catch(error => {
            dispatch(authFail(error))
        })
    }
}


export const authLogout = () =>{
    return{
        type : actionTypes.AUTH_LOGOUT
    }
}
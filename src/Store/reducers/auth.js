// import { Switch } from "react-native-gesture-handler";

import * as actionTypes from '../actions/actionTypes' 
const INITIAL_STATE = {
    email : null,
    userId : null,
    idToken : null,
    loading : false,
    error : null,
}

const reducer = (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case  actionTypes.AUTH_START : 
            return{
                ...state,
                loading : true
            }
        case actionTypes.AUTH_FAIL : 
            return{
                ...state,
                error : action.error
            }
        case actionTypes.AUTH_SUCCESS :
            return{
                ...state,
                email :  action.email,
                userId : action.userId,
                idToken : action.idToken,
                loading : false,
                error : null
            }
        case actionTypes.AUTH_LOGOUT:
            return{
                ...state,
                email : null,
                userId : null,
                idToken : null,
                loading : false,
                error : null
            }
        default :
           return state
    }
}

export default reducer
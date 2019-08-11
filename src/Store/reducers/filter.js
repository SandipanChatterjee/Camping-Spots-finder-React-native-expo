import * as actionTypes from '../actions/actionTypes'

const INITAIL_STATE = {
    filters : {
        sort : 'distance',
        type : 'all',
        price : 'free',
        spotsFull : true,
        spotsRated : true,
        spotsFree :  false
    },
    loading : false
}

const reducer = (state=INITAIL_STATE,action) => {
    switch(action.type){
        case actionTypes.SORT_BY :
            return{
                ...state,
                filters:{
                    ...state.filters,
                    sort : action.sort,
                }
            }
        case actionTypes.TYPE_EL :
            return{
                ...state,
                filters:{
                    ...state.filters,
                    type : action.typeElement,
                }
            }
        case actionTypes.PRICE :{
            return{
                ...state,
                filters:{
                    ...state.filters,
                    price : action.price
                }
            }
        }
        case actionTypes.SPOT_FULL :{
            return{
                ...state,
                filters:{
                    ...state.filters,
                    spotsFull : action.spotsFull
                }
            }
        }
        case actionTypes.SPOT_RATED :{
            return{
                ...state,
                filters:{
                    ...state.filters,
                    spotsRated : action.spotsRated
                }
            }
        }
        case actionTypes.SPOT_FREE :{
            return{
                ...state,
                filters:{
                    ...state.filters,
                    spotsFree : action.spotsFree
                }
            }
        }
        default:
            return state
    }
    
}

export default reducer
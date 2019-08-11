import * as actionTypes  from './actionTypes'

export const sortBy = (activeElement) => {
    return{
        type : actionTypes.SORT_BY,
        sort : activeElement
    }
}

export const typeEl = (activeElement) => {
    return{
        type : actionTypes.TYPE_EL,
        typeElement : activeElement
    }
}

export const price = (activeElement) => {
    return{
        type :  actionTypes.PRICE,
        price : activeElement
    }
}

export const spotFull = (spot) =>{
    return{
        type: actionTypes.SPOT_FULL,
        spotsFull : spot
    }
}

export const spotRated = (spot) =>{
    return{
        type: actionTypes.SPOT_RATED,
        spotsRated : spot
    }
}

export const spotFree = (spot) =>{
    return{
        type: actionTypes.SPOT_FREE,
        spotsFree : spot
    }
}


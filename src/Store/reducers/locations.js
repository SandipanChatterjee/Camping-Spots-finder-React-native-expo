import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE={
    camping : [
        {
            id: 1,
            type: 'tent',
            name: 'Lake Florida',
            description: 'Popular spot for local trekkers.',
            rating: 4.9,
            distance: 2.9,
            image: require('../../assests/lake_florida.jpg'),
            price: 500,
            latlng: {
                latitude: 37.79345,
                longitude: -122.4494,
              }
        },
        {
            id: 2,
            type: 'rv',
            name: 'Camping Paradise',
            description: 'Popular spot for local trekkers.',
            rating: 4.9,
            distance: 2.9,
            price: 'Free',
            image: require('../../assests/camping_paradise.jpeg'),
            latlng: {
                latitude: 37.79385,
                longitude: -122.4354,
              }
        },
        {
            id: 3,
            type: 'rv',
            name: 'Motorcoach Resort',
            description: 'This is for all haters.',
            rating: 4.9,
            distance: 2.9,
            price: 'Free',
            image: require('../../assests/rv1.jpeg'),
            latlng: {
                latitude: 37.79565,
                longitude: -122.4354,
              }
        },
        {
            id: 4,
            type: 'tent',
            name: 'Bahia Honda State Park',
            description: 'This is for all lovers.',
            rating: 4.9,
            distance: 2.9,
            price: 1500,
            image: require('../../assests/tent1.jpeg'),
            latlng: {
                latitude: 37.79335,
                longitude: -122.4424,
            }
        }

    ]
}

export default reducer =(state=INITIAL_STATE,action) =>{
    switch(action.type){
        case actionTypes.SET_ALL_MAPMARKER : 
            return{
                ...state,
                camping : [{
                    ...state
                }]
            }        
        default : return state
    }
}
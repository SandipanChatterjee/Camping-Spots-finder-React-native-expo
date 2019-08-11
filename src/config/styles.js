import {StyleSheet,Dimensions} from 'react-native'
const {width,height} = Dimensions.get('screen')
const styles = StyleSheet.create({
    header : {
        marginTop : 20,
        // marginBottom : 20,
        width : width,
        height : height*0.1,
        flexDirection : "row",
        justifyContent: 'space-between',
        // padding : 20
    },
    map: {
        // ...StyleSheet.absoluteFillObject,
        // flex : 1,
        height : height * 0.5,
        width : width
    },
    listContainer: {
        // top:450
        height : height,
        width : width
    },
    listContainerTent:{
        height : height*0.255,
        width : width,
        // marginBottom : 10
    },  
    imageStyle : {
        width: 150,
        height: 150,
        borderRadius : 4,
        borderWidth : 1
    },
    imageContainer: {
        paddingHorizontal: 20,
        // borderWidth : 1
    },
    textContainer :{
        // borderWidth: 1,
        paddingHorizontal : 20,
        paddingVertical : 25,
        borderBottomColor: 'black',
    },
    settingsContainer : {
        height : height,
        width: width,
    },
    sortBy : {
        flexDirection:'row',
        borderWidth:1,
        padding : 10,
        borderRadius:10,
        justifyContent:'space-between',
        borderColor:'rgba(241, 90, 34, 1)',
        paddingHorizontal:40
        // backgroundColor : 'rgba(241, 90, 34, 1)'
    },
    type:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:10,
        justifyContent:'space-between',
        borderColor:'rgba(241, 90, 34, 1)',
    },
    sortBy_Price : {
        
    },
    type1:
    {
        width:width*0.3,
        height:100,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderTopStartRadius:9,
        borderBottomStartRadius:10
    },
    type2:{
        width:width*0.3,
        height:100,
        alignItems : 'center',
        justifyContent:'center'
    },
    type3:{
        width:width * 0.3,
        height:100,
        alignItems : 'center',
        justifyContent:'center',
        borderTopEndRadius:9,
        borderBottomEndRadius:10
    },
    price:{
        flexDirection : 'row',
        borderWidth:1,
        padding : 10,
        borderRadius:10,
        justifyContent:'space-between',
        borderColor:'rgba(241, 90, 34, 1)',
        paddingHorizontal:40
    },
    moreOptions:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom :20,
        
    },
    activeBackground:{
        backgroundColor : 'rgba(241, 90, 34, 1)'
    },
    activeText:{
        color : '#fff'
    },

    //Modal
    modalContainer:{
        // flex :  1,
        // marginTop : height * 0.01
    },  
    modalImageContainer:{
        // padding : 10
    },  
    modalImage:{
        height: height * 0.5,
        width : width
        
    },
    modalTextContainer:{
        height: height * 0.2,
        width :width,
        marginVertical: 10,
        // borderWidth : 1
    },
    modalFooterContainer:{
        height: height * 0.1,
        width : width,
        marginVertical: 10,
        // borderWidth: 1,
    },
    closeModal:{
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth : 1,
        padding: 10,
        backgroundColor : "#FFC04C"
    },
    // login
    loginContainer:{
        height : height,
        // width : width ,
        paddingHorizontal: 20,
        backgroundColor:'#f1f8fe',
        // justifyContent:'flex-start'
    },
    loginText:{
        fontSize: 20,
        color:'#b0b6ba',
        marginBottom:7,
        fontWeight: '500',
    },
    inputBox:{
        flexDirection : 'row',
        borderWidth:1,
        borderColor: '#7c7e80',
        marginBottom:20,
        paddingHorizontal:20,
        paddingVertical: 18,
        fontSize: 20,
        justifyContent: 'space-between'
    }
});

export default styles
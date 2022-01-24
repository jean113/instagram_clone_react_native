import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({

    container:{
        backgroundColor: 'white'
    },

    header:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:15
    },

    image:{
        width:80,
        height:80,
        borderRadius:40,
        marginRight:10
    },

    text:{
        color:'black',
        fontSize:14
    },

    profileContainer:
    {
        flexDirection:'row',
        alignItems:'center'
    },

    postImage:
    {
        width: width,
        height:320,
    },

    footer:
    {
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        padding:15
    },

    iconFooter:
    {
        marginRight:12
    },


    miniAvatar:
    {
        width:20,
        height:20,
        borderRadius:20,
        borderColor: 'white',
        borderWidth:2
    },

    likeNames:
    {
        fontSize:12,
        color:'black',
        marginLeft:15
    },

    bold:
    {
        fontWeight: 'bold'
    },

    likeNamesContainer:
    {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorinzotal:15,
        paddingVertical:5,
        alignItems:'center'
    },

    descriptionContainer:
    {
        backgroundColor: 'white',
        paddingHorinzotal:15,
        paddingVertical:5,
    },  

    description:
    {
        fontSize:12,
        color:'black',
        marginLeft:15,
        lineHeight:16
    },

    hashtags:
    {
        color: '#0569FF'
    }

});
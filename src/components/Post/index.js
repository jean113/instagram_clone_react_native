import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Post = ({picture, description, name, image, hashtags}) =>
{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profileContainer}>
                    <Image style={styles.image} resizeMode="cover" source={picture}/>
                    <Text style={styles.text}>{name}</Text>
                </View>
                <Pressable>
                    <IconEntypo name="dots-three-horizontal" size={18} color="black"/>
                </Pressable>
            </View>

            <View>
                <Image  style={styles.postImage} resizeMode='cover' source={image}/>
            </View>

            <View style={styles.footer}>
                <IconIonicons name="heart-outline" size={24} color="black" style={styles.iconFooter}/>
                <IconIonicons name="chatbubble-outline" size={24} color="black" style={styles.iconFooter}/>
                <IconIonicons name="paper-plane-outline" size={24} color="black" style={styles.iconFooter}/>
            </View>

            <View style={styles.likeNamesContainer}>
                <Image style={[styles.miniAvatar, {zIndex:1}]} resizeMode='cover' source={require("../../assets/profile-2.jpg")}/>

                <Image style={[styles.miniAvatar, {marginLeft:-8}]} resizeMode='cover' source={require("../../assets/profile-3.jpg")}/>

                <Text style={styles.likeNames}>
                    Curtido por <Text style={styles.bold}>Fulano2</Text> e{' '} <Text style={styles.bold}>outras pessoas</Text>
                </Text>

            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>

                    <Text style={styles.bold}>{name} </Text>

                    {description}

                    {hashtags.map( (item, index) => 
                        <Text style={styles.hashtags} key={index}>
                            #{item}
                        </Text>
                    )}

                   
                
                </Text>
            </View>

        </View>    
    )
}

export default Post;
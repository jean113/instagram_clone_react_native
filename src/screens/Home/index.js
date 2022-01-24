import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '../../components/Header';
import Post from '../../components/Post';
import styles from './styles';

const Home = () =>
{
    return(
        <View>
            <Header/>

            <ScrollView  style={{backgroundColor:'white'}} contentContainerStyle={{paddingBottom:200}}>

                <Post 
                    picture={require("../../assets/profile-1.jpg")}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis dictum nulla 
                    nec pellentesque. Morbi non lorem sed neque mollis vulputate ac eget velit. Nunc quis venenatis sapien. 
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi quis tellus sem. Duis sed nulla vel 
                    nisi ultricies volutpat. Nulla vitae cursus tortor. Maecenas varius convallis dolor, eget consequat diam 
                    blandit in."
                    name="maria_silva"
                    image={require("../../assets/post-1.jpg")}
                    hashtags={['instalover','likes','meuappinsta']}
                    
                />

                <Post 
                    picture={require("../../assets/profile-2.jpg")}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis dictum nulla 
                    nec pellentesque. Morbi non lorem sed neque mollis vulputate ac eget velit. Nunc quis venenatis sapien."
                    name="carla_pereira"
                    image={require("../../assets/post-2.jpg")}
                    hashtags={['vidaboa','','']}
                    
                />

                <Post 
                    picture={require("../../assets/profile-3.jpg")}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    name="gabi_lima"
                    image={require("../../assets/post-3.jpg")}
                    hashtags={['','','']}
                    
                />

            </ScrollView>

        </View>
    );
}

export default Home;
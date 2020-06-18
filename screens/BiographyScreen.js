import React, { Component } from 'react';
import { View, Text, ScrollView} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader';


export default class BiographyScreen extends Component{
render(){
    return(
<View style={{flex:1}}>
<MyHeader title="Biography" navigation ={this.props.navigation}/>
   <View>
      
<ScrollView>
<Text style = {{fontSize: 13, marginTop: 20, justifyContent: 'center', textAlign: 'center', marginLeft: 20, marginRight: 20}}>
    My dad is more than a superhero who has faced every challenge every single day and has accepted the reality of his life without 
    regretting a single day. Being a 100% handicap person on losing his hearing due to a road accident, life has given him the most challenging
    time. Being a hearing impaired person he is still hear to all my wishes even when I don't ask him to fulfill. Before my words he provide the best of everything.
    And so being my dad's daughter I also want to give him some relief. As my dad have experience of 24 years of an insurance agent and hence he 
    cannot talk with all his customers I have made this app so that the customer can send his policy details and so he can review the details easily and provide his
    customer with the best of premium quotation. This app will help him a lot to continue his business during the unbreakble circumstances of COVID -19.
    Even the app will be beneficial for him in future also. My dad has felt everything very deeply. He is an incredibly sensitive person and cares a lot for everyone.
    God has taken his hearing from him not the sense of power from him.
    My father is neither an anchor to hold me back nor a sail to take me there, but a guiding light whose love shows me the way.

    I am my dad's hope and will prove it through my skills provided by WhiteHat Jr. Not a piece can come and cross my way when my dad is with me.
</Text>
<Text style = {{fontSize: 20, marginTop: 10, justifyContent: 'center', alignItems: 'center', color: '#ff4040', textAlign: 'center', marginLeft: 20, marginRight: 20}}>
    This is the first father's day that I am gifting him something. Surely this will make him proud.
</Text>
<Text style = {{fontSize: 30, marginTop: 15, justifyContent: 'center', alignItems: 'center', color: '#ff1493', textAlign: 'center', marginLeft: 20, marginRight: 20}}>
    HAPPY FATHER'S DAY
</Text>


</ScrollView>
      
   </View>
</View>
    )
}
}
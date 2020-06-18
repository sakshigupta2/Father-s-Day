import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class BookRequestScreen extends Component{
  constructor(){
    super();
    this.state ={
      userId : firebase.auth().currentUser.email,
      fullName:"",
      vehicleNumber:"",
      modelYear: "",
      phoneNumber: "",
      vehicleModel:"",
      lastYearClaim: "",
      previousInsurar: "",
      policyExpiryDate: ""
    }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }



  addRequest =(fullName,vehicleNumber, modelYear, phoneNumber, vehicleModel, lastYearClaim)=>{
    var userId = this.state.userId
    var randomRequestId = this.createUniqueId()
    db.collection('requested_books').add({
        "user_id": userId,
        "full_name": fullName,
        "vehicle_number": vehicleNumber,
        "request_id"  : randomRequestId,
        "model_year": modelYear,
        "phone_number": phoneNumber,
        "vehicle_model": vehicleModel,
        "last_year_claim": lastYearClaim,
        "previous_insurar": previousInsurar,
        "policy_expiry_date": policyExpiryDate
    })

    this.setState({
        fullName :'',
        vehicleNumber : '',
        modelYear: '',
        phoneNumber:'',
        vehicleModel:'',
        lastYearClaim:'',
        previousInsurar: '',
        policyExpiryDate: ''
    })

    return Alert.alert("Details Added Successfully")
  }


  render(){
    return(
        <View style={{flex:1}}>
          <MyHeader title="Premium Quotation" navigation ={this.props.navigation}/>
            <KeyboardAvoidingView style={styles.keyBoardStyle}>
              <TextInput
                style ={styles.formTextInput}
                placeholder={"Full Name"}
                onChangeText={(text)=>{
                    this.setState({
                        fullName:text
                    })
                }}
                value={this.state.fullName}
              />
               <TextInput
                style ={styles.formTextInput}
                placeholder={"Phone Number"}
                maxLength = {10}
                onChangeText={(text)=>{
                    this.setState({
                        phoneNumber:text
                    })
                }}
                value={this.state.phoneNumber}
              />
              <TextInput
                style ={[styles.formTextInput,{height:35}]}
                multiline
                numberOfLines ={8}
                placeholder={"Vehicle Number"}
                onChangeText ={(text)=>{
                    this.setState({
                        vehicleNumber:text
                    })
                }}
                value ={this.state.vehicleNumber}
              />
              <TextInput
                style ={[styles.formTextInput,{height:35}]}
                multiline
                numberOfLines ={8}
                placeholder={"Model Year YY/MM/DD"}
                onChangeText ={(text)=>{
                    this.setState({
                        modelYear:text
                    })
                }}
                value ={this.state.modelYear}
              />
               <TextInput
                style ={styles.formTextInput}
                placeholder={"Vehicle Model"}
                onChangeText={(text)=>{
                    this.setState({
                        vehicleModel:text
                    })
                }}
                value={this.state.vehicleModel}
              />
              <TextInput
                style ={styles.formTextInput}
                placeholder={"Last Year Claim (Yes/No)"}
                onChangeText={(text)=>{
                    this.setState({
                        lastYearClaim:text
                    })
                }}
                value={this.state.lastYearClaim}
              />
              <TextInput
                style ={styles.formTextInput}
                placeholder={"Previous Insurar Name"}
                onChangeText={(text)=>{
                    this.setState({
                        previousInsurar:text
                    })
                }}
                value={this.state.previousInsurar}
              />
              <TextInput
                style ={styles.formTextInput}
                placeholder={"Policy Expiry Date YY/MM/DD"}
                onChangeText={(text)=>{
                    this.setState({
                      policyExpiryDate:text
                    })
                }}
                value={this.state.policyExpiryDate}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.addRequest(this.state.fullName,this.state.vehicleNumber, this.state.modelYear, this.state.phoneNumber, this.state.vehicleModel, this.state.lastYearClaim, this.state.previousInsurar, this.state.policyExpiryDate)}}
                >
                <Text>Request Premium</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ff1493',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff1493",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
  }
)

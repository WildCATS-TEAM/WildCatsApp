import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableOpacity, Linking, Platform } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import NavBar from "../NavBar";

const loadingGif = <ActivityIndicator style={{ justifyContent: "center" }} size="large" color="pink" />;

const FindDoctors = ({ navigation }) => {
  const [isLoading, setLoading] = useState(loadingGif);
  const [data, setData] = useState([]);
  const [userZipCode, setUserZipCode] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [info, setInfo] = useState('');
  const [placeId, setPlaceId] = useState('');

  const addressJSON = "https://maps.googleapis.com/maps/api/place/textsearch/json?input=Planned%20Parenthood%20in%20" + userZipCode + "&inputtype=textquery&fields=formatted_address,name&key=AIzaSyCcJoBoBF8_o7LkcuZxq4pzBasrQdLTNbQ";

  const fetchAddress = useEffect(() => {
    if (userZipCode.length === 5) { 
      fetch(addressJSON)
        .then((response) => response.json())
        .then((json) => setData(json.results))
        .catch((error) => setErrorMessage(error));
        setLoading(false);
    } else {
      setData('');
      setLoading(loadingGif);
    }
  }, [userZipCode]);

  // console.log(data.map(item => item.place_id));

  const fetchInfo = useEffect(() => {
    fetch(phoneNumberJSONStringA + placeId + phoneNumberJSONStringB)
        .then((response) => response.json())
        .then((json) => setInfo(json.result))
        .catch((error) => setErrorMessage(error));
        setLoading(false);
  }, [userZipCode]);

  

  const phoneNumberJSONStringA = "https://maps.googleapis.com/maps/api/place/details/json?place_id=";
  const phoneNumberJSONStringB = "&fields=website,formatted_phone_number&key=AIzaSyCcJoBoBF8_o7LkcuZxq4pzBasrQdLTNbQ";

  const dialCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${1234567890}'
    } else {
      phoneNumber = 'telprompt:${1234567890}'
    }
    Linking.openURL(phoneNumber);
  };

  const Item = ({ name, address, phoneNumber }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{address}</Text>
      {/* <TouchableOpacity onPress={dialCall}>
        <Text style={styles.TextStyle}>Call</Text>
      </TouchableOpacity> */}
    </View>
  );
  
  return (
    <View style={styles.container}>
      <NavBar onPressHome={() => navigation.navigate("Home")} />
      <View style={{ backgroundColor: "yellow", height: 200, justifyContent: "center"}}>
        <Text style={{ fontSize: 21, alignSelf: "center"}}>Find a Planned Parenthood Facility Near You</Text>
        <Text style={{ fontSize: 13, alignSelf: "center"}}>(No endorsement here, this is just a directory)</Text>

        <TextInput
        style={styles.textInput}
        onChangeText={userZipCode => setUserZipCode(userZipCode)}
        value={userZipCode}
        placeholder="zipcode"
        />
      </View>
      <View style={styles.flatList}>
        {
          isLoading && !errorMessage ? 
          (
            <ActivityIndicator style={{ paddingTop: 150 }} size="large" color="#ff8ef0" />
          ) 
          :
          errorMessage ? 
            (
            <div className="errorMessage">{errorMessage}</div>
            )
          : 
          (
          
          <FlatList 
          data={data}
          extraData={info}
          keyExtractor={data => data.place_id}
          renderItem={({ item }) => (
            <Item 
            name={item.name} 
            address={item.formatted_address}
            placeId={item.place_id}>
            </Item>
          )}
          />
          )
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 300,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    },
  title: {
    fontSize: 15,
  },
  textInput: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 35, 
    width: 225, 
    height: 60, 
    borderColor: 'gray', 
    alignSelf: 'center', 
    borderWidth: 5,
  },
  flatList: {
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextStyle: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  });
export default FindDoctors;

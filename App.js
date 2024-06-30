import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image, 
} from 'react-native';

export default function App() {
  const [page, setPage] = useState(1)
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [sleepHours, setSleepHours] = useState('')
  const [exersise, setExersise] = useState('')

  const nextPage = () => setPage(page + 1)
  const previousPage = () => setPage(page - 1)

  const handleFirstSubmitPage = () => {
    if (name && gender) nextPage();
    else alert('Please fill all details');
  };

  const handleSecondSubmitPage = () => {
    if (age && sleepHours && exersise) nextPage();
    else alert('Please fill all details');
  };

  const handleResults = (sleepHours, exercise) => {
  const sleepHoursInt = parseInt(sleepHours);
  if (sleepHoursInt > 7 && exercise === 'Yes') {
    return 'Balance your sleep and exercise.';
  } 
  else if (sleepHoursInt < 7 && exercise === 'No') {
    return 'Please sleep 1-2 hours more and start exercising.';
  }
  else if (sleepHoursInt > 7) {
    return 'Please sleep less and exercise more.';
  } else if (sleepHoursInt < 7) {
    return 'Please sleep 1-2 hours more.';
  }
  else if (exercise === 'No') {
    return 'Please do exercise.';
  } else {
    return "You're fit.";
  }
};
    
  return (
    <ImageBackground
      source={require('./bg.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        {page === 1 && (
          <View style={styles.pageContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
            />

            <Text style={styles.label}>Gender</Text>
            <View style={styles.radioContainer}>
              <TouchableOpacity
                style={[
                  styles.radioOption,
                  gender === 'Male' && styles.selectedOption,
                ]}
                onPress={() => setGender('Male')}>
                <Text style={styles.radioText}>Male</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.radioOption,
                  gender === 'Female' && styles.selectedOption,
                ]}
                onPress={() => setGender('Female')}>
                <Text style={styles.radioText}>Female</Text>
              </TouchableOpacity>
            </View>
            <Button title="Submit" color="red" onPress={handleFirstSubmitPage} />
          </View>
        )}

        {page === 2 && (
          <View style={styles.pageContainer}>
            <Text style={styles.greeting}>Hello {name}</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your age"
              value={age}
              onChangeText={setAge}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your sleep"
              value={sleepHours}
              onChangeText={setSleepHours}
              keyboardType="numeric"
            />
            <Text style={styles.label}>Do you do exercise?</Text>
            <View style={styles.radioContainer}>
              <TouchableOpacity
                style={[
                  styles.radioOption,
                  exersise === 'Yes' && styles.selectedOption,
                ]}
                onPress={() => setExersise('Yes')}>
                <Text style={styles.radioText}>Yes</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.radioOption,
                  exersise === 'No' && styles.selectedOption,
                ]}
                onPress={() => setExersise('No')}>
                <Text style={styles.radioText}>No</Text>
              </TouchableOpacity>
            </View>
            <Button title="Submit" color="red" onPress={handleSecondSubmitPage} />
          </View>
        )}

        {page === 3 && (
          <View style={styles.container}>
            <Image
              source={require('./avatar.png')}
              style={styles.image}
            />
            <Text style={styles.result}>Result</Text>
            {handleResults(sleepHours,exersise)}
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  radioText: {
    color: 'Black',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
  },
  pageContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },
  radioOption: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  selectedOption: {
    backgroundColor: '#4CAF50',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  result: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 100, 
    height: 100, 
    marginBottom: 50,
  },
});

import React from 'react';
import { Text, View, StyleSheet, Picker, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import RNPickerSelect from 'react-native-picker-select';

const earlySalaryText = 'Early Career Salary for Graduates of';
const midSalaryText = 'Mid Career Salary for Graduates of';
const bachelorsSalaryText = 'Salary for Bachelors Degree in';
const mastersSalaryText = 'Salary for Masters Degree in';
const startingSalaryText = 'Based on your school and degree, your expected starting salary is';

const tempSchools = [
  {
    label: 'University of Illinois at Urbana Champaign',
    value: 'uiuc'
  },
  {
    label: 'Rice University',
    value: 'rice'
  },
  {
    label: 'University of California at Berkeley',
    value: 'cal'
  }
];

const tempMajors = [
  {
    label: 'Computer Science',
    value: 'cs'
  },
  {
    label: 'Linguistics',
    value: 'ling'
  },
  {
    label: 'Music',
    value: 'mus'
  }
];

const tempAreas = [
  {
    label: 'San Francisco, CA',
    value: 'sf'
  },
  {
    label: 'Urbana-Champaign, IL',
    value: 'uc'
  },
  {
    label: 'Exeter, NH',
    value: 'ex'
  }
];

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Calculator',
  };

  constructor(props) {
    super(props);

    this.state = {
      school: null,
      major: null,
      livingArea: null
    };
  }

  render() {
    const placeholder = {
      label: 'Select your school',
      value: null
    }

    const majorPlaceholder = {
      label: 'Select your major',
      value: null
    }

    const areaPlaceholder = {
      label: 'Select the metro area after college',
      value: null
    }

    return (

      <View style={styles.container}>
        <RNPickerSelect
          placeholder={placeholder}
          items={tempSchools}
          onValueChange={(value) => {
            this.setState({
              school: value,
            });
          }}
          style={pickerSelectStyles}
          value={this.state.school}
        />

        <RNPickerSelect
          placeholder={majorPlaceholder}
          items={tempMajors}
          onValueChange={(value) => {
            this.setState({
              major: value,
            });
          }}
          style={pickerSelectStyles}
          value={this.state.major}
        />

        <RNPickerSelect
          placeholder={areaPlaceholder}
          items={tempAreas}
          onValueChange={(value) => {
            this.setState({
              livingArea: value,
            });
          }}
          style={pickerSelectStyles}
          value={this.state.livingArea}
        />

        <Button
          title="Go to results"
          onPress={() => this.props.navigation.navigate('Home')}
        />

        <Text style={styles.pickerText}>
          {this.state.school != null && (earlySalaryText)} {this.state.school}
        </Text>
        <Text>
          This is a placeholder.
        </Text>

        <Text style={styles.pickerText}>
          {this.state.school != null && (midSalaryText)} {this.state.school}
        </Text>
        <Text>
          This is a placeholder.
        </Text>

        <Text style={styles.pickerText}>
          {this.state.major != null && (bachelorsSalaryText)} {this.state.school}
        </Text>
        <Text>
          This is a placeholder.
        </Text>

        <Text style={styles.pickerText}>
          {this.state.major != null && (mastersSalaryText)} {this.state.school}
        </Text>
        <Text>
          This is a placeholder.
        </Text>

        <Text style={styles.pickerText}>
          {this.state.school != null && this.state.major != null && (startingSalaryText)}
        </Text>
        <Text>
          This is a placeholder.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  pickerText: {
    paddingTop: 20,
  },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 7,
        paddingTop: 20,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'gray',
        color: 'black',
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 3,
        paddingTop: 10,
        borderBottomWidth: 0.5,
        borderColor: 'black',
        color: 'black',
    },
});

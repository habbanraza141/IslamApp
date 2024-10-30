import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import BackgroundContainer from '../../components/BackgroundContainer';
import ButtonComponent from '../../components/ButtonComponent';
import HeaderComponent from '../../components/HeaderComponent';
import HeaderComponent2 from '../../components/HeaderComponent2';

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{paddingTop: 26, paddingBottom: 16, flex: 1}}>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);
function Fiqh() {
  const [flexDirection, setflexDirection] = useState('column');

  return (
    <BackgroundContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderComponent hdrText={'Fiqh'} />
        <PreviewLayout
          values={['Taharat',
            'Namaz',
            'Roza',
            'Zakat',
            'Hajj',
            'Wirasat',
            'Nikaah',
            'Talaq',
            'Tijarat',
            'Ijaraat',
            'Usool',
          'All']}
          selectedValue={flexDirection}
          setSelectedValue={setflexDirection}>
          <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
          <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
          <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
        </PreviewLayout>
  

        
        <HeaderComponent2 hdrText={'Books'} />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 32,
            justifyContent: 'space-between',
          }}>
          <View style={styles.bookContainer}>
            <Image
              style={{width: 80, height: 125, resizeMode: 'contain'}}
              source={require('../../assets/images/book1.png')}
            />
            <Text style={{fontSize: 10, fontWeight: 'bold', marginTop: 10}}>
              Blessings of Ahl ul Bait
            </Text>
            <Text style={{fontSize: 8}}>Maulana Ilyas Qadri</Text>
          </View>
          <View style={styles.bookContainer}>
            <Image
              style={{width: 80, height: 125, resizeMode: 'contain'}}
              source={require('../../assets/images/book1.png')}
            />
            <Text style={{fontSize: 10, fontWeight: 'bold', marginTop: 10}}>
              Blessings of Ahl ul Bait
            </Text>
            <Text style={{fontSize: 8}}>Maulana Ilyas Qadri</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 32,
            justifyContent: 'space-between',
          }}>
          <View style={styles.bookContainer}>
            <Image
              style={{width: 80, height: 125, resizeMode: 'contain'}}
              source={require('../../assets/images/book1.png')}
            />
            <Text style={{fontSize: 10, fontWeight: 'bold', marginTop: 10}}>
              Blessings of Ahl ul Bait
            </Text>
            <Text style={{fontSize: 8}}>Maulana Ilyas Qadri</Text>
          </View>
          <View style={styles.bookContainer}>
            <Image
              style={{width: 80, height: 125, resizeMode: 'contain'}}
              source={require('../../assets/images/book1.png')}
            />
            <Text style={{fontSize: 10, fontWeight: 'bold', marginTop: 10}}>
              Blessings of Ahl ul Bait
            </Text>
            <Text style={{fontSize: 8}}>Maulana Ilyas Qadri</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 32,
            justifyContent: 'space-between',
          }}>
          <View style={styles.bookContainer}>
            <Image
              style={{width: 80, height: 125, resizeMode: 'contain'}}
              source={require('../../assets/images/book1.png')}
            />
            <Text style={{fontSize: 10, fontWeight: 'bold', marginTop: 10}}>
              Blessings of Ahl ul Bait
            </Text>
            <Text style={{fontSize: 8}}>Maulana Ilyas Qadri</Text>
          </View>
          <View style={styles.bookContainer}>
            <Image
              style={{width: 80, height: 125, resizeMode: 'contain'}}
              source={require('../../assets/images/book1.png')}
            />
            <Text style={{fontSize: 10, fontWeight: 'bold', marginTop: 10}}>
              Blessings of Ahl ul Bait
            </Text>
            <Text style={{fontSize: 8}}>Maulana Ilyas Qadri</Text>
          </View>
        </View>
      </ScrollView>
    </BackgroundContainer>
  );
}

const styles = StyleSheet.create({
  bookContainer: {
    width: 160,
    height: 210,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  
  },
  button: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginHorizontal: '1%',
    marginBottom: 16,
    minWidth: '23%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: '#042D2E',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default Fiqh;

import React from 'react';
import {View, StyleSheet, Text, ScrollView, Button, Image} from 'react-native';
import BackgroundContainer from '../../components/BackgroundContainer';
import ButtonComponent from '../../components/ButtonComponent';
import HeaderComponent from '../../components/HeaderComponent';
import HeaderComponent2 from '../../components/HeaderComponent2';

function AllCategories() {
  return (
    <BackgroundContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderComponent hdrText={'Categories'}/>
        <View style={{flexDirection: 'row', marginTop:32}}>
          <ButtonComponent btnText={'Fiqh'} />
          <ButtonComponent btnText={'Tafseer'} style={{marginRight: 5, marginLeft: 10}}/>
          <ButtonComponent btnText={'Aqaid'} style={{marginRight: 10, marginLeft: 5}}/>
          <ButtonComponent btnText={'Kalam'} />
        </View>
        <View style={{flexDirection: 'row', marginVertical:11}}>
          <ButtonComponent btnText={'Tassawuf'} />
          <ButtonComponent btnText={'Hikayat'} style={{marginRight: 5, marginLeft: 10}}/>
          <ButtonComponent btnText={'Hadees'} style={{marginRight: 10, marginLeft: 5}}/>
          <ButtonComponent btnText={'Wazaif'} />
        </View>
        <View style={{flexDirection: 'row', marginBottom: 27}}>
          <ButtonComponent btnText={'Seerat'} />
          <ButtonComponent btnText={'Karamaat'} style={{marginRight: 5, marginLeft: 10}}/>
          <ButtonComponent btnText={'Duaen'} style={{marginRight: 10, marginLeft: 5}}/>
          <ButtonComponent btnText={'All'} style={{backgroundColor: '#000'} }textStyle={{color: '#fff'}}/>
        </View>
        <HeaderComponent2 hdrText={'Books'}/>
        <View style={{flexDirection: 'row', marginTop:32, justifyContent: 'space-between'}}>
            <View style={styles.bookContainer}>
                <Image
                    style={{width: 80, height: 125, resizeMode: 'contain'}}
                    source={require('../../assets/images/book1.png')}
                />
                <Text style={{fontSize: 10, fontWeight: 'bold', marginTop: 10}}>Blessings of Ahl ul Bait</Text>
                <Text style={{fontSize: 8}}>Maulana Ilyas Qadri</Text>
            </View>
            <View style={styles.bookContainer}>
                <Image
                    style={{width: 80, height: 125, resizeMode: 'contain'}}
                    source={require('../../assets/images/book1.png')}
                />
                <Text style={{fontSize: 10, fontWeight: 'bold', marginTop: 10}}>Blessings of Ahl ul Bait</Text>
                <Text style={{fontSize: 8}}>Maulana Ilyas Qadri</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', marginTop:32, justifyContent: 'space-between'}}>
            <View style={styles.bookContainer}>
                <Image
                    style={{width: 80, height: 125, resizeMode: 'contain'}}
                    source={require('../../assets/images/book1.png')}
                />
                <Text style={{fontSize: 10, fontWeight: 'bold', marginTop: 10}}>Blessings of Ahl ul Bait</Text>
                <Text style={{fontSize: 8}}>Maulana Ilyas Qadri</Text>
            </View>
            <View style={styles.bookContainer}>
                <Image
                    style={{width: 80, height: 125, resizeMode: 'contain'}}
                    source={require('../../assets/images/book1.png')}
                />
                <Text style={{fontSize: 10, fontWeight: 'bold', marginTop: 10}}>Blessings of Ahl ul Bait</Text>
                <Text style={{fontSize: 8}}>Maulana Ilyas Qadri</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', marginTop:32, justifyContent: 'space-between'}}>
            <View style={styles.bookContainer}>
                <Image
                    style={{width: 80, height: 125, resizeMode: 'contain'}}
                    source={require('../../assets/images/book1.png')}
                />
                <Text style={{fontSize: 10, fontWeight: 'bold', marginTop: 10}}>Blessings of Ahl ul Bait</Text>
                <Text style={{fontSize: 8}}>Maulana Ilyas Qadri</Text>
            </View>
            <View style={styles.bookContainer}>
                <Image
                    style={{width: 80, height: 125, resizeMode: 'contain'}}
                    source={require('../../assets/images/book1.png')}
                />
                <Text style={{fontSize: 10, fontWeight: 'bold', marginTop: 10}}>Blessings of Ahl ul Bait</Text>
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
  }
});

export default AllCategories;

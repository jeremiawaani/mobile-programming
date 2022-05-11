import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {PresentKecil, SearchInfo} from '../../../assets';

const SearchJobF_content = ({
  title = 'Database Management',
  color,
  marginL = 0,
  onPress,
}) => {
  return (
    <View style={styles.container(color)}>
      <View style={{flexDirection: 'column'}}>
        <Text style={styles.textTitle}>{title}</Text>
        <View
          style={{flexDirection: 'row', marginTop: 11, alignItems: 'center'}}>
          <SearchInfo />
          <Text style={styles.subtitle}> 3x Design Revision</Text>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 6, alignItems: 'center'}}>
          <PresentKecil />
          <Text style={styles.subtitle}> 30 Days</Text>
        </View>
      </View>
      <View style={styles.apply(marginL)}>
        <Text style={styles.gaji}> Rp59.000</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
          <View style={styles.button}>
            <Text style={styles.textBtn}>Apply Job</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchJobF_content;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    height: 106,
    width: 293,
    borderRadius: 10,
    paddingLeft: 19,
    alignSelf: 'center',
    flexDirection: 'row',
  }),
  textTitle: {
    fontFamily: 'Segoe UI Bold',
    color: '#000000',
    fontSize: 16,
    marginTop: 8,
  },
  subtitle: {
    fontFamily: 'Segoe UI',
    fontSize: 15,
    color: '#000000',
  },
  textBtn: {
    fontFamily: 'Segoe UI',
    fontSize: 13,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  button: {
    height: 25,
    width: 91,
    backgroundColor: '#000000',
    borderRadius: 8,
    justifyContent: 'center',
  },
  gaji: {
    fontFamily: 'Segoe UI Bold',
    fontSize: 12,
    color: 'black',
    marginTop: 41,
    marginBottom: 5,
  },
  apply: marginL => ({
    marginLeft: marginL,
    flexDirection: 'column',
    alignItems: 'flex-end',
  }),
});

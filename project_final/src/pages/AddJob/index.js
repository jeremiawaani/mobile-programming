import {
  StyleSheet,
  Text,
  View,
  TextInput as TextInputRN,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  AddJob_Content,
  AddJob_Header,
  DetailsF_Button,
  Footer,
  Gap,
} from '../../components';

const desc =
  'Lorem ipsum dolor sit amet, consectetur adipis elit.\nAliquam mi mauris vestibulum aliquam viverra\nmolestie nibh.';
const skill = 'Adobe Ilustrator\nFigma';
const AddJob = ({navigation}) => {
  return (
    <View>
      <AddJob_Header onPress={() => navigation.navigate('HomeC')}/>
      <View style={styles.container}>
        <Gap height={23} />
        <View style={styles.contentWrapper}>
          <AddJob_Content
            title="Description"
            text={desc}
            barImg={require('../../../assets/images/BarBiru.png')}
            bottomColor="#D2F5FD"
            widthInput={299}
          />
          <Gap height={7} />

          <Text
            style={{
              width: 299,
              backgroundColor: '#D2F5FD',
              height: 3,
              borderRadius: 10,
            }}
          />
        </View>

        <Gap height={23} />
        <View style={styles.contentWrapper}>
          <AddJob_Content
            title="Skill Require"
            text={skill}
            barImg={require('../../../assets/images/BarHijau.png')}
            bottomColor="#D1FBEA"
            widthInput={98}
          />
          <Gap width={38} />
          <AddJob_Content
            title="Offer Time"
            text="29 Desember 2022"
            barImg={require('../../../assets/images/BarBiru.png')}
            bottomColor="#D2F5FD"
          />
        </View>

        <Gap height={30} />
        <View style={styles.contentWrapper}>
          <AddJob_Content
            title="Salary"
            text="Rp. 59,000"
            barImg={require('../../../assets/images/BarUngu.png')}
            bottomColor="#E2D4FE"
          />

          <Gap width={56} />
          <AddJob_Content
            title="Category"
            text="Design Interface"
            barImg={require('../../../assets/images/BarBiru.png')}
            bottomColor="#D2F5FD"
          />
          <DetailsF_Button title={'Add'} />
        </View>

        <Gap height={30} />
        <Footer />
      </View>
    </View>
  );
};

export default AddJob;

const styles = StyleSheet.create({
  container: {},
  contentWrapper: {
    flexDirection: 'row',
    marginLeft: 17,
  },
});

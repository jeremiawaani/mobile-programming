import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProjectF_Label, Gap, ProjectF_Button} from '../../components';
import {Monitor, Pencil, Keyboard} from '../../../assets';

const ProjectF_Content = ({
  title,
  subTitle,
  txtBtn,
  icons,
  backgroundColor,
  width,
  onPress,
}) => {
  return (
    <View style={styles.container(backgroundColor)}>
      {/* <View style={{}}> */}
      <View style={{flexDirection: 'row', height: 21}}>
        <ProjectF_Label
          labelFamily="Segoe UI Bold"
          labelSize={16}
          title={title}
        />
        <Gap width={width} />
        <View>
          <Text>{icons}</Text>
        </View>
      </View>

      <ProjectF_Label title={subTitle} />
      <Gap height={17} />

      <View style={{flexDirection: 'row'}}>
        <Monitor />
        <Gap width={5} />
        <Pencil />
        <Gap width={5} />
        <Keyboard />
        <Gap width={110} />
        <View style={styles.btn}>
          <ProjectF_Button title={txtBtn} onPress={onPress} />
        </View>
      </View>
    </View>
  );
};

export default ProjectF_Content;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    height: 139,
    borderRadius: 10,
    paddingLeft: 19,
    paddingTop: 33,
    marginLeft: 36,
    marginRight: 31,
    backgroundColor: backgroundColor,
  }),
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#000000',
    width: 65,
  },
});

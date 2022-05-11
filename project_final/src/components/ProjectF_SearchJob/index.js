import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Monitor, Pencil, Keyboard, SearchProject} from '../../../assets';
import Gap from '../Gap';
import ProjectF_Label from '../ProjectF_Label';
import ProjectF_Button from '../ProjectF_Button';

const ProjectF_SearchJob = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', height: 21}}>
        <ProjectF_Label
          labelSize={16}
          labelFamily="Segoe UI Bold"
          title="Looking for a job"
        />
        <View style={{marginLeft: 60}}>
          <SearchProject />
        </View>
      </View>

      <ProjectF_Label labelSize={13} title="12 Job Available" />
      <Gap height={17} />

      <View style={{flexDirection: 'row'}}>
        <Monitor />
        <Gap width={5} />
        <Pencil />
        <Gap width={5} />
        <Keyboard />
        <Gap width={110} />
        <TouchableOpacity activeOpacity={0.7}>
          <ProjectF_Button title="Find" onPress={onPress} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProjectF_SearchJob;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D1FBEA',
    height: 139,
    borderRadius: 10,
    paddingLeft: 19,
    paddingTop: 33,
    marginLeft: 36,
    marginRight: 31,
  },
  txt: {
    fontFamily: 'Segoe UI Bold',
    fontSize: 16,
    color: '#000000',
  },
});

import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  Footer,
  Gap,
  HeaderUser,
  Profile_Button,
  SearchJobF_content,
} from '../../components';
import React from 'react';

const SearchJob = ({navigation}) => {
  return (
    <View>
      {/* <View> */}
      <HeaderUser
        title="Search Job"
        onPress={() => navigation.navigate('ProjectF')}
      />
      {/* </View> */}

      <ScrollView style={{height: 485, backgroundColor: '#fff'}}>
        <SearchJobF_content
          color={'#E2D4FE'}
          onPress={() => navigation.navigate('DetailsF')}
        />
        <Gap height={14} />
        <SearchJobF_content
          title={'Design Interface'}
          color={'#D1FBEA'}
          marginL={27}
          onPress={() => navigation.navigate('DetailsF')}
        />
        <Gap height={14} />
        <SearchJobF_content
          title={'Server Security'}
          color={'#D2F5FD'}
          marginL={27}
          onPress={() => navigation.navigate('DetailsF')}
        />
        <Gap height={14} />
        <SearchJobF_content
          title={'Software Analyst'}
          color={'#E2D4FE'}
          marginL={27}
          onPress={() => navigation.navigate('DetailsF')}
        />
        <Gap height={20} />
        <SearchJobF_content
          title={'UI UX Designer'}
          color={'#D1FBEA'}
          marginL={27}
          onPress={() => navigation.navigate('DetailsF')}
        />
        <Gap height={14} />
        <SearchJobF_content
          title={'Mobile Apps'}
          color={'#D2F5FD'}
          marginL={27}
          onPress={() => navigation.navigate('DetailsF')}
        />
        <Gap height={14} />
        <SearchJobF_content
          title={'Flutter Developer'}
          color={'#E2D4FE'}
          marginL={27}
          onPress={() => navigation.navigate('DetailsF')}
        />
      </ScrollView>
      <Footer />
    </View>
  );
};

export default SearchJob;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E2D4FE',
    height: 106,
    borderRadius: 10,
    paddingLeft: 11,
    paddingTop: 8,
    marginLeft: 34,
    marginRight: 33,
  },
  container1: {
    backgroundColor: '#D1FBEA',
    height: 160,
    borderRadius: 10,
    paddingLeft: 19,
    paddingTop: 33,
    marginLeft: 36,
    marginRight: 31,
  },
  container2: {
    backgroundColor: '#D2F5FD',
    height: 160,
    borderRadius: 10,
    paddingLeft: 19,
    paddingTop: 33,
    marginLeft: 36,
    marginRight: 31,
  },
  container3: {
    backgroundColor: '#E2D4FE',
    height: 160,
    borderRadius: 10,
    paddingLeft: 19,
    paddingTop: 33,
    marginLeft: 36,
    marginRight: 31,
  },
});
// import {StyleSheet, Text, View, ScrollView} from 'react-native';
// import React from 'react';
// import { Footer, Gap, HeaderUser, Profile_Button } from '../../components';
// import {SearchInfo } from '../../../assets';

// const SearchJob = () => {
//   return (
//     <ScrollView>
//       <HeaderUser title='Search Job' />
//       <View style={{alignItems: 'center', backgroundColor: 'white'}}>
//       <View style={styles.container}>
//       <View style={{width: 300}}>
//             <Text style={{fontFamily: 'Segoe UI Bold', color: 'black', fontSize: 16}}>Database Management</Text>
//             <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
//               <SearchInfo />
//               <Text style={{fontFamily: 'Segoe UI', fontSize: 15, color: 'black'}}> 3x Design Revision</Text>
//               <Text style={{fontFamily: 'Segoe UI Bold', fontSize: 16, color: 'black', marginLeft: 60, marginTop: -2}}> Rp59.000</Text>
//             </View>
//             <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center', alignContent: 'space-between'}}>
//               <SearchInfo />
//               <Text style={{fontFamily: 'Segoe UI', fontSize: 15, color: 'black'}}> 30 Days</Text>
//               <Profile_Button mL={125} textColor='white' color='black' title='Apply Job'></Profile_Button>
//             </View>
//         </View>
//       </View>
//       <Gap height={20} />
//       <View style={styles.container1}>
//       <View style={{width: 300}}>
//             <Text style={{fontFamily: 'Segoe UI Bold', color: 'black', fontSize: 16}}>Database Management</Text>
//             <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
//               <SearchInfo />
//               <Text style={{fontFamily: 'Segoe UI', fontSize: 15, color: 'black'}}> 3x Design Revision</Text>
//               <Text style={{fontFamily: 'Segoe UI Bold', fontSize: 16, color: 'black', marginLeft: 60, marginTop: -2}}> Rp59.000</Text>
//             </View>
//             <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
//               <SearchInfo />
//               <Text style={{fontFamily: 'Segoe UI', fontSize: 15, color: 'black'}}> 30 Days</Text>
//               <Profile_Button mL={125} textColor='white' color='black' title='Apply Job'></Profile_Button>
//             </View>
//         </View>
//       </View>
//       <Gap height={20} />
//       <View style={styles.container2}>
//       <View style={{width: 300}}>
//             <Text style={{fontFamily: 'Segoe UI Bold', color: 'black', fontSize: 16}}>Database Management</Text>
//             <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
//               <SearchInfo />
//               <Text style={{fontFamily: 'Segoe UI', fontSize: 15, color: 'black'}}> 3x Design Revision</Text>
//               <Text style={{fontFamily: 'Segoe UI Bold', fontSize: 16, color: 'black', marginLeft: 60, marginTop: -2}}> Rp59.000</Text>
//             </View>
//             <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
//               <SearchInfo />
//               <Text style={{fontFamily: 'Segoe UI', fontSize: 15, color: 'black'}}> 30 Days</Text>
//               <Profile_Button mL={125} textColor='white' color='black' title='Apply Job'></Profile_Button>
//             </View>
//         </View>
//       </View>
//       <Gap height={20} />
//       <View style={styles.container3}>
//       <View style={{width: 300}}>
//             <Text style={{fontFamily: 'Segoe UI Bold', color: 'black', fontSize: 16}}>Database Management</Text>
//             <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
//               <SearchInfo />
//               <Text style={{fontFamily: 'Segoe UI', fontSize: 15, color: 'black'}}> 3x Design Revision</Text>
//               <Text style={{fontFamily: 'Segoe UI Bold', fontSize: 16, color: 'black', marginLeft: 60, marginTop: -2}}> Rp59.000</Text>
//             </View>
//             <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
//               <SearchInfo />
//               <Text style={{fontFamily: 'Segoe UI', fontSize: 15, color: 'black'}}> 30 Days</Text>
//               <Profile_Button mL={125} textColor='white' color='black' title='Apply Job'></Profile_Button>
//             </View>
//         </View>
//       </View>
//       <Gap height={20} />
//       </View>

//       <Footer />
//     </ScrollView>
//   );
// };

// export default SearchJob;

// const styles = StyleSheet.create({
//   container:{
//     backgroundColor:'#E2D4FE',
//     height: 139,
//     borderRadius: 10,
//     paddingLeft: 19,
//     paddingTop: 33,
//     marginLeft: 36,
//     marginRight: 31,
//   },
//   container1:{
//     backgroundColor:'#D1FBEA',
//     height: 139,
//     borderRadius: 10,
//     paddingLeft: 19,
//     paddingTop: 33,
//     marginLeft: 36,
//     marginRight: 31,
//   },
//   container2:{
//     backgroundColor:'#D2F5FD',
//     height: 139,
//     borderRadius: 10,
//     paddingLeft: 19,
//     paddingTop: 33,
//     marginLeft: 36,
//     marginRight: 31,
//   },
//   container3:{
//     backgroundColor:'#E2D4FE',
//     height: 139,
//     borderRadius: 10,
//     paddingLeft: 19,
//     paddingTop: 33,
//     marginLeft: 36,
//     marginRight: 31,
//   },
// });

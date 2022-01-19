import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {fetchUsers} from './actionSerialFetch'; // change to actionParallelFetch to fetch apis in parallel.
import {connect} from 'react-redux';

function ThunkApp({userData, fetchUsers, loadingData, errorData, postData}) {
  console.log(userData);
  console.log(postData);
  const posts = postData;
  const users = userData;
  const loading = loadingData;
  const error = errorData;

  useEffect(() => {
    console.log('useEffect Executed');
    fetchUsers();
  }, []);

  return (
    <View>
      <Text>Thunk API Fetch</Text>
      {loading && <Text>Loading...</Text>}
      {error && !loading && <Text>{error}</Text>}
      {users && users.map((user, i) => <Text key={i}>{user.name}</Text>)}
      {posts && posts.map((post, i) => <Text key={i}>{post.title}</Text>)}
    </View>
  );
}

const mapStateToProps = state => {
  console.log('inside mapStateToProps');

  return {
    postData: state.posts,
    userData: state.users,
    loadindData: state.loading,
    errorData: state.error,
  };
};

const mapDispatchToProps = dispatch => {
  console.log('inside mapDispatchToProps');
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThunkApp);

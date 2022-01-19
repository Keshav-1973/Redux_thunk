import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import users from './src/reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import ThunkApp from './src/ThunkApp';

const store = createStore(users, applyMiddleware(thunk));

const MyComponent = () => {
  return (
    <ScrollView>
      <Provider store={store}>
        <ThunkApp />
      </Provider>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default MyComponent;

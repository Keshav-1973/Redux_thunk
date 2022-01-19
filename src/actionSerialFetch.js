const getUsersRequest = () => {
  return {
    type: 'GET_USERS_REQUEST',
  };
};

const getUsersSuccess = users => {
  return {
    type: 'GET_USERS_SUCCESS',
    payload: users,
  };
};
const getPostsSuccess = posts => {
  return {
    type: 'GET_POSTS_SUCCESS',
    payload: posts,
  };
};

const getUsersFailure = error => {
  return {
    type: 'GET_USERS_FAILURE',
    payload: error,
  };
};

export const fetchUsers = () => {
  console.log('inside thunk function');
  const urlOne = fetch('https://jsonplaceholder.typicode.com/users');
  const urlTwo = fetch('https://jsonplaceholder.typicode.com/posts');

  return dispatch => {
    dispatch(getUsersRequest());
    async function fetchUrl() {
      const responseOne = await fetch(
        'https://jsonplaceholder.typicode.com/users',
      );
      const responseTwo = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const users = await responseOne.json();
      const posts = await responseTwo.json();
      return [users, posts];
    }
    fetchUrl().then(([userget, postget]) => {
      console.log(userget); // fetched users
      console.log(postget); //fetched posts

      dispatch(getUsersSuccess(userget));
      dispatch(getPostsSuccess(postget));
    });
  };
};

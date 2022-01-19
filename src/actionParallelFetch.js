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
    async function fetchAPIs() {
      const [userResponse, postsResponse] = await Promise.all([urlOne, urlTwo]);

      const usersgetx = await userResponse.json();
      const postsgety = await postsResponse.json();
      return [usersgetx, postsgety];
    }
    fetchAPIs().then(([usersget, postsget]) => {
      // usersget; // fetched users
      console.log(usersget);
      // postsget; // fetched posts
      console.log(postsget);

      dispatch(getUsersSuccess(usersget));
      dispatch(getPostsSuccess(postsget));
    });
  };
};

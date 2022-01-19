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

const getUsersFailure = error => {
  return {
    type: 'GET_USERS_FAILURE',
    payload: error,
  };
};

const url = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = () => {
  console.log('inside thunk function');
  return dispatch => {
    dispatch(getUsersRequest());
    fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        const users = data;
        console.log(users);
        dispatch(getUsersSuccess(users));
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch(getUsersFailure(errorMessage));
      });
  };
};

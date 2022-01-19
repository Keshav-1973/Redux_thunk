const initialState = {
  users: [],
  posts: [],
  loading: false,
  error: null,
};

const users = (state = initialState, action) => {
  console.log({action});
  switch (action.type) {
    case 'GET_USERS_REQUEST':
      return {...state, loading: true};
    case 'GET_USERS_SUCCESS':
      return {...state, loading: false, users: action.payload};
    case 'GET_USERS_FAILURE':
      return {...state, loading: false, error: action.payload};
    case 'GET_POSTS_SUCCESS':
      return {...state, loading: false, posts: action.payload};
    default:
      return state;
  }
};

export default users;

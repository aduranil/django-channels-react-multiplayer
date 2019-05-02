export const handleLogin = (e, data) => (dispatch) => {
  fetch('http://localhost:8000/token-auth/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then((json) => {
      localStorage.setItem('token', json.token);
      return dispatch({ type: 'SET_CURRENT_USER', data });
    });
};

export const handleSignup = (username, password) => (dispatch) => {
  fetch('http://localhost:8000/chat/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(username, password),
  })
    .then(res => res.json())
    .then((json) => {
      localStorage.setItem('token', json.token);
      return dispatch({ type: 'SET_CURRENT_USER', json });
    });
};

const initialState = {};

const authReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state, loggedIn: action.loggedIn, username: action.userName };
    default:
      return state;
  }
};

export default authReducer;

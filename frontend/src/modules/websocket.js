import * as actions from './WSClientActions';

export const connectToSocket = id => (dispatch) => {
  const path = `ws://127.0.0.1:8000/ws/game/${id}?token=${localStorage.getItem('token')}`;
  const socket = new WebSocket(path);
  socket.onclose = () => {
    console.log('websocket is close');
  };
  socket.onmessage = (e) => {};
  socket.onopen = () => {
    console.log('websocket open');
  };
  dispatch({ type: 'CONNECT', socket });
};

export const joinRoom = socket => (dispatch) => {
  try {
    socket.send(JSON.stringify({ command: 'join', id }));
  } catch (err) {
    console.log(err.message);
  }
};
// Set up WebSocket handlers
// socket.onmessage = onMessage(socket, store);
const socketInitialState = { socket: null };

const socketReducer = (state = { ...socketInitialState }, action) => {
  switch (action.type) {
    case actions.WS_CONNECT:
      return { ...state, host: action.host };

    case actions.WS_CONNECTING:
      return { ...state, host: action.host };

    case actions.WS_CONNECTED:
      return { ...state, host: action.host };

    case actions.WS_DISCONNECTED:
      return { ...state, host: action.host };

    default:
      return state;
  }
};

export default socketReducer;

import * as actions from './WSClientActions';
import * as serverActions from './WSServerActions';
// Set up WebSocket handlers
// socket.onmessage = onMessage(socket, store);

export const join = (username, id) => ({ type: 'join', username, id });

const socketInitialState = { socket: null };

const socketReducer = (state = { ...socketInitialState }, action) => {
  switch (action.type) {
    case 'join':
      return { ...state, user: action.data };
    case serverActions.WS_HEALTH:
      return { ...state, status: action.status };
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

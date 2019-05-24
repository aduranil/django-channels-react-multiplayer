const socket = null;

export const connectToSocket = id => (dispatch) => {
  const path = `ws://127.0.0.1:8000/ws/game/${id}?token=${localStorage.getItem('token')}`;
  const socket = new WebSocket(path);

  socket.onclose = () => {
    console.log('websocket is close');
  };
  socket.onmessage = (e) => {
    debugger;
    joinRoom(socket);
  };
  socket.onopen = () => {
    console.log('websocket open');
  };
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

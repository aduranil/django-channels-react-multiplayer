export const connectToSocket = id => (dispatch) => {
  const path = `ws://127.0.0.1:8000/ws/game/${id}`;
  const socket = new WebSocket(path);

  socket.onclose = () => {
    console.log('websocket is close');
  };
  socket.onopen = () => {
    console.log('websocket open');
  };
};

// Set up WebSocket handlers
// socket.onmessage = onMessage(socket, store);

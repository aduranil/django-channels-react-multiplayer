import React, { Component } from "react";
import { connect } from "react-redux";
import { wsConnect } from "../../actions/WSClientActions";


class WebSocketConnection extends Component {
  constructor(props) {
    super(props);
    this.autoconnect = !!props.autoconnect;
  }

  componentDidMount() {
    if (this.autoconnect) {
      this.props.wsConnect(this.props.host);
    }
  }

  render() {
    return <div>{this.props.children}</div>
  }
}


const mapStateToProps = (state) => {
  return {
    wsEvents: state.wsReducer
  }
};

const mapDispatchToProps = {wsConnect};

export default connect(mapStateToProps, mapDispatchToProps)(WebSocketConnection);

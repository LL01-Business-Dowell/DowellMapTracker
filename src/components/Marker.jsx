import { Component, PropTypes } from "react";
import { shouldPureComponentUpdate } from "react";

export default class Marker extends Component {
    // propTypes = {
    //   text: PropTypes.string
    // };
  
    static defaultProps = {};
  
    shouldComponentUpdate = shouldPureComponentUpdate;
  
    render() {
      return (
         <div style={markerStyles}>
            {this.props.text}
         </div>
      );
    }
  }
const K_WIDTH = 40;
const K_HEIGHT = 40;

const markerStyles = {
    position:"absolute",
    // width: '20px',
    // height: '20px',
    background: 'red',
    borderRadius: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    width: K_WIDTH,
    height: K_HEIGHT,
    left: -K_WIDTH / 2,
    top: -K_HEIGHT / 2,
    border: '5px solid #f44336',
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#3f51b5',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 4
  };
  
  
  
  
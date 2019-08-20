import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Services from '../../services/plan.services'

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
    
    constructor(props) {
        super(props)
        this.state = { plan: ""}
        this.zoom = 11
        this.service = new Services()
        
    }
 
  componentDidMount() {
      this.service.getOnePlan(this.props.plan.id)
            .then(response => this.setState({ plan: response.data }))
            .catch(err => console.log('err', err))
  }
//     static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };
 
  render() {
    
// if (this.state.plan) console.log(this.state.plan)
    var defaultProps = {
        center: {
            lat: this.props.plan.location.lat,
            lng: this.props.plan.location.lng
        },
        zoom: 11
    };

    const AnyReactComponent = ({ text }) => (
        <div style={{
          color: 'white', 
          background: 'grey',
          padding: '15px 10px',
          display: 'inline-flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '100%',
          transform: 'translate(-50%, -50%)'
        }}>
          {text}
        </div>
      );

          return (
            // Important! Always set the container height explicitly
            
            <div style={{ height: '100vh', width: '100%' }}>
                
              <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEAPI }}
                defaultCenter={defaultProps.center}
                defaultZoom={this.zoom}//{this.props.zoom}
              >
                <AnyReactComponent 
                  lat={this.props.plan.location.lat}
                  lng={this.props.plan.location.lng}
                  text={this.props.plan.companyName}
                />
              </GoogleMapReact>
            </div>
          );
      }
 
}
 
export default SimpleMap;
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Services from '../../services/plan.services'

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class CopySimpleMap extends Component {
    
    constructor(props) {
        super(props)
        this.state = { plan: "",
      address:"",
    
    }
        this.zoom = 11
        this.service = new Services()
        
    }
 
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
        position => {
            const { latitude, longitude } = position.coords;
            console.log(position.coords.latitude)
            console.log(position.coords.longitude) //COOORDENADAS LAT
            this.setState({
                userLocation: { lat: latitude, lng: longitude },
                loading: false
            });
        },
        () => {
            this.setState({ loading: false });
        }
    );
      this.service.getOnePlan(this.props.plan.id)
            .then(response => this.setState({ plan: response.data }))
            .catch(err => console.log('err', err))

      console.log(this.location)
    }
    
           
  
//     static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };
 
  render() {
    const { loading, userLocation } = this.state;
    const { google } = this.props;
    if (loading) {
    return null;
    }
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
              <Marker
         onClick = { this.onMarkerClick }
         title = { 'Changing Colors Garage' }
         position = {this.state.userLocation}
         name = { 'Changing Colors Garage' }/>
              </GoogleMapReact>

}
            </div>
          );
      }
 
}
 
export default CopySimpleMap;
import React from 'react';
import GoogleMapReact from 'google-map-react';
 
export default class googleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 31.952291,
      lng: 35.152633
    },
    zoom: 15
  };

  render() {
    return (
      <div style={{ height: '100%', width: '100%', padding: '22px 0 95px 0' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCzxPEq2PTsTjQoFGhTNgty8QxewzdfU6Y'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom} 
        >
        </GoogleMapReact>
      </div>
    );
  }
}
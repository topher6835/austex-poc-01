import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker  } from 'react-google-maps';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

class Map extends Component {
   render() {
   const GoogleMapExample = withScriptjs(withGoogleMap( (props) => (
      <GoogleMap
        defaultCenter = { { lat: 30.332648, lng: -97.669158 } }
        defaultZoom = { 17 }
      >
          {props.isMarkerShown && <Marker position={{ lat: 30.332648, lng: -97.669158 }} />}
      </GoogleMap>
   )));
   return(
      <MDBRow className="justify-content-center">
        <GoogleMapExample
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDMrFVnvsgBXpBGz7y_2uQcv5395Ts5BUg&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={ <div style={{ height: `550px`, width: '100%' }} /> } /*  height: `500px`, width: '800px' */
            mapElement={ <div style={{ height: `100%` }} /> }
        />
      </MDBRow>
   );
   }
};
export default Map;
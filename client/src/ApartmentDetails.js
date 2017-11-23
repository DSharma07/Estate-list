import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import '../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';

class ApartmentDetails extends React.Component {
  dont_close_modal = (e) => {
    e.stopPropagation();
  }

  render() {
    if(!this.props.show) {
      return null;
    }

    const backdropStyle = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50,
      zIndex: '9998'
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: "70%",
      maxHeight: "45%",
      margin: '0 auto',
      padding: 50
    };

    const closeStyle = {float: "right", cursor: "pointer", fontSize:28};

    const slideStyle = {width:"40%", margin: '0px auto'};

    const renderRows = () => {
      var result = []
  
      for(var i=0 ; i < 10; i++){
      result.push(<img src={this.props.apartment.images[i].advertisementThumbnails.thumb_xs.url} alt="EstateImages"/>) 
      }
      return result;
    };
    

    return (
      <div style={backdropStyle} onClick={this.dont_close_modal.bind(this)}>
        <div style={modalStyle}>
          <span><b>Title :&nbsp;&nbsp;</b> {this.props.apartment.title}</span>
          <span onClick={this.props.onClose} style={closeStyle}>&times;</span>
          <br></br><span><b>Address:&nbsp;</b>{this.props.apartment.propertySummary.address.fullAddress}</span>
          <hr />
         <div style={slideStyle}>
          <Carousel showArrows={true}>
               {renderRows()}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

ApartmentDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default ApartmentDetails;

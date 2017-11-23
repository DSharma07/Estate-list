import React, { Component } from 'react';
import styled from 'styled-components';
import ApartmentDetails from  './ApartmentDetails';

class Apartment extends Component {
    constructor(props) {
        super(props);
  
        this.state = { isOpen: false };
        this.toggleModal = this.toggleModal.bind(this);
    }
    
    toggleModal = () => {
      this.setState({
          isOpen: !this.state.isOpen
        });
      }
      //220 & 280
    render() {
        const StyledWrapper = styled.div`
        background-color: white;
        width: 280px;
        height: 330px;
        margin: 25px;
        border-radius: 2px;
        box-shadow: 0 2px 3px 5px rgba(0, 0, 0, 0.1);
        transition: 200ms all ease-in-out;
        display: flex;
        flex-direction: column;
        &:hover {
            cursor: pointer;
            background-color: white;
            box-shadow: 0 2px 3px 5px rgba(0, 0, 0, 0.2);
        }
        `;
        const StyledImage = styled.div`
        position: relative;
        align-items: center;
        justify-content: center;
        padding: 4px 10px 0 10px;
        `;  
        const StyledText = styled.div`
        position:absolute; 
        top:20px;
        left:22px;
        background-color: white;
        padding: 2px;
        color: gray;
        font-size: 12px;
        `;  
        const StyledName = styled.h6`
         padding: 10px 10px 0 10px;
        `;   
        const StyledAddress = styled.div`
        font-size: 12px;
        color: gray;
        padding-left: 10px;
        `;
        const StyledInfo = styled.h6`
        font-weight: bold;
        padding: 10px;
        justify-content: center;
        `;
    const StyledRoom = styled.span`
    color: gray;
    float: right
    `;

    const imageStyle = {width:'100%'};

    return (
            <StyledWrapper onClick={this.toggleModal}>
                <StyledImage>
                    <img style={imageStyle} src={this.props.apartment.image} alt="Advertisement" />
                    <StyledText>
                        {(this.props.apartment.advertisementPrice.sellPrice === this.props.apartment.advertisementPrice.baseRent)
                            ? 'Mieten' 
                            : 'Kaufen' 
                        }
                    </StyledText>
                </StyledImage>
                <StyledName>
                    {this.props.apartment.title}
                </StyledName>
                <StyledAddress>
                    {this.props.apartment.propertySummary.address.postalCode}/{this.props.apartment.propertySummary.address.city}
                </StyledAddress>
                <StyledInfo>
                    {(this.props.apartment.advertisementPrice.sellPrice === this.props.apartment.advertisementPrice.baseRent)
                        ? this.props.apartment.advertisementPrice.baseRent 
                        : this.props.apartment.advertisementPrice.sellPrice 
                    } €
                    <StyledRoom>{this.props.apartment.propertySummary.numberOfRooms} zimmer&nbsp;&nbsp; | &nbsp;&nbsp;ab {this.props.apartment.propertySummary.space} sq.mt</StyledRoom>
                </StyledInfo>
                <ApartmentDetails show={this.state.isOpen} apartment={this.props.apartment}
                  onClose={this.toggleModal}>
                </ApartmentDetails>
            </StyledWrapper>
       );
    }
  }
  
  export default Apartment;

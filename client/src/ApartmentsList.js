import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Apartment from './Apartment';

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
`
//padding: 20px calc((100vw - 860px) / 2); & remove container class
export default class ApartmentsList extends Component {
    constructor() {
        super();

        this.state = {
            apartments: []
        }
    }

    async componentWillMount() {
        try {
            const res = await axios.get('/api/list-sites');
            const apartments = res.data;
            this.setState({apartments});
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        const mappedApartments =  this.state.apartments.map(apartment => <Apartment apartment={apartment} key={apartment.id} />);

        return (
             <div className="container">
            <StyledWrapper>
                {mappedApartments}
            </StyledWrapper>
             </div>
        )
    }
}

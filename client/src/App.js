import React, {Component} from 'react';
import styled from 'styled-components';

import ApartmentsList from './ApartmentsList';

const StyledWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    z-index: 1;
    background: linear-gradient(135deg, #a94442 0%,#8a6d3b 100%);
`;
//#3c763d
const StyledHeading = styled.h2`
    padding-top:10px;
    color: white;
`;

export default class App extends Component {
    render() {
        return (
            <StyledWrapper>
                <StyledHeading>
                    <span className="glyphicon glyphicon-home">&nbsp;EstatesList</span><hr></hr>
                </StyledHeading>
                <ApartmentsList />
            </StyledWrapper>
        );
    }
}

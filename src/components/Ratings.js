import React from 'react';
import styled from 'styled-components';
import { Ionicons } from 'react-web-vector-icons';

const Ratings = ({rating}) => {
    return <Container>
        <div>
            {
                [1,2,3,4,5].map(i => {
                    return <Ionicons key={i} name="ios-star" size={15} color={i <= rating ? "#F2AA00":"#E1E1E1"}/>
                })
            }
        </div>
        <RatingText>{rating.toFixed(1)}</RatingText>
    </Container>
}

const Container = styled.div`
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;    
    i{
        margin-right: 2px;
    }
`

const RatingText = styled.span`
    margin-left: 10px;
    font-weight: 600;
    font-size: 14px;
`

export default Ratings;
import React from 'react';
import { 
} from 'reactstrap';

import Colors from '../constants/colors';
import styled from 'styled-components';
import Filters from '../components/Filters';
import ProductItem from '../components/ProductItem';

const Home = () => {
    return <Container>
        <Filters/>
        <ProductsContainer>
            <ProductItem />
        </ProductsContainer>
    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 15px;
    flex: 1;
`
const ProductsContainer = styled.div`
    background: ${Colors.bgColor};
    padding: 15px;
    margin-left: 15px;
    flex: 1;
`

export default Home;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Colors from '../constants/colors';
import styled from 'styled-components';
import Filters from '../components/Filters';
import Sorting from '../components/Sorting';
import ProductItem from '../components/ProductItem';
import * as productActions from '../store/actions/product';
import * as cartActions from '../store/actions/cart';

const Home = () => {
    const dispatch = useDispatch();
    const [sortType, setSortType] = useState(0);
    const [rating, setRating] = useState(0);
    const [discount, setDiscount] = useState(0);
    const products = useSelector(state => state.product.products);
    let displayProducts = [];

    const handleAddToCart = (id) => {
        const product = products.find(product => product.id === id);
        dispatch(cartActions.addToCart(product));
    }

    const handleSort = (type) => {
        setSortType(type);
    }

    const handleFilter = (type, val, checked) => {
        if(type === 'rating'){
            setRating(checked ? val : 0);
        } else {
            setDiscount(checked ? val : 0);
        }
    }

    useEffect(() => {
        dispatch(productActions.getProducts());
    },[dispatch]);

    switch(sortType){
        case 1:
            displayProducts = products.slice().sort((a,b) => a.price - b.price);
            break;
        case -1:
            displayProducts = products.slice().sort((a,b) => b.price - a.price);
            break;
        default:
            displayProducts = products.slice();
            break;
    }

    //Applying all Filters
    displayProducts = displayProducts.filter(product => (product.rating >= rating && product.discount >= discount*10));

    return <Container>
        <Filters products={displayProducts} handleFilter={handleFilter}/>
        <ProductsContainer>
            <Sorting handleSort={handleSort}/>
            {
                displayProducts.map((product, i) => {
                    return <ProductItem key={i} item={product} addToCart={handleAddToCart}/>
                })
            }
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
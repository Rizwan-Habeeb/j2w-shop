import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { Ionicons } from 'react-web-vector-icons';
import { useDispatch } from 'react-redux';

import * as cartActions from '../store/actions/cart';

const CartItem = ({product}) => {
    const dispatch = useDispatch();

    const alterQty = (alt, e) => {
        e.preventDefault();
        switch(alt){
            case 1:
                dispatch(cartActions.addToCart(product));
                break;
            case -1:
                dispatch(cartActions.removeFromCart(product.id));
                break;
            case 0:
                dispatch(cartActions.deleteFromCart(product.id));
                break;
        }
    }

    return <Container>
        <Col md={2} className="text-align-center">
            <img className="img-thumbnail" src={product.images[0]}/>
        </Col>
        <Col md={7} className="d-flex flex-column justify-content-between">
            {product.name}
            <a href="#" onClick={(e) => {alterQty(0, e)}}>Remove</a>
        </Col>
        <Col md={2} className="d-flex">
            <a href="#" className="qty" onClick={(e) => {alterQty(-1, e)}}>
                <Ionicons name="md-remove" color="#666" size={20}/>
            </a>
            <span className="qty-val">{product.qty}</span>
            <a href="#" className="qty" onClick={(e) => {alterQty(1, e)}}>
                <Ionicons name="md-add" color="#666" size={20}/>
            </a>
        </Col>
        <Col md={1} className="price">
            ₹{product.price.toLocaleString()}
        </Col>
    </Container>
}

const Container = styled(Row)`
    padding: 15px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #eee;

    .img-thumbnail{
        border: 0;
    }
    a{
        text-decoration: none;
        font-size: 14px;
    }
    .price{
        font-size: 15px;
        font-weight: 600;
    }
    .qty{
        border: 1px solid #ccc;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 30px;
        height: 30px;
        &:active{
            background-color: #eee;
        }
    }
    .qty-val{
        margin: 0 7px;
    }
`

export default CartItem;
import React from 'react';
import { 
    Row,
    Col
} from 'reactstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Colors from '../constants/colors';
import styled from 'styled-components';
import CartItem from '../components/CartItem';

const Cart = () => {
    const { products, totalCartValue } = useSelector(state => state.cart);
    const deliveryCharge = 0;
    return <Container>
        <Row>
            <Col md={products.length > 0 ? 8:12}>
                <div className="cart-body">
                    <CartTitle>
                        My Cart ({products.length})
                    </CartTitle>
                    {
                        products.length === 0 &&
                        <div className="d-flex justify-content-center p-5">Your Shopping Cart is empty</div>
                    }
                    <CartContent>
                        {
                            products.map((product, i) => {
                                return <CartItem key={i} product={product}/>
                            })
                        }
                    </CartContent>
                    {
                        products.length > 0 &&
                        <div className="btns d-flex justify-content-end p-4">
                            <NavLink to="/">CONTINUE SHOPPING</NavLink>
                            <NavLink to="/cart" className="order">PLACE ORDER</NavLink>
                        </div>
                    }
                </div>
            </Col>
            {
                products.length > 0 &&
                <Col md={4}>
                    <div className="cart-body cart-price">
                        <CartTitle>Price details</CartTitle>
                        <div className="price-row">
                            <div>
                                Price ({products.length} {products.length === 1 ? "item":"items"})
                            </div>
                            <div>
                                ₹{totalCartValue.toLocaleString()}
                            </div>
                        </div>
                        <div className="price-row">
                            <div>
                                Delivery Charges
                            </div>
                            <div>
                                ₹{deliveryCharge.toLocaleString()}
                            </div>
                        </div>
                        <div className="price-row payable">
                            <div>
                                Amount Payable
                            </div>
                            <div>
                                ₹{(totalCartValue + deliveryCharge).toLocaleString()}
                            </div>
                        </div>
                    </div>
                </Col>
            }
        </Row>
    </Container>
}

const Container = styled.div`
    margin: 15px;
    flex: 1;

    .cart-body{
        background-color: #fff;
        border-radius: 5px;
        &.cart-price{
            padding: 20px 10px;
        }
        .price-row{
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            &.payable{
                border-top: 1px dashed #ccc;
                margin-top: 10px;
                padding-top: 25px;
            }
        }
    }

    .btns a{
        width: 200px;
        background-color: transparent;
        border: 1px solid #ccc;
        font-size: 15px;
        padding: 15px;
        margin-right: 20px;
        border-radius: 5px;
        text-align: center;
        text-decoration: none;
        color: #000;
        &.order{
            background-color: ${Colors.header};
            border: 1px solid ${Colors.header};
            color: #fff;
        }
    }
`

const CartTitle = styled.div`
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 400;
    border-bottom: 1px solid #eee;
    padding: 10px 20px;
`

const CartContent = styled.div`
    padding: 10px 20px;
`

export default Cart;
import React, { useState } from 'react';
import styled from 'styled-components';
import {
    Row,
    Col,
    Alert
} from 'reactstrap';

import Colors from '../constants/colors';
import Ratings from './Ratings';

const ProductItem = (props) => {

    const { item: product } = props;
    const [ selectedImg, setSelectedImg ] = useState(0);
    const [ showSuccess, setShowSuccess ] = useState(false);

    const handleCartAdd = (id) => {
        props.addToCart(id);
        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
        }, 2000);
    }

    return <Container>
        <Col md={3} className="img-container">
            <div className="product-image">
                <img alt="product thumbnail" src={product.images[selectedImg]}/>
            </div>
            <div className="thumbnails-container">
                {
                    product.images.map((img, i) => {
                        return <img 
                            alt=""
                            className={"thumbnail" + (selectedImg === i ? " selected":"")} 
                            key={i} 
                            src={img}
                            onClick={() => {setSelectedImg(i)}}
                            />
                    })
                }
            </div>
        </Col>
        <Col md={6} className="desc-container">
            <h3 className="title">{product.name}</h3>
            <Ratings rating={product.rating}/>
            <ul className="feature-list">
            {
                product.features.map((feature, i) => {
                    return <li key={i}>{feature}</li>
                })
            }
            </ul>
            
            <div className="position-relative">
                <button onClick={() => {handleCartAdd(product.id)}}>Add to Cart</button>
                {showSuccess && <FloatingAlert color="success">Successfully Added!</FloatingAlert>}
            </div>
        </Col>
        <Col md={3} className="final-col">
            <div className="price">₹{product.price.toLocaleString()}</div>
        </Col>
    </Container>
}

const Container = styled(Row)`
    padding: 35px 20px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #ccc;
    min-height: 350px;

    .img-container{
        max-width: 200px;
        max-height: 300px;
        display: flex;
        flex: 1;
        flex-direction: row-reverse;
        .product-image{
            display: flex;
            margin-bottom: 10px;
            margin-left: 10px;
            img{
                width: 100%;
                object-fit: contain;
            }
        }
        .thumbnails-container{
            display: flex;
            flex-direction: column;
            .thumbnail{
                cursor: pointer;
                width: 30px;
                height: 30px;
                border-radius: 5px;
                border: 1px solid #ccc;
                margin-bottom: 5px;

                &.selected{
                    border: 2px solid #00f;
                    padding: 1px;
                }
            }
        }
    }

    .desc-container{
        padding-left: 25px;

        .title{
            font-weight: 600;
            font-size: 18px;
            margin-bottom: 15px;
        }
        .feature-list{
            font-size: 14px;
            list-style: none;
            padding: 0;
            
            li{
                display: table-row;
                &:before{
                    content: "\\2022";
                    color: #c2c2c2;
                    margin-right: 10px;
                    display: table-cell;
                    padding-right: 8px;
                }
            }
        }
        button{
            background-color: transparent;
            border: 2px solid ${Colors.header};
            background-color: ${Colors.header};
            border-radius: 5px;
            color: #fff;
            font-size: 16px;
            padding: 5px 15px;
            margin-bottom: 10px;
        }
    }

    .final-col{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        min-width: 150px;
        padding-left: 25px;

        .price{
            font-size: 25px;
            font-weight: 700;
        }
    }
`

const FloatingAlert = styled(Alert)`
    position: absolute;
    right: 0;
    top: 0;
    height: 40px;
    padding: 7px 20px;
`

export default ProductItem;
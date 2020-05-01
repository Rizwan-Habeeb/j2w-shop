import React from 'react';
import { Nav } from 'reactstrap';
import styled from 'styled-components';

const Filters = () => {
    return <CustomSideNav vertical>
        <div className="main-title">
            Filters
        </div>
        <div className="filter-box">

            <div className="title">
                Customer Reviews
            </div>
            <div>
                <ul>
                {
                        [
                            "4★ & above",
                            "3★ & above",
                            "2★ & above",
                            "1★ & above",
                        ].map((rating) => {
                            return <li>
                                <label>
                                    <input type="checkbox"></input>
                                    {rating}
                                </label>
                            </li>
                        })
                    }                    
                </ul>
            
            </div>
        </div>
        <div className="filter-box">
            <div className="title">
                Discounts
            </div>
            <div>
                <ul>
                    {
                        [
                            "50% or more",
                            "40% or more",
                            "30% or more",
                            "20% or more",
                            "10% or more",
                            "10% and below"
                        ].map((discount) => {
                            return <li>
                                <label>
                                    <input type="checkbox"></input>
                                    {discount}
                                </label>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
        </CustomSideNav>
}

const CustomSideNav = styled(Nav)`
    width: 270px;
    background-color: #fff;
    padding: 15px;

    .main-title{
        font-size: 18px;
        font-weight: 300;
    }
    ul {
        list-style-type: none;
        font-size: 14px;
        padding-left: 0;
        li{
            padding-top: 5px;
            input{
                position: relative;
                top: 2px;
                margin-right: 10px;
            }
        }
    }
    .title{
        font-size: 13px;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: .3px;
        padding-bottom: 10px;

    }
    .filter-box{
        border-top: 1px solid #eee;
        padding-top: 15px;
        margin-top: 10px;
    }
`

export default Filters;
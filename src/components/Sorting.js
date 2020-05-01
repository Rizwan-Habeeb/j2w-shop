import React, { useState } from 'react';
import styled from 'styled-components';

const Sorting = (props) => {
    const [active, setActive] = useState(0);

    const handleClick = (type, e) => {
        e.preventDefault();
        setActive(type);
        props.handleSort(type);
    }

    console.log(active);

    return <Container vertical>
            <span>Sort By </span>
            <div>
                <a 
                    href="#" 
                    className={"sortBtn" + (active == 0 ? " active":"")} 
                    onClick={(e) => {handleClick(0, e)}}>Popularity
                </a>
                <a 
                    href="#" 
                    className={"sortBtn" + (active == 1 ? " active":"")} 
                    onClick={(e) => {handleClick(1, e)}}>Price -- Low to High
                </a>
                <a 
                    href="#" 
                    className={"sortBtn" + (active == -1 ? " active":"")} 
                    onClick={(e) => {handleClick(-1, e)}}>Price -- High to Low
                </a>
            </div>
        </Container>
}

const Container = styled.div`
    background-color: #fff;
    padding: 0 10px;
    border-bottom: 1px solid #ddd;
    display: flex;
    padding-bottom: 5px;

    .sortBtn{
        text-decoration: none;
        margin: 0 10px;
        font-size: 14px;
        color: #212121;
        line-height: 1.4;
        padding-bottom: 5px;
        &.active{
            border-bottom: 2px solid #da2234;
            color: #da2234;
        }
    }
`

export default Sorting;
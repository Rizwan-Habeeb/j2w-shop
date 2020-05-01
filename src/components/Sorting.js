import React, { useState } from 'react';
import styled from 'styled-components';

const Sorting = (props) => {
    const [active, setActive] = useState(0);

    const handleClick = (type, e) => {
        e.preventDefault();
        props.handleSort(type);
        setActive(type);
    }

    return <Container vertical>
            <span>Sort By </span>
            <div>
                <a 
                    href="#" 
                    className={"sortBtn" + active === 0 ? " active":""} 
                    onClick={(e) => {handleClick(0, e)}}>Popularity
                </a>
                <a 
                    href="#" 
                    className={"sortBtn" + active === 1 ? " active":""} 
                    onClick={(e) => {handleClick(1, e)}}>Price -- Low to High
                </a>
                <a 
                    href="#" 
                    className={"sortBtn" + active === -1 ? " active":""} 
                    onClick={(e) => {handleClick(-1, e)}}>Price -- High to Low
                </a>
            </div>
        </Container>
}

const Container = styled.div`
    background-color: #fff;
    padding: 10px;
    padding-top: 0;
    border-bottom: 1px solid #ddd;

    .sortBtn{
        &.active{
            
        }
    }
`

export default Sorting;
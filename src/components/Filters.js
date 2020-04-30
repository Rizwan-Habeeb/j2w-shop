import React from 'react';
import { Nav } from 'reactstrap';
import styled from 'styled-components';

const Filters = () => {
    return <CustomSideNav vertical>
            Filters
        </CustomSideNav>
}

const CustomSideNav = styled(Nav)`
    width: 270px;
    background-color: #343A3F;
`

export default Filters;
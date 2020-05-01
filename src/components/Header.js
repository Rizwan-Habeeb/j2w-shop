import React from 'react';
import { 
    Navbar, 
    NavbarBrand,
    Nav,
    Badge
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Ionicons } from 'react-web-vector-icons';
import { useSelector } from 'react-redux';

import Colors from '../constants/colors';
import styled from 'styled-components';

const Header = () => {
    const products = useSelector(state => state.cart.products);
    const cartCount = products.reduce((total, product) => {
        return total + product.qty;
    }, 0)
    return <div>
        <ColoredNavbar color={Colors.primary} dark expand="md">
            <PaddedNavLink exact to="/">
                <NavbarBrand href="#">J2W Shopping site</NavbarBrand>
            </PaddedNavLink>
            <Nav className="mr-auto" navbar></Nav>
            <PaddedNavLink exact to="/cart">
                <Ionicons name="ios-cart" size={24} color="#fff"/>
                {
                    cartCount > 0 &&
                    <CornerBadge color="dark">
                        {cartCount}
                    </CornerBadge>
                }
            </PaddedNavLink>
        </ColoredNavbar>
    </div>
}

const ColoredNavbar = styled(Navbar)`
    background: ${Colors.header}
`
const CornerBadge = styled(Badge)`
    position: absolute;
    border-radius: 20px;
    padding: 3px 6px;
    padding-left: 5px;
    padding-bottom: 4px;
    font-size: 11px;
`
const PaddedNavLink = styled(NavLink)`
    padding: 0 20px;
    &:hover{
        text-decoration: none;
    }
`

export default Header;
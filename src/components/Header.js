import React from 'react';
import { Navbar, 
    NavbarBrand,
} from 'reactstrap';

import Colors from '../constants/colors';
import styled from 'styled-components';

const Header = () => {
    return <div>
        <ColoredNavbar color={Colors.primary} dark expand="md">
            <NavbarBrand href="/">J2W Shopping site</NavbarBrand>
        </ColoredNavbar>
    </div>
}

const ColoredNavbar = styled(Navbar)`
    background: ${Colors.bgColor}
`

export default Header;
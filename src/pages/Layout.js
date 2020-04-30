import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Header from '../components/Header';
import Home from './Home';
import Cart from './Cart';

const Layout = () => {
    return <BrowserRouter>
        <Header/>
        <Container>
            <Switch >
                <Route exact path='/' component={Home} />
                <Route path="/cart" component={Cart} />
                <Route component={Home} />
            </Switch>
        </Container>
    </BrowserRouter>
}

const Container = styled.div`
    display: flex;
    height: 100%;
`

export default Layout;
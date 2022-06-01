import * as React from 'react';
import Head from './Head';
import Navigation from './Navigation';
import Header from './Header';

import '../styles/globals.css';
import Footer from './Footer';
import Container from './Container';

const Layout = ({ pageTitle, children }) => {

    return (
        <>
            <Head pageTitle={pageTitle} />
                <Navigation />
                <Header />
                <Container>
                    {children}
                </Container>
                <Footer />
        </>
    )
}

export default Layout;
import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Layout from './layout';

function Routes(){
    return(        
        <Switch>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route exact path="/checkout" component={Checkout} />
            </Layout>
        </Switch>
    );
}

export default Routes;
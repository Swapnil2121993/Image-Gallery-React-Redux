import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import App from '../../src/App';

export default ()=>{
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={App}/>
            <Route path='/:title' exact component={App} /> 
        </Switch>
    </BrowserRouter>


import React from 'react';
import { Route } from 'react-router';
import  Book from './components/Book';
import  Welcome from './components/Welcome';
import Home from './containers/home';

const App = () => {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/welcome" component={Welcome}/>
        </div>
    ) 
}

export default App;
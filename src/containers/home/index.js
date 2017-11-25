import React, { Component } from 'react';
import Book from '../../components/Book';
class Home extends Component {
    render () {
        return (
            <div>
               <h1>home</h1>
               <Book/>
            </div>
        )
    }
}
export default Home;
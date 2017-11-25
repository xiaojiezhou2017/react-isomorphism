import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Book extends Component{
    render () {
        return (
            <Link to="/welcome"></Link>
        )
    }
}

export default Book;
import React, { Component } from 'react';
import Book from '../../components/Book';
import { connect } from 'react-redux'; 
class Home extends Component {
    render () {
        const { name } = this.props;
        return (
            <div>
               <h1>home</h1>
               <p>name: {name}</p>
               <Book/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}
export default connect(
    mapStateToProps
)(Home);
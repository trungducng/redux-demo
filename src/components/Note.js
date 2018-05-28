import React from 'react';
import {connect} from 'react-redux';
import {removeItem} from '../action';

class Note extends React.Component {
    dispatch = this.props.dispatch;

    removeNote() {
        this.dispatch(removeItem(this.props.item));
    }

    render() {
        return (
            <div>
                <h4>{this.props.children}</h4>
                <button onClick={this.removeNote.bind(this)}>Delete</button>
            </div>    
        );
    }
}

export default connect((state) => {
    return {};
})(Note);
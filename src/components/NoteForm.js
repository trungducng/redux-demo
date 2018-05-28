import React from 'react';
import {connect} from 'react-redux';
import {addItem, toggleStatus} from '../action';

class NoteForm extends React.Component { 
    handleSubmit(e) {
        e.preventDefault();
        let {dispatch} = this.props;
        dispatch(addItem(this.refs.txt.value));
        this.showAddForm();
    }

    showAddForm() {
        let {dispatch} = this.props;
        dispatch(toggleStatus());
    }

    render() {
        if (this.props.status === true) {
            return (
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type='text' placeholder='Enter a note' ref='txt'/>
                    <button>ADD</button>
                </form>
            );
        } else {
            return (
                <button onClick={() => this.showAddForm()}>+</button>
            );
        }
        
    }
}

export default connect((state) => {
    return {status: state.status}
})(NoteForm);
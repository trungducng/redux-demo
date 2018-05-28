import React from 'react';
import Note from './Note';
import NoteForm from './NoteForm';
import {connect} from 'react-redux';

class List extends React.Component {
    render() {
        return (
            <div>
                <NoteForm />
                {
                    this.props.mang.map((e, i) => <Note 
                    item={e}
                    index={i}
                    key={i}>{e}</Note>)
                }
            </div>
        );
    }
}

export default connect((state) => {
    return {mang: state.mang}
})(List);
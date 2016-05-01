import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          onClick={() => this.props.selectBook(book)}
          className='list-group-item' 
          key={book.title}> 
          {book.title} 
        </li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }; 
}

//Anything returned from this function will end up as this.props.
//On the BookList container
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result should be passed
  //to all of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

//Promote BookList from a component to a container
//It needs to know about new dispatch method SelectBook
//And make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

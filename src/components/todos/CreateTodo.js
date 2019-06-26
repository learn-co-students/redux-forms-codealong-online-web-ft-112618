import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  // handleChange(event) {
  //   this.setState({
  //     text: event.target.value
  //   });
  // }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };
  
  render() {
    return(
      <div>
        <form>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: FormData => dispatch({ type: 'ADD_TODO', payload: FormData })
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);

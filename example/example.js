import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactCKEditor from "../src";

class Example extends Component {
  constructor(props){
    super(props);

    //State initialization
    this.state = {
      content: "Hello World"
    };
  }

  onChange(content){
    console.log("Content: " + content);
  }

  render() {
    return (
      <div>
        <ReactCKEditor
          name='example'
          content={this.state.content}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root')
);

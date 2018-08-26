# react-ckeditor5-classic
[![npm version](https://badge.fury.io/js/react-ckeditor5-classic.svg)](https://badge.fury.io/js/react-ckeditor5-classic)

[![NPM](https://nodei.co/npm/react-ckeditor5-classic.png)](https://nodei.co/npm/react-ckeditor5-classic/)

## How to install?
```bash
npm i react-ckeditor5-classic
```

## How to use?
```jsx
import React, { Component } from 'react';
import ReactCKEditor from 'react-ckeditor5-classic';

class App extends Component {
  onChange(content){
    console.log("Content: " + content);
  }
  render() {
      return (
          <div className="App">
              <h2>Using CKEditor 5 build in React</h2>
              <ReactCKEditor
                  name='example'
                  content={this.state.content}
                  onChange={this.onChange}
              />
          </div>
      );
  }
}

export default App;
```

## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 150px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>name</td>
          <td>string</td>
          <td>editor</td>
          <td>Object to init</td>
        </tr>
        <tr>
          <td>onChange</td>
          <td>function</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>config</td>
          <td>object</td>
          <td>
              height: '300px'
              width: 'auto'
            </td>
          <td>CKEditor config</td>
        </tr>
    </tbody>
</table>

## License

react-ckeditor5-classic is released under the MIT license.
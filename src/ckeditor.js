import React, { Component } from 'react';
import PropTypes from 'prop-types';
import loadScript from 'load-script';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

var defaultCDN = 'https://cdn.ckeditor.com/ckeditor5/11.0.1/classic/ckeditor.js';

/**
 * @author vdhoangson
 * @description CKEditor component to render a CKEditor textarea with defined configs and all CKEditor events handler
 */
class ReactCKEditor extends Component {
  constructor(props) {
    super(props);

    //Bindings
    this.onLoad = this.onLoad.bind(this);

    //State initialization
    this.state = {
      isScriptLoaded: props.isScriptLoaded,
      name: this.props.name,
    };
  }

  //load ckeditor script as soon as component mounts if not already loaded
  componentDidMount() {
    if (!this.state.isScriptLoaded) {
      // this.onLoad();
      // loadScript(this.props.scriptUrl, this.onLoad);
    } else {
      // this.onLoad();
    }

    this.unmounted = false;
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  onLoad() {
    if (this.unmounted) return;

    this.setState({
      isScriptLoaded: true
    });

    const { name } = this.state;
    const { onChange, config } = this.props;

    this.editor = window.ClassicEditor;

    if(!this.editor){
      console.error('CKEditor not found');
      return;
    }

    this.editor
    .create( document.querySelector( "#" + name ) )
    .then( editor => {
      const target = document.getElementsByClassName("ck-content")[0];

      if(config.height) target.style.height = config.height;
      if(config.width) target.style.width = config.width;

      //set content
      if(this.props.content) editor.setData(this.props.content);

      editor.model.document.on('change', function( e ) {
        onChange(editor.getData());
      });
      
    })
    .catch( error => {
      console.error( error );
    } );
  }

  render() {
    return (<CKEditor
      editor={ ClassicEditor }
      data="<p>Hello from CKEditor 5!</p>"
      onInit={ editor => {
          // You can store the "editor" and use when it's needed.
          console.log( 'Editor is ready to use!', editor );
      } }
      onChange={ ( event, editor ) => {
          const data = editor.getData();
          console.log( { event, editor, data } );
      } }
  />);
  }
}

ReactCKEditor.defaultProps = {
  name: 'editor',
  content: '',
  config: {
    height: '300px',
    width: 'auto'
  },
  isScriptLoaded: false,
  scriptUrl: defaultCDN,
  activeClass: '',
  onChange: ()=>{}
};

ReactCKEditor.propTypes = {
  name: PropTypes.string,
  content: PropTypes.any,
  config: PropTypes.object,
  isScriptLoaded: PropTypes.bool,
  scriptUrl: PropTypes.string,
  activeClass: PropTypes.string,
  onChange: PropTypes.func,
};

export default ReactCKEditor;

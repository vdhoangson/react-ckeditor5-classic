import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
      name: this.props.name,
    };
  }

  //load ckeditor script as soon as component mounts if not already loaded
  componentDidMount() {
    this.onLoad();
  }

  onLoad() {
    if (this.unmounted) return;

    const { name } = this.state;
    const { onChange, config } = this.props;

    this.editor = ClassicEditor;

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

    this.setState({
      isScriptLoaded: true
    });
  }

  render() {
    return <div className={this.props.activeClass} id={this.state.name} />;
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
  activeClass: '',
  onChange: ()=>{}
};

ReactCKEditor.propTypes = {
  name: PropTypes.string,
  content: PropTypes.any,
  config: PropTypes.object,
  isScriptLoaded: PropTypes.bool,
  activeClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default ReactCKEditor;

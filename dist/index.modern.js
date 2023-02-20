import React__default, { createElement } from 'react';
import $ from 'jquery';
import katex from 'katex';
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

var mathquill4quill;
if (typeof window !== 'undefined') {
  window.katex = katex;
  window.jQuery = window.$ = $;
  mathquill4quill = require('mathquill4quill');
  require('@edtr-io/mathquill/build/mathquill.js');
}
Quill.register('modules/imageResize', ImageResize);
var customOperator = [['\\pm', '\\pm'], ['\\sqrt{x}', '\\sqrt'], ['\\sqrt[3]{x}', '\\sqrt[3]{}'], ['\\sqrt[n]{x}', '\\nthroot'], ['\\frac{x}{y}', '\\frac'], ['\\sum^{s}_{x}{d}', '\\sum'], ['\\prod^{s}_{x}{d}', '\\prod'], ['\\coprod^{s}_{x}{d}', '\\coprod'], ['\\int^{s}_{x}{d}', '\\int'], ['\\binom{n}{k}', '\\binom']];
var QuillEditor = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(QuillEditor, _React$Component);
  function QuillEditor(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.reactQuill = React__default.createRef();
    _this.state = {
      editorHtml: _this.props.initialValue,
      theme: 'snow',
      placeholder: 'Write something...'
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.attachQuillRefs = _this.attachQuillRefs.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = QuillEditor.prototype;
  _proto.handleChange = function handleChange(html) {
    this.setState({
      editorHtml: html
    });
    this.props.onChange(html);
  };
  _proto.componentDidMount = function componentDidMount() {
    if (!this.didAttachQuillRefs) {
      this.attachQuillRefs();
      this.didAttachQuillRefs = true;
    }
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.initialValue === '') {
      this.setState({
        editorHtml: this.props.initialValue
      });
    }
  };
  _proto.attachQuillRefs = function attachQuillRefs() {
    var enableMathQuillFormulaAuthoring = mathquill4quill({
      Quill: Quill,
      katex: katex
    });
    enableMathQuillFormulaAuthoring(this.reactQuill.current.editor, {
      operators: this.props.customOperator || customOperator,
      displayHistory: true
    });
  };
  _proto.render = function render() {
    var defaultToolbar = [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
      list: 'ordered'
    }, {
      list: 'bullet'
    }], [{
      script: 'sub'
    }, {
      script: 'super'
    }], [{
      header: [1, 2, 3, false]
    }], ['link', 'image', 'formula'], [{
      color: []
    }, {
      background: []
    }], [{
      align: []
    }], ['clean']];
    return React__default.createElement(ReactQuill, {
      ref: this.reactQuill,
      modules: {
        formula: true,
        toolbar: this.props.toolbar || defaultToolbar,
        clipboard: {
          matchVisual: false
        },
        imageResize: {
          parchment: Quill["import"]('parchment'),
          modules: ['Resize', 'DisplaySize']
        }
      },
      value: this.state.editorHtml,
      style: this.state.style,
      onChange: this.handleChange,
      onBlur: this.props.onBlur,
      theme: this.props.theme || 'snow',
      placeholder: this.props.placeholder || 'Write something..',
      bounds: '.quill'
    });
  };
  return QuillEditor;
}(React__default.Component);

var Editor = function Editor(props) {
  return React__default.createElement(QuillEditor, Object.assign({}, props));
};

var QuillEditor$1 = function QuillEditor(props) {
  return createElement(Editor, Object.assign({}, props));
};

export default QuillEditor$1;
//# sourceMappingURL=index.modern.js.map

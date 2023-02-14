import React from 'react';
import $ from 'jquery';
import katex from 'katex';
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
import 'katex/dist/katex.min.css';
import '@edtr-io/mathquill/build/mathquill.css';
import 'mathquill4quill/mathquill4quill.css';
import 'react-quill/dist/quill.snow.css';

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
var QuillEditor = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(QuillEditor, _React$Component);
  function QuillEditor(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.reactQuill = React.createRef();
    _this.state = {
      editorHtml: _this.props.initialValue,
      theme: 'snow',
      placeholder: 'Write something...'
    };
    _this.attachQuillRefs = _this.attachQuillRefs.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = QuillEditor.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.attachQuillRefs();
    console.log(this.props.initialValue);
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
      operators: [['\\pm', '\\pm'], ['\\sqrt{x}', '\\sqrt'], ['\\sqrt[3]{x}', '\\sqrt[3]{}'], ['\\sqrt[n]{x}', '\\nthroot'], ['\\frac{x}{y}', '\\frac'], ['\\sum^{s}_{x}{d}', '\\sum'], ['\\prod^{s}_{x}{d}', '\\prod'], ['\\coprod^{s}_{x}{d}', '\\coprod'], ['\\int^{s}_{x}{d}', '\\int'], ['\\binom{n}{k}', '\\binom']],
      displayHistory: true
    });
  };
  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(ReactQuill, {
      ref: this.reactQuill,
      modules: {
        formula: true,
        toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
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
        }], ['clean']],
        clipboard: {
          matchVisual: false
        },
        imageResize: {
          parchment: Quill["import"]('parchment'),
          modules: ['Resize', 'DisplaySize']
        }
      },
      value: this.state.editorHtml,
      theme: "snow",
      placeholder: "Compose an epic ...",
      bounds: ".quill"
    });
  };
  return QuillEditor;
}(React.Component);

var Editor = function Editor(props) {
  return /*#__PURE__*/React.createElement(QuillEditor, props);
};

var QuillEditor$1 = function QuillEditor(_ref) {
  var initialValue = _ref.initialValue;
  return /*#__PURE__*/React.createElement(Editor, {
    initialValue: initialValue
  });
};

export { QuillEditor$1 as QuillEditor };
//# sourceMappingURL=index.modern.js.map
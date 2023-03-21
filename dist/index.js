function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var $ = _interopDefault(require('jquery'));
var katex = _interopDefault(require('katex'));
var ReactQuill = require('react-quill');
var ReactQuill__default = _interopDefault(ReactQuill);
var BlotFormatter = _interopDefault(require('quill-blot-formatter'));

var mathquill4quill;
if (typeof window !== 'undefined') {
  window.katex = katex;
  window.jQuery = window.$ = $;
  mathquill4quill = require('mathquill4quill');
  require('@edtr-io/mathquill/build/mathquill.js');
}
ReactQuill.Quill.register('modules/blotFormatter', BlotFormatter);
var customOperator = [['\\pm', '\\pm'], ['\\sqrt{x}', '\\sqrt'], ['\\sqrt[3]{x}', '\\sqrt[3]{}'], ['\\sqrt[n]{x}', '\\nthroot'], ['\\frac{x}{y}', '\\frac'], ['\\sum^{s}_{x}{d}', '\\sum'], ['\\prod^{s}_{x}{d}', '\\prod'], ['\\coprod^{s}_{x}{d}', '\\coprod'], ['\\int^{s}_{x}{d}', '\\int'], ['\\binom{n}{k}', '\\binom']];
var QuillEditor = function QuillEditor(props) {
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
  }], [{
    direction: 'rtl'
  }], ['link', 'image', 'formula'], [{
    color: []
  }, {
    background: []
  }], [{
    align: []
  }], ['clean']];
  var reactQuill = React.useRef(null);
  var _useState = React.useState(''),
    editorHtml = _useState[0],
    setEditorHtml = _useState[1];
  var didAttachQuillRefs = false;
  var attachQuillRefs = function attachQuillRefs() {
    if (!didAttachQuillRefs) {
      var enableMathQuillFormulaAuthoring = mathquill4quill({
        Quill: ReactQuill.Quill,
        katex: katex
      });
      enableMathQuillFormulaAuthoring(reactQuill === null || reactQuill === void 0 ? void 0 : reactQuill.current.editor, {
        operators: props.customOperator || customOperator,
        displayHistory: true
      });
      didAttachQuillRefs = true;
    }
  };
  React.useEffect(function () {
    attachQuillRefs();
  }, []);
  React.useEffect(function () {
    if (props.initialValue) {
      setEditorHtml(props.initialValue);
    }
  }, [props.initialValue]);
  var handleChange = function handleChange(value) {
    setEditorHtml(value);
    props.onChange && props.onChange(value);
  };
  return React__default.createElement(ReactQuill__default, {
    ref: reactQuill,
    modules: {
      formula: true,
      toolbar: props.toolbar || defaultToolbar,
      clipboard: {
        matchVisual: false
      },
      blotFormatter: {}
    },
    value: editorHtml,
    onChange: handleChange,
    onBlur: props.onBlur,
    theme: props.theme || 'snow',
    placeholder: props.placeholder || 'Write something..',
    bounds: '.quill',
    readOnly: props.readOnly
  });
};

var Editor = function Editor(props) {
  return React__default.createElement(QuillEditor, Object.assign({}, props));
};

var QuillEditor$1 = function QuillEditor(props) {
  return React.createElement(Editor, Object.assign({}, props));
};

module.exports = QuillEditor$1;
//# sourceMappingURL=index.js.map

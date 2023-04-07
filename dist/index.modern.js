import React__default, { useRef, useState, useEffect, createElement } from 'react';
import $ from 'jquery';
import katex from 'katex';
import ReactQuill, { Quill } from 'react-quill';
import BlotFormatter from 'quill-blot-formatter';

var mathquill4quill;
if (typeof window !== 'undefined') {
  window.katex = katex;
  window.jQuery = window.$ = $;
  mathquill4quill = require('mathquill4quill');
  require('@edtr-io/mathquill/build/mathquill.js');
}
Quill.register('modules/blotFormatter', BlotFormatter);
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
  var reactQuill = useRef(null);
  var _useState = useState(''),
    editorHtml = _useState[0],
    setEditorHtml = _useState[1];
  var didAttachQuillRefs = false;
  var attachQuillRefs = function attachQuillRefs() {
    if (!didAttachQuillRefs) {
      var enableMathQuillFormulaAuthoring = mathquill4quill({
        Quill: Quill,
        katex: katex
      });
      enableMathQuillFormulaAuthoring(reactQuill === null || reactQuill === void 0 ? void 0 : reactQuill.current.editor, {
        operators: props.customOperator || customOperator,
        displayHistory: true
      });
      didAttachQuillRefs = true;
    }
  };
  useEffect(function () {
    attachQuillRefs();
  }, []);
  useEffect(function () {
    if (props.initialValue) {
      setEditorHtml(props.initialValue);
    }
  }, [props.initialValue]);
  useEffect(function () {
    if (props.resetField) {
      setEditorHtml('');
      props.setResetField && props.setResetField(false);
    }
  }, [props.resetField]);
  var handleChange = function handleChange(value) {
    setEditorHtml(value);
    props.onChange && props.onChange(value);
  };
  return React__default.createElement(ReactQuill, {
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
  return createElement(Editor, Object.assign({}, props));
};

export default QuillEditor$1;
//# sourceMappingURL=index.modern.js.map

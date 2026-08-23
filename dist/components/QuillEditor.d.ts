import katex from 'katex';
import React from 'react';
import { IEditor } from '../interface';
declare global {
    interface Window {
        katex: typeof katex;
        jQuery: JQueryStatic;
        $: JQueryStatic;
    }
}
declare const QuillEditor: (props: IEditor) => React.JSX.Element;
export default QuillEditor;

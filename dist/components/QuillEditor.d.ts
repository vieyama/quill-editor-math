import React from 'react';
declare class QuillEditor extends React.Component {
    constructor(props: {} | Readonly<{}>);
    handleChange(html: string): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: {
        initialValue: string;
    }): void;
    attachQuillRefs(): void;
    render(): JSX.Element;
}
export default QuillEditor;

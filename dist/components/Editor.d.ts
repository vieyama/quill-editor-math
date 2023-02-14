import React from 'react';
import './styles.css';
export interface IEditor {
    initialValue: string;
}
declare const Editor: React.FC<IEditor>;
export default Editor;

import React from 'react';
export interface IEditor {
    initialValue: string;
}
declare const Editor: React.FC<IEditor>;
export default Editor;

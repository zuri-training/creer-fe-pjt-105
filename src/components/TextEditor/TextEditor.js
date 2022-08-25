import { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';

const TextEditor = () => {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    // const [toolbarOnFocus, setToolbarOnFocus] = useState(false);

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    }

  return (
    <div style={{maxWidth: '100%', height: 'fit-content', padding: '5px'}}>
        <Editor
        toolbarOnFocus
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={(editorState) => onEditorStateChange(editorState)}
        />
    </div>
  )
}

export default TextEditor;
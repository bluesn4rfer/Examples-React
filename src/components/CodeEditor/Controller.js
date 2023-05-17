import React, { useState, useRef, useEffect } from 'react';

import { basicSetup, EditorView } from 'codemirror';
import { EditorState, Compartment } from '@codemirror/state';
import { keymap } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';

function CodeEditor(props) {
  const { value, onChange } = props;
 
  const editor = useRef(null);
  // const valueRef = useRef(value);

  // useEffect(() => {
  //   console.log('CodeEditor useEffect()');
  //   valueRef.current = value;
  // }, [value]);

  useEffect(() => {
    // CodeMirror Extension: update code in store
    const onUpdate = EditorView.updateListener.of((view) => {
        onChange(view.state.doc.toString());
    });
    
    const editorTheme = EditorView.theme({}, { dark: true });

    const codeMirrorOptions = {
      // doc: valueRef.current,
      doc: value,
      lineNumbers: true,
      lineWrapping: true,
      width: '300px',
      autoCloseBrackets: true,
      cursorScrollMargin: 48,
      indentUnit: 2,
      tabSize: 2,
      styleActiveLine: true,
      viewportMargin: 99,
      extensions: [
        basicSetup,
        keymap.of(defaultKeymap),
        onUpdate,
        editorTheme
      ],
    };

    const startState = EditorState.create(codeMirrorOptions);

    const editorView = new EditorView({
      state: startState,
      parent: editor.current,
    });

    return () => {
      editorView.destroy();
    };
  }, []);

  return <div ref={editor} />;
};

export default CodeEditor;
import React, { useRef, useEffect } from 'react';

import { basicSetup, EditorView } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { keymap } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';

function CodeEditor(props) {
  const { code, onChange, updateCode } = props;
 
  const editor = useRef(null);
  const editorViewRef = useRef(null);
  const codeRef = useRef(code);
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    codeRef.current = code;
  }, [code]);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);


  useEffect(() => {
    // CodeMirror Extension: update code in store
    const onUpdate = EditorView.updateListener.of((view) => {
        onChangeRef.current(view.state.doc.toString());
    });
    
    const editorTheme = EditorView.theme({}, { dark: true });

    const codeMirrorOptions = {
      doc: codeRef.current,
      lineNumbers: true,
      lineWrapping: true,
      width: '100%',
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

    editorViewRef.current = new EditorView({
      state: startState,
      parent: editor.current,
    });

    return () => {
      editorViewRef.current.destroy();
    };
  }, []);

  useEffect(() => {
    const editorView = editorViewRef.current;
    if(editorView.state && editorView.state.doc && updateCode){
      console.log('CodeEditor/Controller.js updateCode = '+updateCode);
      editorView.dispatch({
        changes: {
            from: 0,
            to: editorView.state.doc.length,
            insert: updateCode
        }
      });
    }

  }, [updateCode]);

  return <div ref={editor} className="w-100" />;
};

export default CodeEditor;
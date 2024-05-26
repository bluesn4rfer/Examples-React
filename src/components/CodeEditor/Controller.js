import React, { useRef, useEffect, useReducer } from 'react';
import { basicSetup, EditorView } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { keymap, highlightActiveLine, highlightSpecialChars } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript'; // syntax highlighting for JavaScript
import { searchKeymap, highlightSelectionMatches } from '@codemirror/search';
import { closeBrackets, autocompletion, completionKeymap } from '@codemirror/autocomplete';
import { bracketMatching } from '@codemirror/language';
import { commentKeymap } from '@codemirror/commands';

// Define light and dark themes
const lightTheme = EditorView.theme({
  '&': {
    color: 'black',
    backgroundColor: '#f5f5f5'
  },
  '.cm-content': {
    caretColor: '#000000'
  },
  ".cm-matchingBracket": {
    backgroundColor: "#BDD5FA",
    color: "#000000"
  },
  ".cm-nonmatchingBracket": {
    backgroundColor: "#FF9DA6",
    color: "#000000"
  }  
}, { dark: false });

const darkTheme = EditorView.theme({
  '&': {
    color: 'white',
    backgroundColor: '#1e1e1e'
  },
  '.cm-content': {
    caretColor: '#ffffff'
  },
  ".cm-matchingBracket": {
    backgroundColor: "#BDD5FA",
    color: "#000000"
  },
  ".cm-nonmatchingBracket": {
    backgroundColor: "#FF9DA6",
    color: "#000000"
  }
}, { dark: true });

function CodeEditor({ code, onChange, updateCode, theme = 'dark', ...props }) {
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
    const editorView = editorViewRef.current;
    if(editorView?.state && editorView.state.doc && updateCode){
      console.debug('CodeEditor/Controller.js updateCode = '+updateCode);
      editorView.dispatch({
        changes: {
            from: 0,
            to: editorView.state.doc.length,
            insert: updateCode
        }
      });
    }

  }, [updateCode]);

  useEffect(() => {
    const onUpdate = EditorView.updateListener.of((view) => {
      onChangeRef.current(view.state.doc.toString());
    });

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
        //keymap.of([...defaultKeymap, indentWithTab]),
        javascript(), // Adds JavaScript syntax highlighting
        //highlightActiveLine(),
        //highlightSpecialChars(),
        bracketMatching(),
        closeBrackets(),
        autocompletion(), // Enables autocomplete feature
        highlightSelectionMatches(),
        //keymap.of([...searchKeymap, ...completionKeymap, ...commentKeymap]),
        onUpdate,
        theme === 'dark' ? darkTheme : lightTheme // Toggle theme based on the 'theme' prop
      ],
    };    

    const startState = EditorState.create(codeMirrorOptions);

    editorViewRef.current = new EditorView({
      state: startState,
      parent: editor.current
    });

    return () => {
      editorViewRef.current.destroy();
    };
  }, []); 

  return <div ref={editor} {...props} />;
}

export default CodeEditor;

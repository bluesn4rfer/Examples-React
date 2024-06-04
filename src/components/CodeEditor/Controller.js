import React, { useState, useRef, useEffect, useReducer } from 'react';
import { basicSetup, EditorView } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { keymap, highlightActiveLine, highlightSpecialChars } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript'; // syntax highlighting for JavaScript
import { searchKeymap, highlightSelectionMatches } from '@codemirror/search';
import { closeBrackets, autocompletion, completionKeymap } from '@codemirror/autocomplete';
import { bracketMatching } from '@codemirror/language';
import { commentKeymap } from '@codemirror/commands';

import { lightTheme, lightSyntaxHighlighting } from './themes/light';
import { darkTheme, darkSyntaxHighlighting } from './themes/dark';

function CodeEditor({ code, onChange, updateCode, theme: initTheme = 'dark', ...props }) {
  const [theme, setTheme] = useState(initTheme);
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
        theme === 'dark' ? darkSyntaxHighlighting : lightSyntaxHighlighting,
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
  }, [theme]); 

  const toggleTheme = () => {
    setTheme(current => current === 'dark' ? 'light' : 'dark');
  };

  return (
    <div {...props}>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="darkModeSwitch"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <label className="form-check-label" htmlFor="darkModeSwitch">Dark Mode</label>
      </div>
      <div ref={editor} />
    </div>
  );
}

export default CodeEditor;

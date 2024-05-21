import React, { useRef, useEffect, useReducer } from 'react';
import { basicSetup, EditorView } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { keymap, highlightActiveLine, highlightSpecialChars } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript'; // syntax highlighting for JavaScript
import { searchKeymap, highlightSelectionMatches } from '@codemirror/search';
import { closeBrackets, autocompletion, completionKeymap } from '@codemirror/autocomplete';
import { bracketMatching } from '@codemirror/matchbrackets';
import { commentKeymap } from '@codemirror/comment';

// Define light and dark themes
const lightTheme = EditorView.theme({
  '&': {
    color: 'black',
    backgroundColor: '#f5f5f5'
  },
  '.cm-content': {
    caretColor: '#000000'
  }
}, { dark: false });

const darkTheme = EditorView.theme({
  '&': {
    color: 'white',
    backgroundColor: '#1e1e1e'
  },
  '.cm-content': {
    caretColor: '#ffffff'
  }
}, { dark: true });

function CodeEditor({ code, onChange, updateCode, theme = 'dark', ...props }) {
  const editor = useRef(null);
  const editorViewRef = useRef(null);

  const [editorState, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'init':
        return { ...state, editorView: action.editorView };
      case 'updateCode':
        if (state.editorView && action.updateCode !== undefined) {
          state.editorView.dispatch({
            changes: { from: 0, to: state.editorView.state.doc.length, insert: action.updateCode }
          });
        }
        return state;
      default:
        throw new Error('Unhandled action');
    }
  }, {});

  useEffect(() => {
    const onUpdate = EditorView.updateListener.of((view) => {
      onChange(view.state.doc.toString());
    });

    const extensions = [
      basicSetup,
      keymap.of([...defaultKeymap, indentWithTab]),
      javascript(), // Adds JavaScript syntax highlighting
      highlightActiveLine(),
      highlightSpecialChars(),
      bracketMatching(),
      closeBrackets(),
      autocompletion(), // Enables autocomplete feature
      highlightSelectionMatches(),
      keymap.of([...searchKeymap, ...completionKeymap, ...commentKeymap]),
      onUpdate,
      theme === 'dark' ? darkTheme : lightTheme // Toggle theme based on the 'theme' prop
    ];

    const startState = EditorState.create({
      doc: code,
      extensions: extensions
    });

    const editorView = new EditorView({
      state: startState,
      parent: editor.current
    });

    dispatch({ type: 'init', editorView });

    return () => {
      editorView.destroy();
    };
  }, [theme]); // Reinitialize the editor if the theme prop changes

  return <div ref={editor} {...props} />;
}

export default CodeEditor;

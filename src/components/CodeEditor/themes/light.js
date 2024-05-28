import { EditorView } from 'codemirror';

export const lightTheme = EditorView.theme({
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
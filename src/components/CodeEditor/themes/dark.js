import { EditorView } from 'codemirror';

export const darkTheme = EditorView.theme({
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
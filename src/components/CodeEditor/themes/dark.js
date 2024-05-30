import { EditorView } from "@codemirror/view";

export const darkTheme = EditorView.theme({
  "&": {
    color: "#abb2bf", // Text color
    backgroundColor: "#282c34" // Background color, soft dark
  },
  ".cm-content": {
    caretColor: "#528bff" // Caret color, bright blue for visibility
  },
  ".cm-gutters": {
    backgroundColor: "#21252b", // Gutter background, slightly lighter than the editor background
    color: "#636d83" // Gutter text color
  },
  "&.cm-focused .cm-cursor": {
    borderLeftColor: "#528bff" // Cursor color when focused
  },
  "&.cm-focused .cm-selectionBackground, ::selection": {
    backgroundColor: "#3e4451" // Selection color, muted dark grey
  },
  ".cm-matchingBracket": {
    backgroundColor: "#3a3f4b",
    outline: "1px solid #8a949d" // Matching brackets
  },
  ".cm-nonmatchingBracket": {
    backgroundColor: "#3a3f4b",
    outline: "1px solid #e06c75" // Non-matching brackets, red accent
  },
  ".cm-activeLine": { backgroundColor: "#2c313c" }, // Active line background
  ".cm-selectionMatch": { backgroundColor: "#676767" } // Search matches
}, { dark: true });

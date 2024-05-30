import { EditorView } from "@codemirror/view";

export const lightTheme = EditorView.theme({
  "&": {
    color: "#000", // Text color
    backgroundColor: "#fff" // Background color
  },
  ".cm-content": {
    caretColor: "#000" // Caret color
  },
  ".cm-gutters": {
    backgroundColor: "#f5f5f5", // Gutter background
    color: "#888", // Gutter text color
  },
  "&.cm-focused .cm-cursor": {
    borderLeftColor: "#000" // Cursor color when focused
  },
  "&.cm-focused .cm-selectionBackground, ::selection": {
    backgroundColor: "#b0d0f0" // Selection color
  },
  ".cm-matchingBracket, .cm-nonmatchingBracket": {
    backgroundColor: "#bad0f8",
    outline: "1px solid #5f5f5f"
  },
  ".cm-activeLine": { backgroundColor: "#eaf5fe" }, // Active line background
  ".cm-selectionMatch": { backgroundColor: "#f8f9fa" } // Search matches
}, { dark: false });
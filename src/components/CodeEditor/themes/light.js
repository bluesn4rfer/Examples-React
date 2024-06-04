import { EditorView } from "@codemirror/view";
import { tags } from '@lezer/highlight'
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language'

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

export const lightSyntaxHighlighting = syntaxHighlighting(HighlightStyle.define([
  { tag: tags.keyword, color: "#0077aa" },  // Dark blue for keywords
  { tag: tags.comment, color: "#6c757d" }, // Standard grey for comments
  { tag: tags.string, color: "#a31515" },  // Dark red for strings
  { tag: tags.function(tags.variableName), color: "#795e26" }, // Brown for functions
  { tag: tags.number, color: "#1c00cf" },  // Darker blue for numbers
  { tag: tags.className, color: "#1c00cf" }, // Darker blue for classes
  { tag: tags.typeName, color: "#267f99" },  // Teal for types
  { tag: tags.operator, color: "#a46035" }, // Dark orange for operators
  { tag: tags.regexp, color: "#a31515" }    // Dark red for regular expressions
]));
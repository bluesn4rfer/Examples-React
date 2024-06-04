import { EditorView } from "@codemirror/view";
import { tags } from '@lezer/highlight'
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language'

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

export const darkSyntaxHighlighting = syntaxHighlighting(HighlightStyle.define([
  { tag: tags.keyword, color: "#c678dd" },  // Bright purple for keywords
  { tag: tags.comment, color: "#5c6370" }, // Dim grey for comments, less distracting
  { tag: tags.string, color: "#98c379" },  // Soft green for strings
  { tag: tags.function(tags.variableName), color: "#61afef" }, // Bright blue for functions
  { tag: tags.number, color: "#d19a66" },  // Soft orange for numbers
  { tag: tags.className, color: "#e5c07b" }, // Yellow for classes
  { tag: tags.typeName, color: "#e5c07b" },  // Same yellow for types
  { tag: tags.operator, color: "#56b6c2" }, // Cyan for operators
  { tag: tags.regexp, color: "#d19a66" }   // Same orange for regular expressions
]));
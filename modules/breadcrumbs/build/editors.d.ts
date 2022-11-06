/// <reference types="react" />
import { TextEditingContext } from "./getContext";
export declare type EditorProps = {
    value: string;
    onChange: (value: string) => void;
    withContext?: (context: TextEditingContext) => void;
    className: string;
};
/**
     How to make color highlighting?
  
     I guess we need to wrap all words with a span and make it contenteditable, so we can create a editor where we are styling all words that are written
  
     We can then also change the value of the word if you are NOT editing that word.
  
     So you would only see the true value of a word when your cursor is on that word
  
     TODO:
  
     - replace the textarea with a div contenteditable
     - make selectionStart and selectionEnd still working (on the original text)
     - whenever you stop editing a word, it needs to be wrapped with a span and styled with a function taking that word and returning a style
     - whenver you start a new word through a separator, an empty span should be created
     - the span of the current word being edited must have a location (x,y). get that exact location so we can render an autocompletion intellisense
  
     */
export declare const ContextTextArea: (props: EditorProps) => JSX.Element;
export declare const DivContentEditable: (props: EditorProps) => JSX.Element;
//# sourceMappingURL=editors.d.ts.map
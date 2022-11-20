// This example is for an Editor with `ReactEditor` and `HistoryEditor`
import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';
import { HistoryEditor } from 'slate-history';
import {
  createEditor,
  Descendant,
} from 'slate';
import {
  Slate,
  Editable,
  withReact,
} from 'slate-react';


export type CustomEditor =
  BaseEditor &
    ReactEditor &
    HistoryEditor;

export type ParagraphElement =
  {
    type: 'paragraph';
    children: CustomText[];
  };

export type HeadingElement = {
  type: 'heading';
  level: number;
  children: CustomText[];
};

export type CustomElement =
  | ParagraphElement
  | HeadingElement;

export type FormattedText = {
  text: string;
  bold?: true;
};

export type CustomText =
  FormattedText;

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const InitialDocument = : Descendant[] =
  [
    {
      type: 'paragraph',
      children: [
        {
          text: 'A line of text in a paragraph.',
        },
      ],
    },
  ];

export default InitialDocument;

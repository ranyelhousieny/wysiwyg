import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
// Import React dependencies.
import React, {
  useState,
} from 'react';
// Import the Slate editor factory.
import { createEditor } from 'slate';

import { Navbar } from 'react-bootstrap';

// Import the Slate components and React plugin.
import {
  Slate,
  Editable,
  withReact,
} from 'slate-react';

// TypeScript users only add this code
import {
  BaseEditor,
  Descendant,
} from 'slate';
import { ReactEditor } from 'slate-react';
import Container from 'react-bootstrap/Container';
import Editor from './components/Editor';
import InitialDocument from './utils/InitialDocument';

type CustomElement = {
  type: 'paragraph';
  children: CustomText[];
};

type CustomText = {
  text: string;
};

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor &
      ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue: Descendant[] =
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

const App = () => {
  const [editor] = useState(
    () =>
      withReact(
        createEditor()
      )
  );

  const [
    document,
    updateDocument,
  ] = useState(
    InitialDocument
  );

  return (
    <>
      <Navbar
        bg='dark'
        variant='dark'>
        <Navbar.Brand>
          {' '}
          <img
            src={logo}
            width='30'
            height='30'
          />{' '}
          WYSIWYG Editor By
          Rany{' '}
        </Navbar.Brand>
      </Navbar>

      <br />
      <div>
        <Editor
          document={document}
          onChange={
            updateDocument
          }
        />
      </div>
    </>
  );
};

export default App;

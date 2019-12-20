import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoardContainer from './KanbanBoard';
import propTypes from 'prop-types';
import './index.css';

let cardsList = [
  {
    id: 1,
    title: "Przeczytać ksiązkę",
    description: "Całą książkę!",
    color: "#BD8D31",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Napisać trochę kodu",
    description: "Będę przepisywać kod przykładów z książki",
    color: "#3A7E28",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "Przykład listy kontaktów",
        done: true
      },
      {
        id: 2,
        name: "Przykład Kanban",
        done: false
      },
      {
        id: 3,
        name: "Moje eksperymenty",
        done: false
      }
    ]
  },
  {
    id: 3,
    title: "Zacząć projekt z tablicami Kanban",
    description: "Jedynie zacząć :)",
    color: "#59f6B5",
    status: "done",
    tasks: []
  }
]


ReactDOM.render(<KanbanBoardContainer cards={cardsList} />, document.querySelector("#root"));

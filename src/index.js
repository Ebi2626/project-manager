import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './KanbanBoard';
import './index.css';

let cardsList = [
  {
    id: 1,
    title: "Przeczytać ksiązkę",
    description: "Całą książkę!",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Napisać trochę kodu",
    description: "Będę przepisywać kod przykładów z książki",
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
    status: "done",
    tasks: []
  }
]

ReactDOM.render(<KanbanBoard cards ={cardsList} />, document.querySelector("#root"));

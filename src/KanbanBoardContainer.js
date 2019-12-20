import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';
import propTypes from 'prop-types';

class KanbanBoardContainer extends Component {
    constructor(){
        super()
        this.state = {
            cards: this.props.cards,
            elo: "elo"
        }
    }
    addTask(cardId, taskName){
        console.log("Dodaje");
    }
    deleteTask(cardId, taskId, taskIndex){
        console.log("Usuwa");

    }
    toggleTask(cardId, taskId, taskIndex){
        console.log("Zmienia");
    }

    render(){

        return(
            <KanbanBoard //cards={this.state.cards}
             elo={this.state.elo} taskCallbacks={this.taskCallbacks = {toggle: this.toggleTask,
                delete: this.deleteTask,
                add: this.addTask}} />
        )
    }
}
KanbanBoard.propTypes = {
    cards: propTypes.arrayOf(propTypes.object),
    taskCallbacks: propTypes.object
  }
export default KanbanBoardContainer
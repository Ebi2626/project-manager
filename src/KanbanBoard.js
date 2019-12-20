import React, { Component } from 'react';
import List from "./List"

class KanbanBoard extends Component {
    render(){
        console.log(this.props);

        return (
            <div className="app">

                <List id='todo' title='Do zrobienia' taskCallbacks={this.props.taskCallbacks} cards={
                    this.props.cards.filter((card)=>card.status === "todo")
                } />

                <List id='in-progress' title='W toku' taskCallbacks={this.props.taskCallbacks} cards={
                    this.props.cards.filter((card)=>card.status === "in-progress")
                } />

                <List id='done' title='Zrobione' taskCallbacks={this.props.taskCallbacks} cards={
                    this.props.cards.filter((card)=>card.status === "done")
                } />

            </div>
        )
    }
}

export default KanbanBoard;
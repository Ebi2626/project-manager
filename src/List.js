import React, { Component } from 'react';
import Card from './Card';
import propTypes from 'prop-types';

class List extends Component {
    constructor(props){
        super(props);
    }
    render(){
        var cards = this.props.cards.map((card) => {
                return <Card id={card.id}
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        tasks={card.tasks}
                        color={card.color}
                        taskCallbacks={this.props.taskCallbacks}
                />
            })
            return (
                <div className="list">
                    <h1>{this.props.title}</h1>
                    {cards}
                </div>
            )
    }
}
List.propTypes = {
    title: propTypes.string.isRequired,
    cards: propTypes.arrayOf(propTypes.object),
    taskCallbacks: propTypes.object
}

export default List;
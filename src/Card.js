import React, { Component } from 'react';
import CheckList from './CheckList';

class Card extends Component {
    constructor(){
        super();
        this.state = {
            cardDetails: false
        }
        this.showDetails = this.showDetails.bind(this);
    }
    showDetails(){
        this.setState({
                        cardDetails: !this.state.cardDetails})
    }
    render(){
        let cardDetails;
        if(this.state.cardDetails){
        cardDetails = <div className="card__details">
        {this.props.description}
        <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        {}
    </div>}

        return (
            <div className="card">
    <div className={this.state.cardDetails?"card__title card__title--is-open":"card__title"} onClick={this.showDetails}>{this.props.title}</div>
                {cardDetails}
            </div>
        )
    }
}
export default Card;
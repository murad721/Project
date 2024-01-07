import React, { Component } from "react";
import "./style.css";

class Item extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="item-container">
                <img src={this.props.img_url}/>
                <h2>
                    {this.props.brand} {this.props.model}
                </h2>
                <p>Price: {this.props.price}$</p>
            </div>
        );
    }
}

export default Item;
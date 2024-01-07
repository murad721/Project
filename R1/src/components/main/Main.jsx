import { addCar, removeAll, sellCar } from '../redux/Action';
import './style.css';
import React, { Component } from 'react';
import { connect }from "react-redux";

class Main extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="main-container">
               <h2>Car Store information</h2>
               <p>Car price: {this.props.car_price}$</p>
               <p>Car count: {this.props.car_count}</p>
               <p>Total price: {this.props.car_total_price}$</p>
               <p>Total income: {this.props.car_total_income}$</p>
               <button onClick={this.props.addCar}>ADD CAR</button>
               <button onClick={this.props.sellCar}>SELL CAR</button>
               <button onClick={this.props.removeAll}>REMOVE ALL</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCar: () => dispatch(addCar()),
        sellCar: () => dispatch(sellCar()),
        removeAll: () => dispatch(removeAll())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

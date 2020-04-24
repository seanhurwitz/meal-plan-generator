import React, { Component } from 'react';
import MealChoice from './MealChoice';
import classes from './Meal.module.css';

class Meal extends Component {
  state = {
    input: '',
  };
  inputChangeHandler = (event) => {
    this.setState({ input: event.target.value });
  };
  addMealHandler = (event) => {
    event.preventDefault();
    const alreadyHasMeal = this.props.choices.some(
      (choice) =>
        choice.trim().toUpperCase() === this.state.input.trim().toUpperCase(),
    );
    if (!alreadyHasMeal) {
      this.props.addMeal(this.props.day, this.props.meal, this.state.input);
      this.setState({ input: '' });
    } else {
      this.setState({ input: 'VALUE ALREADY FOUND!!!' });
      setTimeout(() => {
        this.setState({ input: '' });
      }, 500);
    }
  };
  render() {
    const inputTextId = `myInputText${this.props.day}${this.props.meal}`;
    return (
      <div className={classes.Meal}>
        <h5>{this.props.meal}</h5>
        <div className={classes.MealChoiceBox}>
          {' '}
          {this.props.choices.length > 0 &&
            this.props.choices.map((choice, idx) => (
              <MealChoice
                key={idx}
                choice={choice}
                removeMeal={this.props.removeMeal}
                day={this.props.day}
                meal={this.props.meal}
              />
            ))}
        </div>
        <form onSubmit={this.addMealHandler}>
          <input
            type="text"
            id={inputTextId}
            style={{ width: '100%' }}
            onChange={this.inputChangeHandler}
            value={this.state.input}
          />
          <input type="submit" value="+" disabled={!this.state.input.trim()} />
        </form>
      </div>
    );
  }
}

export default Meal;

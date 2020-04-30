import React, { Fragment, PureComponent } from 'react';
import { Radio, Button } from '../../../../UI';
import classes from './AddMeal.module.css';

class AddMeal extends PureComponent {
  state = {
    choice: '',
    type: 'Meat',
    duplicateValue: false,
  };
  componentDidUpdate() {
    const duplicateValue = this.props.existingMeals.some(
      (meal) =>
        meal[0].toLowerCase().trim() ===
          this.state.choice.toLowerCase().trim() && meal[1] === this.state.type,
    );
    this.setState({ duplicateValue });
  }
  inputChangeHandler = (event) => {
    this.setState({ choice: event.target.value });
  };
  radioChangeHandler = (type) => {
    this.setState({ type });
  };
  render() {
    return (
      <Fragment>
        <h3 style={{ textAlign: 'center' }}>
          Adding for {this.props.context.day} {this.props.context.meal}
        </h3>
        <input
          className={classes.AddMeal}
          type="text"
          value={this.state.choice}
          onChange={this.inputChangeHandler}
          autoFocus
        ></input>
        <Radio
          config="MealTypes"
          options={['Meat', 'Dairy', 'Parev']}
          change={this.radioChangeHandler}
        />
        {this.state.duplicateValue ? (
          <p
            style={{
              width: '80%',
              color: 'red',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            VALUE ALREADY PRESENT
          </p>
        ) : (
          <Button
            disabler={!this.state.choice.trim() || this.state.duplicateValue}
            clicked={() =>
              this.props.addMeal(
                this.props.context.day,
                this.props.context.meal,
                [this.state.choice.trim(), this.state.type],
              )
            }
          >
            Add
          </Button>
        )}
      </Fragment>
    );
  }
}

export default AddMeal;
